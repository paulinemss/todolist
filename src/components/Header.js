import React from 'react';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const now = new Date()

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      day: weekDays[now.getDay()],
      date: now.getDate()
    }
  }
  render () {
    return (
      <div className='container'>
        <h1 className='header'>Today's schedule</h1>
        <h2 className='subheader'>{this.state.day} {this.state.date}</h2>
      </div>
    )
  }
}
