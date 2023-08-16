import React from 'react';
import Calculator from './Calculator';

const result = 0;

const App = () => (
  <div>
    <div className="tableContainer">
      <table className="table">
        <tbody>
          <tr>
            <th className="TaHeader" colSpan={4}>
              {result}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <Calculator />
  </div>
);

export default App;
