import React from 'react';

const MeetupContext = React.createContext();

const initialState = {
  title: 'Auth0 Online Meetup',
  date: Date(),
  attendees: ['Bob', 'Jessy', 'Christina', 'Adam']
};

const App = () => (
  <MeetupContext.Provider value={initialState}>
    <MeetupContext.Consumer>
      {props => (
        <div>
          <h1>{props.title}</h1>
          <span>{props.date}</span>
          <div>
            <h2>{`Attendees (${props.attendees.length})`}</h2>
            {props.attendees.map(attendant => (
              <li>{attendant}</li>
            ))}
          </div>
        </div>
      )}
    </MeetupContext.Consumer>
  </MeetupContext.Provider>
);

export default App;
