import React from 'react';
import ModalMap from "./modal-map";

class Locator extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    onHandleClick(){

    }

    render() {
        return(
            <div className="locator">
                <img className="locator-icon" src="../public/images/geo-icon.png"/>
                <p className="locator-label" onClick={this.onHandleClick()}>Resultados en <bold>XXX</bold> KM</p>
                <ModalMap sacar={this.onHandleClick()}/>

            </div>
        );
    }
}

export default Locator;
