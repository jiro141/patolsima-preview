import Cookies from "js-cookie";
import AuthContext from "./AuthContext";
import { authApi } from "api/authApi";

const AuthProvider = ({children}) =>{
    const getTokens = ({access, refresh}) => {
        Cookies.set('access', access)
        Cookies.set('refresh', refresh)
        console.log(access, "este es el token acces");
        console.log(refresh, "este es el token refresh");
    }
    const refreshToken = () => {
        const refreshToken = Cookies.get('refresh') 
        Cookies.set('access',refreshToken)
        Cookies.remove('refresh')
    }
    const context = {getTokens,refreshToken}

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
      );
}

export default AuthProvider;


