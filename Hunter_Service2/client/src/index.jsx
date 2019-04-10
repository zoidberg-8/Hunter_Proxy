import React from "react";
import ReactDOM from "react-dom";
import Description from "./components/Description.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descript: [],
      sizes: [
        5,
        6,
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12,
        12.5,
        13,
        14,
        15
      ]
    };
  }
  componentDidMount() {
    axios
      .get(`/api/description`)
      .then(response => {
        this.setState({ descript: response.data[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Description describes={this.state.descript} size={this.state.sizes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
