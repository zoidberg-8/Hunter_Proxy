import React from "react";
import styles from "./Button.css";

class SizeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: "white",
      color: "black"
    };
  }

  clicked() {
    this.setState({ color: "white", bgcolor: "black" });
  }
  clickedAway() {
    this.setState({ color: "black", bgcolor: "white" });
  }
  render() {
    return (
      <div className={styles.buttondiv}>
        <button
          className={styles.sizebutton}
          onClick={this.clicked.bind(this)}
          onBlur={this.clickedAway.bind(this)}
          style={{
            color: this.state.color,
            backgroundColor: this.state.bgcolor
          }}
        >
          {this.props.data}
        </button>
      </div>
    );
  }
}

export default SizeButton;

//look into CSS modules so that you have locally scopped.
