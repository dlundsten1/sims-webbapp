import React from 'react';

class Titles extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>Personer</h3>
                <p>Hitta information om personerna i databasen</p>

            </div>
        )
    }
}

export default Titles;
