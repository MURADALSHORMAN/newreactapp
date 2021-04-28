

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import SelectedBeast  from './component/SelectedBeast';


class App extends React.Component {

 

  render() {
    return (
      <div>

        <Header1 />
        <Main />
        <SelectedBeast />
        <Footer />

      </div>
    )

  }
}


export default App;
