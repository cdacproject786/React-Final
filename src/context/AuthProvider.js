import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useState({});
    const [patient, setPatient] = useState({})
    
    return (
        <AuthContext.Provider value = {{ auth, setAuth, patient, setPatient }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;