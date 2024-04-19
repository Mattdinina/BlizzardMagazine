import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <html>
        <head>
          <title>HTML Form</title>
        </head>
        <body>
          <form action="http://localhost:8080/users" method="POST">
            <fieldset>
              <legend>
                Inscription
              </legend>
              <label
              >Enter your full name</label
              >
              <input type="text" name="Pseudo" />
              <label>Enter your email</label>
              <input
                type="email"
                name="email"
              />
              <label>Enter your password</label>
              <input
                type="password"
                name="password"
              />

              <label
              >Enter your Date of
                Birth</label
              >
              <input type="date" name="dob" />
              <input
                type="submit"
                value="submit"
              />
            </fieldset>
          </form>
        </body>
      </html>
    </>
  );
}

export default App;
