import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    return (
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;