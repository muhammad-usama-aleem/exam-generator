import React from 'react';
import Filter from '../../components/filters/Filter';
import Preview from '../../components/Preview/Preview';
import Short from '../../components/Questions/Short/Short';
import './MainPage.css';

class MainPage extends React.Component {
    render() {
        return (
            <>
            <Filter />
            <div className="row">
                <div className="column1">
                    <Short />                
                </div>
                <div className="column2">   
                    <Preview />   
                </div>
            </div>
            </>
        )
    }
}

export default MainPage;
