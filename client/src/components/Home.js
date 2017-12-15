import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Home Component</Header>
      </Segment>
    );
  }
}

export default Home;
