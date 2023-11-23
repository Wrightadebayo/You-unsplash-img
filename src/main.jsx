// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import './index.css';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <AppProvider>
      <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools initialisOpen={false} />
      </QueryClientProvider>
    </AppProvider>
  
)










// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { AppProvider } from './context';

// ReactDOM.createRoot(document.getElementById('root')).render(
// <AppProvider>
// <App />
// </AppProvider>
// )