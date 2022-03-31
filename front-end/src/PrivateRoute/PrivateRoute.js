import { Route,Redirect } from 'react-router-dom';
import { isAuthenticated } from "../utils//authenticationOperations"

    function PrivateRoute({ children,...rest}) {
    
        
    return (
        
        <Route
        {...rest}
        render={
            () => (
            isAuthenticated()
                ? (
                children
                ) : (
                <Redirect
                    to="/"
                />
                ))
        }
        />
    );
    }

export default PrivateRoute;
  