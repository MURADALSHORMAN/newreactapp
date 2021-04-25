import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
    render() {
        return (
            <div className='main1'>
                <HornedBeast/>
                <HornedBeast/>
                <HornedBeast/>
            </div>

        )
    }
}

export default Main;