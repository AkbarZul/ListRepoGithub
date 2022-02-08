import React, { useState, useRef } from "react";
import "./App.css";
import { Search, RepoList, User } from "../components";

const App = () => {
  const [user, setUser] = useState({
    prof: {},
    repos: [],
  });
  const [loading, setLoading] = useState(false);

  const inputEl = useRef(null);

  async function search() {
    setLoading(true);
    const { prof, repos } = await getApiData();
    setLoading(false);
    if (prof.message === "Not Found") {
      inputEl.current.focus();
    } else {
      setUser({
        prof,
        repos,
      });
    }
  }
  async function getApiData() {
    const [prof, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${inputEl.current.value}`).then(
        (response) => response.json()
      ),
      fetch(`https://api.github.com/users/${inputEl.current.value}/repos`).then(
        (response) => response.json()
      ),
    ]);

    return { prof, repos };
  }
  function handleEnterKey() {
    const ENTER = 13;
    if (window.event.keyCode === ENTER) {
      search();
      inputEl.current.blur();
    }
  }
  function selectText() {
    inputEl.current.select();
  }
  return (
    <>
      <Search
        onKeyPress={handleEnterKey}
        search={search}
        onFocus={selectText}
        loading={loading}
        inputRef={inputEl}
      />
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div>{user.prof.id && <User prof={user.prof} />}</div>
        <div>
          {user.repos.map((r) => (
            <div className="repo" key={r.id}>
              <RepoList repos={r} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
