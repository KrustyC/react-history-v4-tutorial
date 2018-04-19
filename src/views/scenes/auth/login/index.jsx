import React from 'react'
import { P } from 'components'

export default () => (
  <div>
    <h1>Login Page</h1>
    <section>
      <P>
        Try to login and then access the private route :)
        Just provide an email and password, whatever you want!
      </P>
    </section>
    <section>
      <div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" type="text" id="email" placeholder="Insert an email..." />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Insert a password..."
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </div>
    </section>
  </div>
)
