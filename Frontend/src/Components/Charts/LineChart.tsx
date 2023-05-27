import { useEffect, useState } from "react";
import data from "../data.json"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from 'react-chartjs-2';
import { border, Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import Orders from '../../Pages/Orders';

function LineChart() {
const [loading, setLoading] = useState<any>(false);
const [chartData, setChartData] = useState<any>({})

useEffect(() => {
  setTimeout(() => {
    setLoading(true)
    setChartData({
      labels: data.map(item => item.ngay_mua),
      datasets: [
        {
          label: 'Revenue',
          data: data.map((item) => item.trigia),
          fill: true,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    })
    setLoading(false)
  }, 1000)
  
}, [])

return (
  <Box className="App" h={{base:'200px', md:'350px', lg:'350px'}} w={{base:'350px', md:'700px', lg:'700px'}} >
    <Skeleton isLoaded={!loading}>
    <Box className='chart'>
      {
        chartData && chartData?.datasets && (
         
          <Line 
            options={ {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Revenue',
                  },
                },
              }} 
            data={chartData} 
          />
        )
      }
    </Box>
    </Skeleton>
  </Box>
);


}

export default LineChart;
