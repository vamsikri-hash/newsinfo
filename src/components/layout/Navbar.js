import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "NewsNow",
    icon: "fas fa-newspaper"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    getNews: PropTypes.func.isRequired
  };

  getit = e => {
    console.log(e.target.value);
    this.props.getNews(e.target.value);
  };
  render() {
    return (
      <nav className="navbar bg-primary ">
        <div className="large">
          <i className={this.props.icon} style={{ padding: "10px" }} />
          {this.props.title}
        </div>

        <ul>
          <li style={{ padding: "15px" }}>
            <button
              className="btn btn-light btn-block "
              value="sports"
              onClick={this.getit}
            >
              Sports
            </button>
          </li>
          <li style={{ padding: "15px" }}>
            <button
              className="btn btn-light btn-block "
              value="technology"
              onClick={this.getit}
            >
              Technology
            </button>
          </li>
          <li style={{ padding: "15px" }}>
            <button
              className="btn btn-light btn-block "
              value="entertainment"
              onClick={this.getit}
            >
              Entertainment
            </button>
          </li>
          <li style={{ padding: "15px" }}>
            <button
              className="btn btn-light btn-block "
              value="science"
              onClick={this.getit}
            >
              Science
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
