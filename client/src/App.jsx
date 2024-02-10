import { Routes, Route } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import AllCoinsView from './views/AllCoinsView'
import OneCoinView from './views/OneCoinView'
import MainLayout from './layouts/MainLayout'
import { oneCoinLoader } from './helpers/queries'

const App = () => {
    const queryClient = useQueryClient()

    return (
        <MainLayout>
            <Routes>
                <Route path={'/'} element={<AllCoinsView />} />
                <Route
                    path={'/coins/:id'}
                    element={<OneCoinView />}
                    loader={oneCoinLoader(queryClient)}
                />
                <Route path={'/*'} element={<h1>Not Found!</h1>} />
            </Routes>
        </MainLayout>
    )
}

export default App
