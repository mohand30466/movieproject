import React from "react";
import "./SearchBar.css";
import { searchMovie } from "../../Api/Api";

import axios from "axios";
import { Redirect } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      data: [],
      dataresult: [],
      displaydata: [],
    };
  }


  onClickHandler = async () => {
    const data = await searchMovie(this.state.term);
    this.setState({ data: data.results, term: "" });
  };
  handleKeyPress = (e) => {
    let searchParam = e.target.value;
    if (e.key === "Enter") {
      axios.get(URL + searchParam).then((response) => {
        this.setState({ dataresult: response.data });
      });
    }
  };

  render() {
  

    return (
      <>
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button className="searchBtn"  onClick={this.onClickHandler}>
            Search
          </button>
        </Form>

        {this.state.data && (
          <Redirect
            to={{
              pathname: "/searchresult",
              state: { dataresult: this.state.data },
            }}
          />
        )}

       
      </>
    );
  }
}

export default SearchBar;
