import React, { Component } from 'react';

import Nav from './fixed/Nav';
import Foot from './fixed/Foot';
import Policy from './fixed/Policy';
import Whatsapp from './ws/Whatsapp';

class App extends Component {
  state = {
    showPolicy: false
  }
  toggleShowPolicy = () => {
    this.setState({ showPolicy: !this.state.showPolicy });
  }
  render() {
    return (
      <div className="relative min-h-screen">
        <Nav toggleShowPolicy={this.toggleShowPolicy} />
        { this.state.showPolicy ? <Policy toggleShowPolicy={this.toggleShowPolicy} /> : null }
        <Whatsapp />
        <Foot />
      </div>
    );
  }
}

export default App;
