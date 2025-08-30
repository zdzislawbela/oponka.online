import React from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchParamByName = (name: string) => {
  const [searchParams] = useSearchParams();

  return React.useMemo(() => searchParams.get(name), [name, searchParams]);
};
