import {
  ReactNode,
  useEffect,
  useState,
  useCallback,
  createContext,
} from "react";

import { api } from "../api/axios";
interface User {
  avatar_url: string;
  bio: string;
  login: string;
  following: number;
  company: string;
  name: string;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as User);

export function UserProvider({ children }: UserProviderProps) {
  const [userState, setUserState] = useState({} as User);

  const fetchProfileUserFromGitHub = useCallback(async () => {
    const { data } = await api.get("users/diego3g");
    setUserState({ ...data });
  }, []);

  useEffect(() => {
    fetchProfileUserFromGitHub();
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
