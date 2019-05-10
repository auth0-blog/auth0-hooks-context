import React from 'react';

const MeetupContext = React.createContext();
const UserContext = React.createContext();

const initialState = {
  meetup: {
    title: 'Auth0 Online Meetup',
    date: Date(),
    attendees: ['Bob', 'Jessy', 'Christina', 'Adam']
  },
  user: {
    name: 'Roy'
  }
};

const App = () => (
  <UserContext.Provider value={initialState.user}>
    <UserContext.Consumer>
      {user => (
        <MeetupContext.Provider value={initialState.meetup}>
          <MeetupContext.Consumer>
            {meetup => (
              <div>
                <h1>{meetup.title}</h1>
                <span>{meetup.date}</span>
                <div>
                  <h2>{`Attendees (${meetup.attendees.length})`}</h2>
                  {meetup.attendees.map(attendant => (
                    <li>{attendant}</li>
                  ))}
                </div>
              </div>
            )}
          </MeetupContext.Consumer>
        </MeetupContext.Provider>
      )}
    </UserContext.Consumer>
  </UserContext.Provider>
);

export default App;
