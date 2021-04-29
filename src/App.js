

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './component/header';
import Footer from './component/footer';
import SelectedBeast  from './component/SelectedBeast';
import Formapp  from './component/Form';

class App extends React.Component {

 

  render() {
    return (
      <div>

        <Header1 />
        <Formapp  />
        <SelectedBeast   />
        <Footer />

      </div>
    )

  }
}


export default App;
