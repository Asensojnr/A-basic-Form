import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <p className="title">Create a new Account</p>
          <form onSubmit={this.handleSubmit} noValidate />
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="text"
              className="" placeholder="first name"
              name="first Name"
              noValidate
              onChange={this.handleChange} />
          </div>
          <div className="lastName">
            <label htmlFor="lasttName">Last Name</label>
            <input type="text"
              className="" placeholder="last name"
              name="last Name"
              noValidate
              onChange={this.handleChange} />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text"
              className="" placeholder="Email"
              name="email"
              noValidate
              onChange={this.handleChange} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text"
              className="" placeholder="password"
              name="password"
              noValidate
              onChange={this.handleChange} />
          </div>


        </div>


      </section>

    )
  }
}






export default App;