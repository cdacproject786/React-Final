import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useState({});
    const [patient, setPatient] = useState({})
    const [address, setAddress] = useState({})
    
    return (
        <AuthContext.Provider value = {{ auth, setAuth, patient, setPatient, address, setAddress }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;