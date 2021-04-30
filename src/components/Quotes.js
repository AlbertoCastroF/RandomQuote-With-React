import React from "react";
import "../css/Quotes.css";

class Quotes extends React.Component {
  render() {
    const styles = {
      background: this.props.color.color,
    };
    return (
      <div className="container-fluid" id="quote-box">
        <div id="quote-box_container">
          <p style={this.props.color} id="text">
            {this.props.quote}
          </p>
          <span style={this.props.color} id="author">
            {this.props.author}
          </span>
        </div>
        <div className="row text-center">
          <div className="col-6">
            <a
              style={this.props.color}
              id="tweet-quote"
              href="twitter.com/intent/tweet"
            >
              <i class="fab fa-twitter-square"></i>
            </a>
            <a
              href="http://facebook.com"
              style={this.props.color}
              id="facebook"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="col-6">
            <button
              style={styles}
              type="button"
              onClick={this.props.onClick}
              id="new-quote"
              className="btn"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
