import React from 'react';

class TablesStrinped extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Years</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>hola</tr>
                    <tr>hola</tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablesStrinped;