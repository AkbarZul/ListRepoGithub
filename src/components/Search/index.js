import React from "react";
import { FaSearch, FaSpinner, FaGithub } from "react-icons/fa";
import "./search.css";

const Search = (props) => {
  return (
    <>
      <div className="containerSearch">
        <h1 className="searchText">ListRepo</h1>
        <div className="containerGit">
          <h1 className="searchText">github.com/</h1>
          <input
            type="text"
            onKeyPress={props.onKeyPress}
            ref={props.inputRef}
            onFocus={props.onFocus}
            placeholder="Username"
          />
          <button className="button" onClick={() => props.search}>
            {props.loading ? <FaSpinner /> : <FaSearch />}
          </button>
        </div>
        <a href="https://github.com/AkbarZul">
          <FaGithub size={30} />
        </a>
      </div>
    </>
  );
};

export default Search;
