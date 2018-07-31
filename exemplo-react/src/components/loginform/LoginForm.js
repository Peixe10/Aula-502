import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
        <section className="login">

        <h2> Digite suas credencias para fazer login </h2>
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Senha"/>
        <button>Login</button>
    </section>

    );
  }
}

export default LoginForm;
