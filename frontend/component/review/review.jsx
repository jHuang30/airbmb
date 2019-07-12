import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectStar = this.selectStar.bind(this);
    this.stars = document.getElementsByClassName("fa fa-star");
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.deleteErrors();
  }

  renderErrors() {
    const errors = Object.values(this.props.errors).map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    return <ul>{errors}</ul>;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state, this.props.spotId, this.props.bookingId)
      .then(() => this.props.closeModal());
  }

  selectStar(item, start_point, end_point, star) {
    for (let i = start_point; i < end_point; i++) {
      debugger;
      this.stars[i].style.color = "lightgrey";
    }
    for (let i = start_point; i < this.stars.length + 1; i++) {
      debugger;
      if (star == i) {
        for (let j = start_point; j < i; j++) {
          this.stars[j].style.color = "#006c70";
        }
      }
    }
    this.setState({ [item]: star - start_point });
  }

  render() {
    const stars = [];
    const ratingItemx = [
      { accuracy: ["accuracy", 0, 5] },
      { communication: ["communication", 5, 10] },
      { cleanliness: ["cleanliness", 10, 15] },
      { location: ["location", 15, 20] },
      { checkin: ["checkin", 20, 25] },
      { value: ["value", 25, 30] }
    ];
    const reviewx = this.props.review;
    let off = 10;

    ratingItemx.forEach((item, idx) => {
      const option = Object.keys(item)[0];
      const optionValues = Object.values(item)[0];
      let style = Array(5).fill({ color: "lightgrey" });
      const itemRating = reviewx[option];

      for (let i = 0; i < itemRating; i++) {
        style[i] = { color: "#066c70" };
      }

      const starsSection = [];

      for (let j = 0; j < 5; j++) {
        starsSection.push(
          <i
            onClick={() =>
              this.selectStar(
                optionValues[0],
                optionValues[1],
                optionValues[2],
                optionValues[1] + j + 1
              )
            }
            className="fa fa-star"
            style={style[j]}
            key={j}
          />
        );
      }

      stars.push(
        <div key={idx} className="review-form-stars" style={{ top: `${off}%` }}>
          <span className="text">{optionValues[0]}:</span>
          <span>{starsSection}</span>
        </div>
      );
      off += 5;
    });

    const errors = this.renderErrors();

    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>

        <div>{stars}</div>
        <textarea
          className="review-body"
          cols="30"
          rows="9"
          placeholder={this.props.review.body}
          onChange={this.update("body")}
        />
        {errors}
        <button className="submit-review">Submit</button>
      </form>
    );
  }
}

export default Review;
