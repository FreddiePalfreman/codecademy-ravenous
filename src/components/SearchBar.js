import React, {useState} from "react";
import globalStyles from "../bootstrap/bootstrap.min.module.css";
import cx from "classnames";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  };
  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };
  const handleSortByChange = ({ target }) => {
    setSortBy(target.textContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term, location, sortBy);
  };

  return (
    <div className={cx(globalStyles.container, globalStyles["mt-5"])}>
      <div
        className={cx(
          globalStyles.row,
          globalStyles.container,
          globalStyles["text-center"]
        )}
      >
        <div className={globalStyles["col"]}>
          <h5 
          className={cx(sortBy==="Best Match" ? globalStyles["text-primary"] : "")} 
          onClick={handleSortByChange}>
            Best Match
          </h5>
        </div>
        <div className={globalStyles["col"]}>
          <h5 className={cx(sortBy==="Highest Rated" ? globalStyles["text-primary"] : "")} 
          onClick={handleSortByChange}>
            Highest Rated
          </h5>
        </div>
        <div className={globalStyles["col"]}>
          <h5 className={cx(sortBy==="Most Reviewed" ? globalStyles["text-primary"] : "")} 
          onClick={handleSortByChange}>
            Most Reviewed
          </h5>
        </div>
      </div>
      <form className={globalStyles.row} onSubmit={handleSubmit}>
        <input
          className={cx(globalStyles["form-control"], globalStyles.col)}
          placeholder="Search Businesses"
          onChange={handleTermChange}
          value={term}
        />
        <input
          className={cx(globalStyles["form-control"], globalStyles.col)}
          placeholder="Where?"
          onChange={handleLocationChange}
          value={location}
        />
        <button
          type="submit"
          className={cx(
            globalStyles.btn,
            globalStyles["btn-primary"],
            globalStyles.col
          )}
        >
          Let's Go
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
