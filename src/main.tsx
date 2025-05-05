import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './AppRouters.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouters />

      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
