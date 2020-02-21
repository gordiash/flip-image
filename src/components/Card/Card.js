import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      clickedRight: false,
      clickedDown: false,
      clickedLeft: false,
      clickedUp: false
    };

    this.handleClicked = this.handleClicked.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
  }

  handleClicked() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  handleUp() {
    this.setState(prevState => ({
      ...prevState,
      clickedUp: !prevState.clickedUp,
      clickedDown: false,
      clickedLeft: false,
      clickedRight: false
    }));
  }

  handleRight() {
    this.setState(prevState => ({
      ...prevState,
      clickedRight: !prevState.clickedRight,
      clickedDown: false,
      clickedLeft: false,
      clickedUp: false
    }));
  }

  handleDown() {
    this.setState(prevState => ({
      ...prevState,
      clickedDown: !prevState.clickedDown,
      clickedRight: false,
      clickedLeft: false,
      clickedUp: false
    }));
  }

  handleLeft() {
    this.setState(prevState => ({
      ...prevState,
      clickedLeft: !prevState.clickedLeft,
      clickedRight: false,
      clickedDown: false,
      clickedUp: false
    }));
  }


  

  render() {
    const style ={
      "width":"150px",
      "height":"200px"
    }

    return (
      <div className="scene">
        <div
          className={
            "card " +
            (this.state.isClicked ? "is-flipped " : "") +
            (this.state.clickedRight
              ? "flipRight"
              : this.state.clickedDown
              ? "flipDown"
              : this.state.clickedLeft
              ? "flipLeft"
              : this.state.clickedUp
              ? "flipUp"
              : "")
          }
          onClick={() => this.handleClicked}
        >
          <div className="card__face card__face--front ">
            {this.props.imageUrl !== "" ? (
              <img src={this.props.imageUrl} alt="img" style={style}/>
            ) : null}
          </div>

          <div className="card__face card__face--back ">
            {this.props.imageUrl !== "" ? (
              <img src={this.props.imageUrl} alt="img" style={style}/>
            ) : null}
          </div>
        </div>

        <button className="up__arrow" onClick={() => this.handleUp()}>
          up
        </button>
        <button className="right__arrow" onClick={() => this.handleRight()}>
          right
        </button>
        <button className="down__arrow" onClick={() => this.handleDown()}>
          down
        </button>
        <button className="left__arrow" onClick={() => this.handleLeft()}>
          left
        </button>
      </div>
    );
  }
}

export default Card;
