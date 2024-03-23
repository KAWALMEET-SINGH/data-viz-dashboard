import React from 'react';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

const RLIregion = () => {
  const { data } = useSelector((state) => state.data);

  const groupedData = data.reduce((acc, entry) => {
    if (!acc[entry.region]) {
      acc[entry.region] = {
        intensity: [],
        likelihood: [],
        relevance: []
      };
    }
    acc[entry.region].intensity.push(entry.intensity);
    acc[entry.region].likelihood.push(entry.likelihood);
    acc[entry.region].relevance.push(entry.relevance);
    return acc;
  }, {});

  const chartData = Object.entries(groupedData).map(([region, values]) => ({
    x: region,
    intensity: Math.floor(values.intensity.reduce((sum, val) => sum + val, 0) / values.intensity.length),
    likelihood: Math.floor(values.likelihood.reduce((sum, val) => sum + val, 0) / values.likelihood.length),
    relevance: Math.floor(values.relevance.reduce((sum, val) => sum + val, 0) / values.relevance.length)
  }));

  const options = {
    chart: {
      height: 650,
      type: 'line'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Values',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }
      },
      labels: {
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }
      }
    },
    title: {
      text: 'RLI region Plot',
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif'
      }
    }
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={[{ name: 'Intensity', data: chartData.map(item => ({ x: item.x, y: item.intensity })) }, { name: 'Likelihood', data: chartData.map(item => ({ x: item.x, y: item.likelihood })) }, { name: 'Relevance', data: chartData.map(item => ({ x: item.x, y: item.relevance })) }]} type="line" height={650}  width={1000}/>
      </div>
    </div>
  );
};

export default RLIregion;
