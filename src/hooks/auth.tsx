import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  username: string;
};

type AuthContextData = {
  user: User;
  singIn: (user: User) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);

  function singIn(user: User) {
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
