import { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import HelloWorld from "./HelloWorld";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Chelsie',
      courseName: 'Software Engineering',
      courseSummary: "This is a course by General Assembly"
    }
  }
  render() {
    return (
      <div>
        <div>
          <h2>App state</h2>
          <h3>{this.state.firstName}</h3>
          <h4>{this.state.courseName}</h4>
        </div>
        <HelloWorld
          name={this.state.firstName}
          title={this.state.courseName}
          imgSrc={
            "https://dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg"
          }
          summary={this.state.courseSummary}
        />
        <Counter name={this.state.firstName} />
      </div>
    );
  }
}

export default App;
