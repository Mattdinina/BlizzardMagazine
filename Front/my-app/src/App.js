import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
        <title>HTML Form</title>
      </head>
      <body>
        <form>
          <fieldset>
            <legend>
              User personal information
            </legend>
            <label
            >Enter your full name</label
            >
            <input type="text" name="name" />
            <label>Enter your email</label>
            <input
              type="email"
              name="email"
            />
            <label>Enter your password</label>
            <input
              type="password"
              name="pass"
            />
            <label
            >Confirm your password</label
            >
            <input
              type="password"
              name="confirmPass"
            />
            <label>Enter your gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
            />Male
            <input
              type="radio"
              name="gender"
              value="female"
            />Female
            <input
              type="radio"
              name="gender"
              value="others"
            />Others
            <label
            >Enter your Date of
              Birth</label
            >
            <input type="date" name="dob" />
            <label>Enter your Address:</label>
            <textarea
              name="address"
            ></textarea>
            <input
              type="submit"
              value="submit"
            />
          </fieldset>
        </form>
      </body>
    </html>
  );
}

export default App;
