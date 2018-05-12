import React from 'react';
import Titles from "./js/components/presentational/Titles";
import FormContainer from "./js/components/container/FormContainer";

class App extends React.Component {
    render(){
        return(
            <div>
                <Titles />
                <FormContainer/>

            </div>
        );
    }

};
export default App;