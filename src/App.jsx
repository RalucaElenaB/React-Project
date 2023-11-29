import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Tutors from 'components/Tutors/Tutors';
import emojiTutors from './images/emojiTutors.png';

export default class App extends Component {
  tutors = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      telephone: ' +1 302-865-7394',
      email: 'johnsmith@company.com',
      location: 'New York',
      role: 'Group creation, country creation, editing teacher profiles',
    },
  ];

  render() {
    return (
      <main className="App">
        <Sidebar />
        <Card />
        {/* <Button label="Add Tutor" /> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={emojiTutors} alt="emoji tutors" />
          <h2 style={{ marginLeft: '10px' }}>TUTORS</h2>
        </div>
        <Tutors list={this.tutors} />
      </main>
    );
  }
}
