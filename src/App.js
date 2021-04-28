

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import SelectedBeast  from './component/SelectedBeast';


class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         show: false,
                 
//     }
// }
// closing = () => {
//     this.setState({ show:false })
// }

// viewbeats = () => {
//     this.setState({ 
//         show:true,
//          })
//         console.log('view fun in app');
// }

  render() {
    return (
      <div>

        <Header1 />
        <SelectedBeast  />
        <Main />
        <Footer />

      </div>
    )

  }
}


export default App;
