import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStar = this.getStar.bind(this);
    this.cancelStar = this.cancelStar.bind(this);
    this.selectStar = this.selectStar.bind(this);
    this.stars = document.getElementsByClassName("fa fa-star");
    this.checked = false;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state, this.props.spotId, this.props.bookingId)
      .then(this.props.closeModal());
  }

  getStar(star) {
    for (let i = 0; i < this.stars.length + 1; i++) {
      if (star === i) {
        for (let j = 0; j < i; j++) {
          this.stars[j].style.color = "#006c70";
        }
      }
    }
  }

  cancelStar() {
    if (!this.checked) {
      for (let i = 0; i < this.stars.length; i++) {
        this.stars[i].style.color = "lightgrey";
      }
    }
  }

  selectStar(star) {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
    for (let i = 0; i < this.stars.length + 1; i++) {
      if (star === i) {
        for (let j = 0; j < i; j++) this.stars[j].style.color = "#006c70";
      }
    }
    this.setState({ rating: star });
  }

  render() {
    let styles = Array(5).fill({ color: "lightgrey" });
    const currentStars = this.props.review.rating;
    debugger;
    for (let i = 0; i < currentStars; i++) {
      styles[i] = { color: "#006c70" };
    }
    debugger;
    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>
        <p className="review-form-stars">
          <i
            onMouseOver={() => this.getStar(1)}
            onMouseOut={() => this.cancelStar(1)}
            onClick={() => this.selectStar(1)}
            className="fa fa-star"
            style={styles[0]}
          />
          <i
            onMouseOver={() => this.getStar(2)}
            onMouseOut={() => this.cancelStar(2)}
            onClick={() => this.selectStar(2)}
            className="fa fa-star"
            style={styles[1]}
          />
          <i
            onMouseOver={() => this.getStar(3)}
            onMouseOut={() => this.cancelStar(3)}
            onClick={() => this.selectStar(3)}
            className="fa fa-star"
            style={styles[2]}
          />
          <i
            onMouseOver={() => this.getStar(4)}
            onMouseOut={() => this.cancelStar(4)}
            onClick={() => this.selectStar(4)}
            className="fa fa-star"
            style={styles[3]}
          />
          <i
            onMouseOver={() => this.getStar(5)}
            onMouseOut={() => this.cancelStar(5)}
            onClick={() => this.selectStar(5)}
            className="fa fa-star"
            style={styles[4]}
          />
        </p>

        <textarea
          className="review-body"
          cols="30"
          rows="13"
          placeholder={this.props.review.body}
          onChange={this.update("body")}
        />
        <button className="submit-review">Submit</button>
      </form>
    );
  }
}

export default Review;
