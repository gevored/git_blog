import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../api/axios";

interface Issue {
  body: string;
  title: string;
  created_at: string;
  number: number;
}

interface IssueProviderProps {
  fetchGetIssue: (query?: string) => void;
  issues: Issue[];
}
interface IssueContextProps {
  children: ReactNode;
}

export const IssueContext = createContext({} as IssueProviderProps);

export function IssueProvider({ children }: IssueContextProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchGetIssue = useCallback(async (query?: string) => {
    try {
      const { data } = await api.get("search/issues", {
        params: {
          q:
            query === undefined
              ? `repo:rocketseat-education/bootcamp-gostack-desafios`
              : `${query} repo:rocketseat-education/bootcamp-gostack-desafios`,
        },
      });
      const items = await data.items;
      setIssues(items);
      console.log("fetch issues: ", issues);
    } catch (error) {
      console.log("erro do fetch issue: ", error);
    }
  }, []);

  useEffect(() => {
    fetchGetIssue();
  }, []);
  return (
    <IssueContext.Provider value={{ issues, fetchGetIssue }}>
      {children}
    </IssueContext.Provider>
  );
}
