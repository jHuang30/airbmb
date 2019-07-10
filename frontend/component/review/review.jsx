import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getStar = this.getStar.bind(this);
    // this.cancelStar = this.cancelStar.bind(this);
    this.selectStar = this.selectStar.bind(this);
    this.stars = document.getElementsByClassName("fa fa-star");
    // this.checked = false;
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

  // getStar(nums, star) {
  //   for (let i = 0; i < this.stars.length + 1; i++) {
  //     if (star === i) {
  //       for (let j = nums; j < i; j++) {
  //         this.stars[j].style.color = "#006c70";
  //       }
  //     }
  //   }
  // }

  // cancelStar(nums) {
  //   if (!this.checked) {
  //     for (let i = nums; i < this.stars.length; i++) {
  //       this.stars[i].style.color = "lightgrey";
  //     }
  //   }
  // }

  selectStar(item, start_point, end_point, star) {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
    for (let i = start_point; i < end_point; i++) {
      this.stars[i].style.color = "lightgrey";
    }
    for (let i = start_point; i < this.stars.length + 1; i++) {
      if (star === i) {
        for (let j = start_point; j < i; j++) {
          this.stars[j].style.color = "#006c70";
        }
      }
    }
    this.setState({ [item]: star - start_point });
  }

  render() {
    const ratingItem = [
      "accuracy",
      "communication",
      "cleanliness",
      "location",
      "check-in",
      "value"
    ];

    let styles1 = Array(5).fill({ color: "lightgrey" });
    const accuracyRating = this.props.review.accuracy;
    for (let i = 0; i < accuracyRating; i++) {
      styles1[i] = { color: "#006c70" };
    }

    const stars1 = [];
    const accu = "accuracy";
    for (let j = 0; j < 5; j++) {
      stars1.push(
        <i
          // onMouseOver={() => this.getStar(0, j + 1)}
          // onMouseOut={() => this.cancelStar(0, j + 1)}
          onClick={() => this.selectStar(accu, 0, 5, j + 1)}
          className="fa fa-star"
          style={styles1[j]}
          key={j}
        />
      );
    }

    let styles2 = Array(5).fill({ color: "lightgrey" });
    const communicationRating = this.props.review.communication;
    for (let i = 0; i < communicationRating; i++) {
      styles2[i] = { color: "#006c70" };
    }

    const stars2 = [];
    const com = "communication";
    for (let j = 0; j < 5; j++) {
      stars2.push(
        <i
          // onMouseOver={() => this.getStar(5, j + 1 + 5)}
          // onMouseOut={() => this.cancelStar(5, j + 1 + 5)}
          onClick={() => this.selectStar(com, 5, 10, j + 1 + 5)}
          className="fa fa-star"
          style={styles2[j]}
          key={j}
        />
      );
    }

    let styles3 = Array(5).fill({ color: "lightgrey" });
    const cleanlinessRating = this.props.review.cleanliness;
    for (let i = 0; i < cleanlinessRating; i++) {
      styles3[i] = { color: "#006c70" };
    }

    const stars3 = [];
    const clean = "cleanliness";
    for (let j = 0; j < 5; j++) {
      stars3.push(
        <i
          // onMouseOver={() => this.getStar(10, j + 1 + 10)}
          // onMouseOut={() => this.cancelStar(10, j + 1 + 10)}
          onClick={() => this.selectStar(clean, 10, 15, j + 1 + 10)}
          className="fa fa-star"
          style={styles3[j]}
          key={j}
        />
      );
    }

    let styles4 = Array(5).fill({ color: "lightgrey" });
    const locationRating = this.props.review.location;
    for (let i = 0; i < locationRating; i++) {
      styles4[i] = { color: "#006c70" };
    }

    const stars4 = [];
    const loca = "location";
    for (let j = 0; j < 5; j++) {
      stars4.push(
        <i
          // onMouseOver={() => this.getStar(15, j + 1 + 15)}
          // onMouseOut={() => this.cancelStar(15, j + 1 + 15)}
          onClick={() => this.selectStar(loca, 15, 20, j + 1 + 15)}
          className="fa fa-star"
          style={styles4[j]}
          key={j}
        />
      );
    }

    let styles5 = Array(5).fill({ color: "lightgrey" });
    const checkinRating = this.props.review.checkin;
    for (let i = 0; i < checkinRating; i++) {
      styles5[i] = { color: "#006c70" };
    }

    const stars5 = [];
    const check = "checkin";
    for (let j = 0; j < 5; j++) {
      stars5.push(
        <i
          // onMouseOver={() => this.getStar(20, j + 1 + 20)}
          // onMouseOut={() => this.cancelStar(20, j + 1 + 20)}
          onClick={() => this.selectStar(check, 20, 25, j + 1 + 20)}
          className="fa fa-star"
          style={styles5[j]}
          key={j}
        />
      );
    }

    let styles6 = Array(5).fill({ color: "lightgrey" });
    const valueRating = this.props.review.value;
    for (let i = 0; i < valueRating; i++) {
      styles6[i] = { color: "#006c70" };
    }

    const stars6 = [];
    const val = "value";
    for (let j = 0; j < 5; j++) {
      stars6.push(
        <i
          // onMouseOver={() => this.getStar(25, j + 1 + 25)}
          // onMouseOut={() => this.cancelStar(25, j + 1 + 25)}
          onClick={() => this.selectStar(val, 25, 30, j + 1 + 25)}
          className="fa fa-star"
          style={styles6[j]}
          key={j}
        />
      );
    }

    const errors = this.renderErrors();

    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <p className="close-button" onClick={this.props.closeModal}>
          &times;
        </p>
        <div className="review-form-stars">
          <span className="text">Accuracy:</span>
          <span>{stars1}</span>
        </div>
        <div className="review-form-stars" style={{ top: "15%" }}>
          <span className="text">Communication:</span>
          <span>{stars2}</span>
        </div>
        <div className="review-form-stars" style={{ top: "20%" }}>
          <span className="text">Cleanliness:</span>
          <span>{stars3}</span>
        </div>
        <div className="review-form-stars" style={{ top: "25%" }}>
          <span className="text">Location:</span>
          <span>{stars4}</span>
        </div>
        <div className="review-form-stars" style={{ top: "30%" }}>
          <span className="text">Check-in:</span>
          <span>{stars5}</span>
        </div>
        <div className="review-form-stars" style={{ top: "35%" }}>
          <span className="text">Value:</span>
          <span>{stars6}</span>
        </div>
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
