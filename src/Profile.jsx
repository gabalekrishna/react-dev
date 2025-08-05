import React from "react";
import ProfileImg from './Profile.png'

// component jsx => javascript xl 
const Profile = (props) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container text-center p-5">
       <div className="row">
         <div className="col-md-6">
          {/* <h1>Hi, I am John,
          Creative Technologist</h1> */}
          <h1>{props.heading}</h1>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="btn">{props.button1}</button>
         </div>
         <div className="col-md-6">
          <img 
          src={ProfileImg}
          alt="profile-photo"
          />
         </div>
       </div>
      </div>
    </div>
  );
};

export default Profile;
