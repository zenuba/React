import './App.css';

function App() {
  return (
    <div className="container">
      <div className="learn">
          <h1>learn to code by watching others</h1>
          <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, 
              but understanding how developers think is invaluable.
          </p>
      </div>

      <div className="form-container">
          <div className="try">
              <b>Try it free 7 days</b><a href="/" class="link-1"> then $20/mo. thereafter</a>
          </div>
          <div className="form-content">
              <form action="" className="form">
                  <input type="text" id="firstname" name="firstname" placeholder="First Name"/>
                  <input type="text" id="lastname" name="lastname" placeholder="Last Name"/>
                  <input type="email" id="email" name="email" placeholder="Email Address"/>
                  <input type="password" id="password" name="password" placeholder="Password"/>
                  <button class="form-btn" type="submit">claim your free trial</button>
              </form>
              <p className="terms">
                  By clicking the button,you are agreeing to our
                  <a href="/">Terms and Services</a>
              </p>
          </div>
      </div>
  </div> 
  );
}

export default App;
