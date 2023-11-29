import { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import University from './components/University/University';
import Button from './components/Buttons/Button.jsx';
import Tutors from 'components/Tutors/Tutors';
// import emojiTutors from './images/emojiTutors.png';
import AddTutor from './components/AddTutor/AddTutor';

class App extends Component {
  state = {
    isTutorAddPanelVisible: false,
  };

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
    const { isTutorAddPanelVisible } = this.state;

    return (
      <main className="App">
        {/* <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <h3>UNIVERSITY INFORMATION</h3>
        </div> */}

        <Sidebar />

        <section className="container">
          <University />

          {/* <Button label="Add Tutor" /> */}

          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={emojiTutors} alt="emoji tutors" />
          <h3 style={{ marginLeft: '10px' }}>TUTORS</h3>
        </div> */}

          <Tutors list={this.tutors} />

          {isTutorAddPanelVisible && (
            <AddTutor
              hideForm={() =>
                this.setState({
                  isTutorAddPanelVisible: false,
                })
              }
            />
          )}

          <div className={'mt-16'}>
            <Button
              action={() =>
                this.setState({
                  isTutorAddPanelVisible: true,
                })
              }
            >
              Add Tutors
            </Button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
