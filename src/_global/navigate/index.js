import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const useNavigateSearch = (jj) => {
  const navigate = useNavigate();
  return (pathname, params) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};
export default useNavigateSearch;
