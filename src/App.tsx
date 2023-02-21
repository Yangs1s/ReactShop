import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    )
}

export default App
