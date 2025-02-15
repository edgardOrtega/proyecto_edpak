import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("/data/listadoUsuarios.json");
      const users = await response.json();

      const foundUser = users.find(
        (u) => u.Email === email && u.Password === password
      );

      if (foundUser && foundUser.Activo) {
        setUser({ userName: foundUser.userName, rol: foundUser.Rol });
        return { success: true, rol: foundUser.Rol };
      } else {
        return { success: false, message: "Credenciales incorrectas o usuario inactivo." };
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return { success: false, message: "Error en el servidor." };
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};