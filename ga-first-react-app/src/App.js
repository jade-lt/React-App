import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class hireItem extends Component {
  render() {

    // let image;
    // if(this.props.imgUrl) {
    //   image = this.props.imgUrl;
    // } else {
    //   image = logo;
    // }

    return <div>
    <h1>{this.props.title}</h1>
    <p>{this.props.summary}</p>
    <img src={this.props.imgUrl ? this.props.imgUrl : logo} className="App-logo" alt="logo" />
    </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default hireItem;
