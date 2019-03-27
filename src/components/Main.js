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
                const { mood, date, message } = item;
                if (mood === ':)') {
                  return (
                    <li className="mood__list-item item--happy" key={index} title={`${date} - ${message}`}>
                      <p className="mood__text text--happy">{mood}</p>
                    </li>)
                } else {
                  return (
                    <li className="mood__list-item item--sad" key={index} title={date}>
                      <p className="mood__text text--sad">{mood}</p>
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