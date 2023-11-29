import React, { Component } from 'react';
import styles from './AddTutor.module.css';
import Button from 'components/Buttons/Button';

export default class AddTutor extends Component {
  handleSubmit = () => {
    console.log('Am adaugat un profesor');
    this.props.hideForm();
  };

  render() {
    return (
      <form className={styles.addTutorForm}>
        <h1>Adding a tutor</h1>
        <input type="text" placeholder="Surname" required />
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Phone number" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="City" required />

        <Button type="submit" onClick={this.handleSubmit}>
          Invite
        </Button>
      </form>
    );
  }
}
