export default function Login() {
  return (
    <main>
      <h1>Kanri - Login</h1>
      <br/>
      <br/>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" />

      <label htmlFor="password">Password: </label>
      <input type="text" name="password" id="password" />

      <button>Submit</button>
    </main>
  );
}