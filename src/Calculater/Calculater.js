import React from "react";

class Calculater extends React.Component {
  state = {
    a: 0,
    b: 0,
    showresult: false
  };

  setA = e => {
    this.setState({ a: parseInt(e.target.value), showresult: false });
  };
  setB = e => {
    this.setState({ b: parseInt(e.target.value), showresult: false });
  };
  setshowresults = e => {
    this.setState(prevState => {
      return { showresult: !prevState.showresult };
    });
  };
  render() {
    const add = this.state.a + this.state.b;
    return (
      <div>
        <input onChange={this.setA} />

        <input onChange={this.setB} />
        <button onClick={this.setshowresults}> result</button>

        {this.state.showresult ? (
          <div>
            {"A :" + this.state.a + " " + "B:" + this.state.b}
            <br /> 
            {"add :" + add}
            <br />
            {"sub :" + (this.state.a - this.state.b)}
            <br />
            {"div :" + this.state.a / this.state.b}
            <br />
            {"mod:" + (this.state.a % this.state.b)}
          </div>
        ) : (
          <div> click on results</div>
        )}
      </div>
    );
  }
}
export default Calculater;
