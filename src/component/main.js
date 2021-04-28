
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast';
import data from './data';




class Main extends React.Component {


    render() {
        return (


            <div>
               
                { 
                    data.map ( (element) =>{ return <HornedBeast url={element.image_url} description={element.description} title={element.title} keyword={element.keyword}
                        horns={element.horns} /> } )
                
                }
                
            </div>

        )
    }
}

export default Main;