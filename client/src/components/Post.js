import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { deletePost } from '../actions/posts';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';


class Post extends React.Component {
  state = { post: {} }

  componentDidMount() {
    this.props.dispatch(getPosts());
    this.displayPost()
  }

  displayPost = () => {
    const postId = this.props.match.params.id;
    const postInfo = this.props.posts.filter( p => p.id == postId );
    this.setState({ post: postInfo })
  }

  render() {
    return (
      <Segment basic>
        {console.log(this.state.post)}
        Hey
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Post);
