import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID B-LOyZvEtEDVxPfOALEvcukplk8JmNN5zdDaudwSF4s",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1.5em" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
