import React, { Component } from 'react';


class Edit extends Component {
  render() {
    return (
      <div className="app__form-container">
        <form action="" className="app__form">
          <div className="app__form-date">
            <label htmlFor="date" className="date-title">Date</label>
            <input type="date" className="date-field" id="date" />
          </div>
          <div className="app__form-state">
            <label htmlFor="state" className="state-title">State</label>
            <label htmlFor="" className="state-happy" name="happy" >:)
            <input type="radio" name="happy" value=":)" />
            </label>
            <label htmlFor="" className="state-sad" name="sad" >:(
            <input type="radio" name="sad" value=":(" />
            </label>
          </div>
          <div className="app__form-message">
            <label htmlFor="" className="message-title">Message</label>
            <input type="text" className="message-field" />
          </div>
          <button type="submit" className="form__button-save">Save</button>
          <button type="button" className="form__button-cancel">Cancel</button>
        </form>
      </div>
    )
  }
}

export default Edit;