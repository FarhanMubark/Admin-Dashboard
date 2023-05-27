import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './Styles/Theme'
import { BrowserRouter } from 'react-router-dom'
import SidebarWithHeader from './Components/UiSidBar'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient}>
    {/* <BrowserRouter> */}
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App/>
    </ChakraProvider>
    {/* </BrowserRouter> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
