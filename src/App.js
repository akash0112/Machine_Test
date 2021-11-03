import React from "react";
import axios from "axios";
import UsersTable from "./components/UsersTable";
import UserPosts from "./components/UserPosts";

export default class UserList extends React.Component {
  state = {
    users: [],
    posts: [],
    clickedList: false
  };

  handleClick = e => {
    this.setState({ clickedList: true });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${
          e.currentTarget.dataset.id
        }`
      )
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch(error => console.log(error));
  };

  returnToUsers = e => {
    this.setState({ clickedList: false });
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch(error => console.log(error));
  }

  render() {
    return this.state.clickedList ? (
      <UserPosts posts={this.state.posts} returnToUsers={this.returnToUsers} />
    ) : (
      <UsersTable users={this.state.users} handleClick={this.handleClick} />
    );
  }
}
