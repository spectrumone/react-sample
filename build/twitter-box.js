var TweetBox = React.createClass({
  displayName: "TweetBox",

  getInitialState: function () {
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function (event) {
    this.setState({ text: event.target.value });
  },
  togglePhoto: function (event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  overflowAlert: function () {
    if (this.remainingCharacters() < 0) {
      if (this.state.photoAdded) {
        var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        var overflowText = this.state.text.substring(140 - 23);
      } else {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
      }

      return React.createElement(
        "div",
        { className: "alert alert-warning" },
        React.createElement(
          "strong",
          null,
          "Oops! Too Long:"
        ),
        " ...",
        beforeOverflowText,
        React.createElement(
          "strong",
          { className: "bg-danger" },
          overflowText
        )
      );
    } else {
      return "";
    }
  },
  remainingCharacters: function () {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "well clearfix" },
      this.overflowAlert(),
      React.createElement("textarea", { className: "form-control",
        onChange: this.handleChange }),
      React.createElement("br", null),
      React.createElement(
        "span",
        null,
        this.remainingCharacters()
      ),
      React.createElement(
        "button",
        { className: "btn btn-primary pull-right",
          disabled: this.state.text.length === 0 && !this.state.photoAdded },
        "Tweet"
      ),
      React.createElement(
        "button",
        { className: "btn btn-default pull-right",
          onClick: this.togglePhoto },
        this.state.photoAdded ? "✓ Photo Added" : "Add Photo"
      )
    );
  }
});

ReactDOM.render(React.createElement(TweetBox, null), document.getElementById("container"));