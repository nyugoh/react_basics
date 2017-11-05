import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newHeight:props.height,
      status: 'Single',
      link: props.homeLink
    };
    setTimeout(()=>{
      this.setState({
        status: 'Taken'
      });
    }, 3000);
  }
  onMakeTaller() {
    this.setState({
      newHeight: this.state.newHeight + 1
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.link);
  }

  updateLink(event) {
    this.setState({
      link: event.target.value
    });
  }
  render() {
    return (
      <div className="jumbotron">
        <h2>Hello React from {this.props.lastName}</h2>
        <p>Height => {this.state.newHeight}</p>
        <p>Status => {this.state.status}</p>
        <button onClick={()=> this.onMakeTaller()} className="btn btn-primary">Make me taller!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Say Hi!</button>
        <hr/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
        <hr/>
        <input type="text" value={this.state.link} onChange={(event)=> this.updateLink(event)}/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-default">Change Link</button>
      </div>
    )
  }
}

Home.propTypes = {
  lastName: PropTypes.string,
  homeLink: PropTypes.string,
  height: PropTypes.number,
  greet: PropTypes.func,
  changeLink: PropTypes.func
};