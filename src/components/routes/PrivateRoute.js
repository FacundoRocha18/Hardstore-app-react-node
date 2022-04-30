import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
    return (
        <Routes>
            <Route
                {...rest}
                render={
                    ({ location }) => (
                        isAuthenticated ? (
                            element
                        ) : (
                            <Navigate
                                to={{
                                    pathname: '/api/auth/login',
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

export default PrivateRoute;