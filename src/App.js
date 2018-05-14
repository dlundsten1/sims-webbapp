import React from 'react';
import ReactDOM from 'react-dom';
import Titles from "./js/components/presentational/Titles";
import FormContainer from "./js/components/container/FormContainer";
import Individuals from "./js/components/presentational/Individuals";
import Input from "./js/components/presentational/Input";

const  url = "http://localhost:8090/individual"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            api_test_state: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    getIndividuals () {
        console.log("data");
      fetch ("https://localhost:8090/competition/")
          .then(results => {
              return console.log(results.json());
          })
this.setState({
    api_test_state:"balbalba"
});

    }

    render(){
        return(
            <div>
                <Titles name="Individuals1337" />
                <Individuals getIndividuals={this.getIndividuals}/>


            </div>
        );
    }

};
export default App;