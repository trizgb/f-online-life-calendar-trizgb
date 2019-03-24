import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Main extends Component {
  render() {
    const { paintSavedMood } = this.props;

    return (
      <main className="app__main">
        <div className="app__calendar">
          <Link to="/edit">
            <button className="add__button">+</button>
          </Link>
          <div className="calendar__container">
            <ul className="mood__list">
              {paintSavedMood.map((item, index) => {
                if (item === ':)') {
                  return (
                    <li className="mood__list-item item--happy" key={index}>
                      <p className="mood__text text--happy">{item}</p>
                    </li>)
                } else {
                  return (
                    <li className="mood__list-item item--sad" key={index}>
                      <p className="mood__text text--sad">{item}</p>
                    </li>)
                }
              })}
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default Main;