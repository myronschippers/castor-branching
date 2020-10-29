import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

class App extends React.Component {
  state = {
    creatures: [
      { name: 'Unicorn', origin: ' Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Jackalope', origin: 'Kansas' },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Welcome />
          {/* CODE COMMENT */}

          <div>
            <h2>Our First Creature Is!</h2>
            <p>
              The <strong>{this.state.creatures[0].name}</strong>, hailing from{' '}
              {this.state.creatures[0].origin}
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
