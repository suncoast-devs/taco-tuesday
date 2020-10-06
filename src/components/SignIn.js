import React from 'react'

export function SignIn() {
  return (
    <>
      <div class="modal">
        <div class="modal-content">
          <button class="close-button">&times;</button>
          <h2>Sign Up</h2>
          <form action="#">
            <p className="form-input">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" />
            </p>
            <p className="form-input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
