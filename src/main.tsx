import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './AppRouters.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme/ThemeProvider.tsx'
import { darkTheme } from './components/theme/theme.ts'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <AppRouters />
        </ThemeProvider>

      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
