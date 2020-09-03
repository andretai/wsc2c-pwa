import React, { Component } from 'react';

import Nav from './fixed/Nav';
import Foot from './fixed/Foot';
import Policy from './fixed/Policy';
import Install from './fixed/Install';
import Whatsapp from './ws/Whatsapp';

class App extends Component {
  state = {
    showPolicy: false,
    showInstall: false
  }
  toggleShowPolicy = () => {
    this.setState({ showPolicy: !this.state.showPolicy });
  }
  toggleShowInstall = () => {
    this.setState({ showInstall: !this.state.showInstall });
  }
  render() {
    return (
      <div className="min-h-screen">
        <Nav toggleShowPolicy={this.toggleShowPolicy} />
        { this.state.showPolicy ? <Policy toggleShowPolicy={this.toggleShowPolicy} /> : null }
        <Whatsapp toggleShowInstall={this.toggleShowInstall} />
        { this.state.showInstall ? <Install toggleShowInstall={this.toggleShowInstall} /> : null }
        <Foot />
      </div>
    );
  }
}

export default App;
