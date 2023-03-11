import React from 'react';

export default function Navbar(props) {
  return (
              <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  >
              <div className="container-fluid">
                <a className="navbar-brand" href="">TextUtils</a>
                <a class="nav-link" href="/About.js">Home <span class="sr-only">(current)</span></a>          
              </div>
              <div className="container" style={{justifyContent: "flex-end"}}>
              <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable dark mode</label>
          </div>
              </div>
              <div className="container" style={{justifyContent: "flex-end"}}>
              <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.greyMode}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable grey mode</label>
          </div>
              </div>
              <div className="container" style={{justifyContent: "flex-end"}}>
              <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.blueMode}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable blue mode</label>
          </div>
              </div>
              <div className="container" style={{justifyContent: "flex-end"}}>
              <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.orangeMode}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable orange mode</label>
          </div>
              </div>
            </nav>
  )
}
