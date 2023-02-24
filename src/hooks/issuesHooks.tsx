import { useContext } from "react";
import { IssueContext } from "../context/IssuesContext";

export function useIssue() {
  const issueHooks = useContext(IssueContext);

  return issueHooks;
}
