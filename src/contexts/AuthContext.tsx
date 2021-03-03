import { createContext, ReactNode } from "react";
import redirector from 'next/router';
import Cookies from "js-cookie";
import api from "../connectors/APIConnector";

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProps {
  logIn: () => void;
  logOut: () => void;
  getData: () => Promise<UserData>;
  saveData: () => Promise<boolean>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  _id: string;
  login: string;
  name: string;
  level: string;
  currentExperience: number;
  challengesCompleted: number;
  avatar_url: string;
}

export function AuthProvider({children}: AuthProviderProps) {
  async function logIn() {
    redirector.push('https://github.com/login/oauth/authorize?client_id=1bcf2d45dafaea43a710');
  }

  function logOut() {
    Cookies.remove('level');
    Cookies.remove('currentExperience');
    Cookies.remove('challengesCompleted');
    Cookies.remove('access_token');

    redirector.replace('/login');

  }

  async function getData() {
    try {
      const data = (await api.get('/api/user')).data as UserData;
      return data;  
    }
    catch (error) {
      redirector.push(`/login?error=${error.response.status === 401 ? 'not_authorized' : 'internal_error'}`);
      return {} as UserData;
    }
  }

  async function saveData() {
    const result = (await api.post('/api/save', Cookies.getJSON())).data;
    return !!result.ok;
  }

  return (
    <AuthContext.Provider value={{
      logIn,
      logOut,
      getData,
      saveData
    }}>
      {children}
    </AuthContext.Provider>
  );
}