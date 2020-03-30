import React, {Component} from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Container from "./components/Container";
import API from './utils/API';

//can also do React.Component w/o importing compoentn
class App extends Component {
  state = {
    results: [],
    loading: false,
  }

  componentDidMount() {
      this.setState({loading: true})
      API.getEmployees().then(response => {
        console.log(response.data.results)
        this.setState({ 
          results: response.data.results,
          loading: false,
        })
      })
  }

  render (){
    return (
      <>
        <Nav />
        
        { this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <Content employees = {this.state.results}/>
          </Container>
        ) }
        
      </>    
    );
  }
}



//render method returns JSX


export default App;
