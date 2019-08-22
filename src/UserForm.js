import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const skills = ['Html', 'Css', 'Javascipt', 'React'];

function UserForm() {
  const [userInfo, setUserInfo] = useState({ name: '', userId: '', address: '', designation: '', skills: [] });

  const changeInput = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    console.log('*****---------*****');
    console.log(userInfo);
    console.log('*****---------*****');
  };
  return (
    <div className="col-md-6">
      <h1>User Form</h1>
      <form className="bg-light">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={changeInput}
            autoComplete="off"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>UserId:</label>
          <input
            type="text"
            name="userId"
            value={userInfo.userId}
            onChange={changeInput}
            autoComplete="off"
            className="form-control"
            placeholder="Enter UserId"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={changeInput}
            autoComplete="off"
            className="form-control"
            placeholder="Enter Address"
          />
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <input
            type="text"
            name="designation"
            value={userInfo.designation}
            onChange={changeInput}
            autoComplete="off"
            className="form-control"
            placeholder="Enter Designation"
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <Typeahead
            id="skill"
            multiple
            options={skills}
            onChange={selected => {
              setUserInfo({ ...userInfo, skills: selected });
            }}
            placeholder="Choose skills(Html, Css, Javascript, React)"
          />
        </div>
        <input type="submit" value="Submit" onClick={submitForm} className="btn btn-success" />
      </form>
    </div>
  );
}
export default UserForm;
