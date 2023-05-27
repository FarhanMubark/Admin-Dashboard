
import { Box } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function InventoryChart(){

    const data = {
        labels: ['Huawei', 'Apple', 'Micosoft','Samsung'], 
        datasets: [
          {
            label: 'Available Stock',
            data: [53, 49,28,43],
            backgroundColor: [
              '#48D1CC',
              '#32CD32',
              'red',
              '#FFFF00'
            ],
            borderColor: [
              '#191970',
              '#191970',
              '#191970',
              '#191970'
            ],
            borderWidth: 1,
          },
        ],
      };
    
      return ( <Box h={{base:'300px', md:'350px', lg:'450px'}} w={{base:'500px', md:'700px', lg:'700px'}} className="Inventorychart"> 
                 <Doughnut data={data}  /> 
               </Box>
             )
       }