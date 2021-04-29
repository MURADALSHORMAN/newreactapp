
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast';
import data from './data';






class Main extends React.Component {

    
    render() {
        return (

            <>

                <div>

                    {
                        data.map(element => {
                            
                            if (this.props.last == element.horns) {
                               
                               return <HornedBeast
                                    url={element.image_url}
                                    description={element.description}
                                    title={element.title}
                                    keyword={element.keyword}
                                    horns={element.horns} />
                            }
                            else if(this.props.last == 0 ) {
                                
                               return <HornedBeast
                                    url={element.image_url}
                                    description={element.description}
                                    title={element.title}
                                    keyword={element.keyword}
                                    horns={element.horns} />
                            }
                        })

                    }
                </div>



            </>
        )


    }



}

export default Main;