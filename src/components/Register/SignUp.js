import React from 'react'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className="container">

        <div className="row signUpContent">

          <div className="or d-xl-flex d-lg-flex d-md-flex d-sm-none d-none ">OR</div>
          <div className="col-xl-5  col-lg-5 col-md-5 left col-sm-6 d">
            <div className="left">
            <h1>Sign up</h1>
            <div className="input-content">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="username" placeholder="Username" />
            </div>

            <div className="input-content">
            <i class="fa-solid fa-envelope"></i>
            <input type="text" name="email" placeholder="E-mail" />
            </div>

            <div className="input-content">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password" placeholder="Password" />
            </div>

            <div className="input-content">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password2" placeholder="Retype password" />
            </div>
          <input type="submit" name="signup_submit" defaultValue="Sign me up" />
            </div>
            
          </div>

          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6 right d-xl-flex d-lg-flex d-md-flex d-sm-none d-none">
          <span className="loginwith">Sign in with<br />social network</span>
          <button className="social-signin facebook">Sign in with facebook</button>
          <button className="social-signin twitter">Sign in with Twitter</button>
          <button className="social-signin google">Sign in with Google+</button>
         
          </div>
          </div>
        
     
      </div>
      
    </div>
  )
}

export default SignUp