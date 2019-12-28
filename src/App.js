import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
import axios from "axios";

class App extends Component {
  state = {
    newsarray: [],
    loading: false
  };

  //function to get news from given text....
  getNews = async text => {
    console.log(1);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${text}&apiKey=de371855895d444a9eac47444d7a6abe`
    );
    console.log(res.data.articles);
    this.setState({ newsarray: res.data.articles, loading: false });
  };

  // default display news before any button is clicked...
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=de371855895d444a9eac47444d7a6abe"
    );
    console.log(res.data.articles);
    this.setState({ newsarray: res.data.articles, loading: false });
  }

  render() {
    const { newsarray, loading } = this.state;
    return (
      <div className="App">
        <Navbar getNews={this.getNews} />
        <News newsarray={newsarray} loading={loading} />
      </div>
    );
  }
}

export default App;
