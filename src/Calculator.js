import React from 'react';

const Calculator = () => (

  <table className="table">
    <tbody>
      <tr>
        <td>Ac</td>
        <td>+/-</td>
        <td>%</td>
        <td>/</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>*</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>-</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>+</td>
      </tr>
      <tr>
        <td colSpan={2}>0</td>
        <td>.</td>
        <td className="equalCell">=</td>
      </tr>
    </tbody>
  </table>

);

export default Calculator;
