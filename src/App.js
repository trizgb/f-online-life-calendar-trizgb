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
      createdMood: []
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.pushCreatedMood = this.pushCreatedMood.bind(this);
  }

  // componentDidMount(){
  //   this.getSavedLocalStorage();
  // }

  // getSavedLocalStorage(){
  //   if (localStorage.getItem('mood') !== null){
  //     if(editDayMood.mood = ':)'){

  //     }
  //   }
  // }

  saveLocalStorage(key, mood) {
    localStorage.setItem(key, JSON.stringify(mood));
  }

  handleEdit(e) {
    const field = e.currentTarget.getAttribute('data-field');
    const currentValue = e.currentTarget.value;

    this.setState((prevState) => {
      const { editDayMood } = prevState;
      const addInfo = { ...editDayMood, [field]: currentValue };
      return { editDayMood: addInfo };
    });

  }

  pushCreatedMood() {
    const { editDayMood, createdMood } = this.state;
    if (editDayMood.date !== '' && editDayMood.mood !== '' && editDayMood.message !== '') {
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

  paintCreatedMood() {
    const paintedMood = this.state.createdMood.map(item => {
      const mood = item.mood;

      return mood;
    });

    return paintedMood;
  }

  render() {
    const paintedMood = this.paintCreatedMood();

    return (
      <div className="app">
        <header className="app__header"></header>
        <Switch>
          <Route exact path="/" render={() => (
            <Main
              paintedMood={paintedMood}
            />)}
          />
          <Route path="/edit" render={() => (
            <Edit
              handleEdit={this.handleEdit}
              pushCreatedMood={this.pushCreatedMood}
            />)}
          />
        </Switch>
        <footer className="app__footer"></footer>
      </div>
    );
  }
}

export default App;
