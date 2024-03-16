import React from 'react'
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="parent">
      <table className="table1">
        <tbody>
          <tr>
            <td>
              <br />
              <h1>LearnEase</h1>
            </td>
            <td>
              <img src="https://www.chromeinfotech.net/industries/images/education-icon.png" style={{ width: '55px', height: '50px', marginRight: '150px' }} alt="Education Icon" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="parentcard">
        <a href="home.html" className="homepage">Home page</a>
        <div className="childcard">
          <div className="title">
            <h3><b>Welcome Back!</b></h3>
            <p className="para">We missed you! Please enter your details.</p>
          </div> <br />
          <label htmlFor="mail">Email<br /><input type="email" name="mail" placeholder="Enter your Email" /></label><br /><br />
          <label htmlFor="pwd">Password<br /><input type="password" name="pwd" placeholder="Enter Password" /></label>
          <table className="table2">
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="cbox" value="abc" id="abc" />
                  <label htmlFor="cbox">Remember me</label>
                </td>
                <td>
                  <p><a href="afds.html">Forgot password?</a> </p>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="button1"><a href="home.html" style={{ textDecoration: 'none', color: 'white' }}>Sign In</a></button>
          <br />
          <button className="button2">
            <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" className="icon" alt="Google Icon" />Sign in with google
          </button>
          <p className="last">Don't have an account?<a href="create_acc.html">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;