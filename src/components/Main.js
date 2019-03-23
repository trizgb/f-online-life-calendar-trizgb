import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <main className="app__main">
        <div className="app__calendar">
          <Link to="/edit">
            <button className="add__button">+</button>
          </Link>
          <div className="calendar__container"></div>
        </div>
      </main>
    )
  }
}

export default Main;