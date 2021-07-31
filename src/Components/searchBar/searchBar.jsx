import React, { Component } from "react";

export class searchBar extends Component {
  state = { searchTerm: "" };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.submitHandler}>
          <div className='ui field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => {
                this.setState({ searchTerm: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default searchBar;
