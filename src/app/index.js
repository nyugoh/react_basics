/**
 * Created by joe on 11/3/17.
 */

import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import {Sidebar} from "./components/Sidebar";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      linkName: "Home Link"
    };
  }
  onChangeLink(newName) {
    this.setState({
      linkName: newName
    });
  }
  onGreet() {
    alert('Hello from ReactJS');
  }
  render() {
    return (
      <div className="container">
        <Header homeLink={this.state.linkName}/>
        <Sidebar/>
        <Home
          changeLink={this.onChangeLink.bind(this)}
          lastName={"Ngigi"}
          height={2}
          greet={this.onGreet}
          homeLink={this.state.linkName}
        />
        <Footer/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
