import React from 'react'
import { useState, useEffect } from 'react'
import { getRevenue } from '../../API'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale, BarElement } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarElement);
import { Bar } from 'react-chartjs-2'
import { Box } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';


export default function MyChart(){
    const [loading, setLoading] = useState<any>(false)
    const [revenueData, setRevenueData] = React.useState({
        labels:[],
        datasets:[]
    })

    // getting labels and data from api
    React.useEffect(() => {
          setLoading(true)
        getRevenue().then(res=>{
            const labels = res.carts.map((cart:any) =>{
                return `User-${cart.userId}`;
            })
            const data = res.carts.map((cart:any) =>{
                return cart.discountedTotal;
            })

           const dataSource:any = {
                labels,
                datasets: [
                  {
                    label: 'revenue',
                    data: data,
                    backgroundColor: 'blue',
                  }
                ],
              };
              setRevenueData(dataSource);
              setLoading(false)
        })
    
     
    }, [])
    

 const options:any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'Bottom', 
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };

    return <Box  h={{base:'150px', md:'350px', lg:'350px'}} w={{base:'350px', md:'700px', lg:'700px'}}> 
    <Skeleton isLoaded={!loading}>
    <Bar  data={revenueData} options={options}/> 
    </Skeleton>
    </Box> 
}












