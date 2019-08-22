import React from 'react';

const skillStyleMapping = {
  Html: 'label-primary',
  Css: 'label-success',
  Javascipt: 'label-info',
  React: 'label-warning',
};

export default function Showdata(props) {
  return (
    <div className="col-md-6">
      <h1>Users Information</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserId</th>
            <th>Address</th>
            <th>Designation</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(info => {
            return (
              <tr key={info.userId}>
                <td>{info.name}</td>
                <td>{info.userId}</td>
                <td>{info.address}</td>
                <td>{info.designation}</td>
                <td>
                  {info.skills.map(skill => {
                    return (
                      <span key={skill} className={`label ${skillStyleMapping[skill]}`}>
                        {skill}
                      </span>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
