import React from 'react';
import { DEFAULT_API_TIMEOUT } from 'fakeApi/_DATA';

export default class DebugTools extends React.Component {
  state = {
    apiTimeout: localStorage.getItem('apiTimeout') || DEFAULT_API_TIMEOUT
  }

  handleChange = event => {
    const newApiTimeout = event.target.value;
    this.setState(state => ({ apiTimeout: newApiTimeout }));
    localStorage.setItem('apiTimeout', newApiTimeout);
  }

  render () {
    return (
      <div style={{
        position: 'fixed',
        top: 15,
        right: 15,
        backgroundColor: '#ddd',
        border: '1px solid black',
        borderRadius: 5,
        color: '#333',
        padding: 15
      }}>
        <h3 style={{ marginTop: 0 }}>Debug Tools</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>API timeout</label>
          <input type='range' min={0} max={1000} onChange={this.handleChange} value={this.state.apiTimeout} />
          <div style={{ width: 30, textAlign: 'right' }}>{this.state.apiTimeout}</div>
        </div>
      </div>
    );
  }
}
