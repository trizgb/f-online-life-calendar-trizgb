import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Edit extends Component {
  render() {
    const { handleEdit, pushCreatedMood, messageContainer } = this.props;

    return (
      <div className="app__form-container">
        <form action="" className="app__form">
          <div className="app__form-date">
            <label htmlFor="date" className="date-title">Date</label>
            <input type="text" className="date-field" id="date" data-field="date" placeholder="18/01/2019" onKeyUp={handleEdit} />
          </div>
          <div className="app__form-state">
            <label htmlFor="state" className="state-title">State</label>
            <div className="radio__container">
              <label htmlFor="happy" className="label-happy" >
                <input className="radio radio--happy" id="happy" type="radio" name="mood" value=":)" data-field="mood" onClick={handleEdit} data-mood=":)"/>:)
              </label>
              <label htmlFor="sad" className="label-sad"  >
                <input className="radio radio--sad" id="sad" type="radio" name="mood" value=":(" data-field="mood" onClick={handleEdit} data-mood=":("/>:(
              </label>
            </div>
          </div>
          <div className={`${messageContainer}`}>
            <label htmlFor="message" className="message-title">Message</label>
            <input className="message-field" id="message" type="text" onKeyUp={handleEdit} data-field="message" placeholder="Why is a good day?" />
          </div>
          <div className="form__buttons">
            <Link to="/">
              <button type="submit" className="button button-save" onClick={pushCreatedMood}>Save</button>
            </Link>
            <Link to="/">
              <button type="button" className="button button-cancel">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;