import React from "react";
import { GoRepoForked, GoLaw } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import "./repolist.css";

const RepoList = (props) => {
  const repos = props.repos;
  return (
    <>
      <a href={repos.html_url} className='link'>
        <div className="repoinfo">
          <div className="title">
          {repos.fork && <GoRepoForked className="icons" />}
          <p>{repos.name}</p>
          </div>
          <div className="detail">
            <div className="info">
            <FaCode className="icon" />
              <p>{repos.language}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default RepoList;
