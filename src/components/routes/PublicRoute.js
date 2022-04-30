import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

export const PublicRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
        <Routes>
            <Route
                {...rest}
                render={
                    ({ location }) => (
                        !isAuthenticated ? (
                            children
                        ) : (
                            <Navigate
                                to={{
                                    pathname: '/',
                                    state: { from: location }
                                }}
                            />
                        )
                    )
                }
            />
        </Routes>
    )
}

export default PublicRoute;
