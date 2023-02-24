import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useUser() {
  const userHooks = useContext(UserContext);

  return userHooks;
}
