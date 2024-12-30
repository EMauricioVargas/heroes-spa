import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<PublicRoute>
                    <LoginPage></LoginPage>
                </PublicRoute>}></Route>
                {/* <Route path='login' element={<LoginPage></LoginPage>}></Route> */}
                <Route path="/*" element={<PrivateRoute>
                    <HeroesRoutes></HeroesRoutes>
                </PrivateRoute>}></Route>

            </Routes>
        </>
    )
}
