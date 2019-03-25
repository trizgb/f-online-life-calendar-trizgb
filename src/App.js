import React, { Component } from 'react';
import Main from './components/Main';
import Edit from './components/Edit';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editDayMood: {
        date: '',
        mood: '',
        message: ''
      },
      createdMood: [],
      messageContainer: 'hidden'
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.pushCreatedMood = this.pushCreatedMood.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const savedMood = JSON.parse(localStorage.getItem('mood'));

    if (savedMood !== null) {
      const paintSavedMood = savedMood.map(item => {
        return item.mood;
      });
      return paintSavedMood;
    } else {
      return [];
    }
  }

  saveLocalStorage(key, mood) {
    localStorage.setItem(key, JSON.stringify(mood));
  }

  handleEdit(e) {
    const field = e.currentTarget.getAttribute('data-field');
    const currentValue = e.currentTarget.value;

    const currentCheck = e.currentTarget.checked;

    this.setState((prevState) => {
      const { editDayMood } = prevState;
      const addInfo = { ...editDayMood, [field]: currentValue };
      return { editDayMood: addInfo };
    });

    if (currentCheck === true) {
      if (currentValue === ':(') {
        this.setState((prevState) => {
          const { editDayMood } = prevState;
          const deleteMessage = { ...editDayMood, message: '' }
          return { editDayMood: deleteMessage }
        })

        this.setState({
          messageContainer: 'hidden'
        });
      } else {
        this.setState({
          messageContainer: 'app__form-message'
        });
      }
    }
  }

  pushCreatedMood() {
    const { editDayMood, createdMood } = this.state;

    if (editDayMood.date !== '' && editDayMood.mood !== '') {
      createdMood.push(editDayMood);

      this.setState({
        editDayMood: {
          date: '',
          mood: '',
          message: ''
        },
        createdMood: createdMood
      });
      this.saveLocalStorage('mood', createdMood);
    }
  }

  render() {
    const paintSavedMood = this.getLocalStorage();

    return (
      <div className="app">
        <header className="app__header"></header>
        <Switch>
          <Route exact path="/" render={() => (
            <Main
              paintSavedMood={paintSavedMood}
            />)}
          />
          <Route path="/edit" render={() => (
            <Edit
              handleEdit={this.handleEdit}
              pushCreatedMood={this.pushCreatedMood}
              messageContainer={this.state.messageContainer}
            />)}
          />
        </Switch>
        <footer className="app__footer"></footer>
      </div>
    );
  }
}

export default App;
