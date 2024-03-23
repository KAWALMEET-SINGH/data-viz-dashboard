import React from 'react'
import IntensityTopic from '../components/charts/IntensityTopic'
import RelevanceTopic from '../components/charts/RelevanceTopic'
import RLIPlot from '../components/charts/LinePlot'
import RLICountry from '../components/charts/RLICountry'
import RLIregion from '../components/charts/RLIRegion'
import Relevancecountry from '../components/charts/RelevanceCountry'

const Graphs = () => {
  return (
    <main className='flex flex-col justify-around items-center p-2 m-2'>
        <div className='flex flex-row justify-between items-center gap-3 flex-wrap'>
          <RLIPlot/>  
        </div>
        <div className='flex flex-row justify-between items-center gap-3 flex-wrap'>
          <RLICountry/>
        </div>
        <div className='flex flex-row justify-center items-center gap-3 flex-wrap'>
            <RLIregion/>

        </div>
        <div className='flex flex-row justify-center items-center gap-3 flex-wrap'>
            <IntensityTopic/>

        </div>
        <div className='flex flex-row justify-center items-center gap-3 flex-wrap'>
            <RelevanceTopic/>
            <Relevancecountry/>

        </div>
    </main>
  )
}

export default Graphs