'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

export class GreatLiaisonApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello world!!!</div>
    );
  }
}

ReactDOM.render(
  <GreatLiaisonApp />,
  document.getElementById('container')
);
