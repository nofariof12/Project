import React from 'react';
import './MyHistory.css'; // Import the CSS file you created

function DecoratedTable() {
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Alice', age: 28 },
  ];

  return (
    <div style={{height: '80vh'}}>
    <h2>My History</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DecoratedTable;
