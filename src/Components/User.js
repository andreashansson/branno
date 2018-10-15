import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {user: "AH", age: "0"},
        {user: "AL", age: "0"}
      ]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Users;
