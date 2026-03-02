import { Navigate } from "react-router-dom";
import  useAuth  from "../hooks/useAuth";


function ProtectedRoute({ children }){

    const {getCurrentUser} = useAuth();
   
    const user = getCurrentUser();

    if(!user){
        return <Navigate to="/" />;
    }
    return children;

}


export default ProtectedRoute;