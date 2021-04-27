

import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './component/header';
import Footer from './component/footer'
import Main from './component/main'
class App extends React.Component {
  render() {
    return (
      <div>

        <Header1 />
        <Main />
        <Footer />

      </div>
    )

  }
}


export default App;
