function Register() {
  return (
    <div className="register-form">
      <h2>Luo käyttäjä</h2>
      <br />

      <form>
        <label>Käyttäjänimi</label>
        <input type="text" data-test="username" value={this.state.username} onChange={this.handleChangeEvents} />

        <label>Salasana</label>
        <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />

        <label>Salasana uudelleen</label>
        <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />

        <input type="submit" value="register" data-test="submit" />
      </form> 

      {/*KORJAA EI TOIMI, NÄYTTÄÄ VAAN HARMAATA*/}
    </div>
  );
}

export default Register;
