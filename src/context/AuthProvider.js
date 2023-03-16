import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useState({});
    const [patient, setPatient] = useState({})
    const [address, setAddress] = useState({})
    const [doctor,setDoctor] = useState({});
    const [details,setDetails] = useState({});
    
    return (
        <AuthContext.Provider value = {{ auth, setAuth, patient, setPatient, address, setAddress,doctor,setDoctor,details,setDetails }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;