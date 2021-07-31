import { Component } from "react";
import "./App.css";
import unsplash from "./api/unsplash";
import { searchBar as SearchBar } from "./Components/searchBar/searchBar";
import { imageList as ImageList } from "./Components/imageList/imageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID udw5sWmhAvsDXDY9Dyt7mvXjS1zkbZuHenBY3XBmbVE",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
