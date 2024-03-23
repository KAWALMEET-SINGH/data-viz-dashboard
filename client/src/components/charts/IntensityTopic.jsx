import React from 'react';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

const IntensityTopic = () => {
  const { data } = useSelector((state) => state.data);
  const groupedData = data.reduce((acc, entry) => {
    if (!acc[entry.country]) {
      acc[entry.country] = [];
    }
    acc[entry.country].push(entry.intensity);
    return acc;
  }, {});

  const chartData = Object.entries(groupedData).map(([country, intensities]) => ({
    x: country,
    y: Math.floor(intensities.reduce((sum, val) => sum + val, 0) / intensities.length)
  }));


  const chartOptions = {
    chart: {
      height: 600,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
      },
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
        text: 'Intensity(Average)',
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
      text: 'Intensity',
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
      <ReactApexChart options={chartOptions} series={[{ data: chartData }]} type="bar" height={600}  width={1000}/>
    </div>
  );
};

export default IntensityTopic;
