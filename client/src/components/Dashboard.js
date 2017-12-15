import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';
import axios from 'axios';
import {
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPosts());
  }

  displayPosts = () => {
    return this.props.posts.map( p => {
      return (
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h2'>{p.title}</Header>
            <p>{p.body}</p>
            <Divider></Divider>
          </Grid.Column>
        </Grid.Row>
      )
    });
  }

  render () {
    return (
      <Container>
        <Header as='h1' block inverted style={headerStyle} color='yellow'>User Dashboard</Header>
        <Grid>{ this.displayPosts() }</Grid>
      </Container>
    )
  }
}

const headerStyle = {
  margin: '3%',
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Dashboard);
