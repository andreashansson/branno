import React from 'react';

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room_nr: "",
      room_name: ""
    }
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      room_name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var data = {
      room_nr: this.state.room_nr,
      room_name: this.state.room_name,
      available: true
    }
    fetch('http://localhost:3000/api/room/add',{
      method:"POST",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          <input type="text" value={ this.state.room_name } onChange={ this.handleChange } />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default RoomForm;
