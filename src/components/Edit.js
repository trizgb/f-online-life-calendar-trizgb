import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Edit extends Component {
  render() {
    const { handleEdit, pushCreatedMood } = this.props;

    return (
      <div className="app__form-container">
        <form action="" className="app__form">
          <div className="app__form-date">
            <label htmlFor="date" className="date-title">Date</label>
            <input type="date" className="date-field" id="date" data-field="date" onClick={handleEdit} />
          </div>
          <div className="app__form-state">
            <label htmlFor="state" className="state-title">State</label>
            <div className="radio-container">
              <label htmlFor="" className="state-happy" >:)
            <input type="radio" name="mood" value=":)" data-field="mood" onClick={handleEdit} />
              </label>
              <label htmlFor="sad" className="state-sad"  >:(
            <input type="radio" id="sad" name="mood" value=":(" data-field="mood" onClick={handleEdit} />
              </label>
            </div>
          </div>
          <div className="app__form-message">
            <label htmlFor="" className="message-title">Message</label>
            <input type="text" className="message-field" onKeyUp={handleEdit} data-field="message"placeholder="Why is a good day?" />
          </div>
          <div className="form__buttons">
            <button type="submit" className="button button-save" onClick={pushCreatedMood}>Save</button>
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