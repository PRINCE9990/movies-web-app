import React from "react";
class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>showing 9 movies from the database</p>
        <button type="button" class="btn btn-primary mb-3">
          New
        </button>
        <div className = "row">
            <div className = "col-3">

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
            </div>
            <div className = "col-9"></div>
        </div>
        </div>
      </div>
    );
  }
}
export default Search;
