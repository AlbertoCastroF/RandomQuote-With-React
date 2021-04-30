import React from "react";
import Quotes from "../components/Quotes";
import "../pages/pages_css/Main.css";

class Main extends React.Component {
  state = {
    data: [
      {
        quote:
          "I am looking for a lot of men who have an infinite capacity to not know what can't be done.",
        author: "Henry Ford",
      },
      {
        quote:
          "Choosing to live in narrow spaces leads to form of mental agoraphobia and that brings its own terrors. I think the willfully unimaginative see more monsters, they are often more afraid. What is more, those who choose not to empathize enable real monsters. For without ever committing an act of outright evil ourselves, we collude through our own apathy.",
        author: "J. K. Rowling",
      },
      {
        quote:
          "Put duties aside at least an hour before bed and perform soothing, quiet activities that will help you relax.",
        author: "Dianne Hales",
      },
      {
        quote:
          "Science is facts; just as houses are made of stones, so is science made of facts; but a pile of stones is not a house and a collection of facts is not necessarily science.",
        author: "Henri Poincare",
      },
    ],
    randomQuote: 1,
    textColor: [
      { color: "blue" },
      { color: "red" },
      { color: "cyan" },
      { color: "purple" },
    ],
  };

  handleClick = (e) => {
    this.setState({
      randomQuote: Math.floor(Math.random() * 4),
    });
  };

  render() {
    const indexData = this.state.data[this.state.randomQuote];
    const indexColor = this.state.textColor[this.state.randomQuote];
    const styles = {
      background: indexColor.color,
    };
    return (
      <div style={styles} className="main-container">
        <Quotes
          quote={indexData.quote}
          author={indexData.author}
          color={indexColor}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Main;
