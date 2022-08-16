import react from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SearchResult = () => {
  const keyword = useLocation().state.keyword;
  console.log(keyword)
  return(
    <Result> { keyword }에 대한 검색 결과 입니다. </Result>
  )
}

export default SearchResult;

const Result = styled.div`
  z-index: 999;
  position: absolute;
  top: 600px;
  width: 300px;
  height: 100px;
  background-color: #ffffff;
  left: 0;
  right: 0;
  margin: auto;

  border: 1px solid #d5d5d5;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  
  padding: 20px;
  box-sizing: border-box;
`