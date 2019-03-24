import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Main extends Component {
  render() {
    const { paintedMood } = this.props;

    return (
      <main className="app__main">
        <div className="app__calendar">
          <Link to="/edit">
            <button className="add__button">+</button>
          </Link>
          <div className="calendar__container">
            <ul className="mood__list">
              {paintedMood.map((item, index) => {
               return ( <li className="mood__list-item" key={index}>{item}</li>)
              })}
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default Main;