import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './component/Register/register'

import { Route, Redirect } from 'react-router-dom';
import AddLogin from './component/Register/Login';
import ForgotPassword from './component/Register/Forget';
import Home1 from './component/Home/Home1';
class App extends Component {
  constructor()
  {
    super();
    this.state={
      route:'signin',
      isSignedIn:false,
    }
  }

  onRouteChange=(route)=>
  {
    if(route ==='signin'){
      this.setState({isSignedIn:false})
    }
    else if(route==='home'){
      this.setState({ isSignedIn: true })
    }
    this.setState({ route });
  }
  render() {
    const { isSignedIn,route, }=this.state;
  return (
    <div>
      
      
    <div >
<div isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
     <Route path={process.env.PUBLIC_URL + "/"} exact component={AddLogin} /> 
     <Route path={process.env.PUBLIC_URL + "/home"} exact component={Home1} />
     <Route path={process.env.PUBLIC_URL + "/Register"} exact={true} component={Register} />
     <Route path={process.env.PUBLIC_URL + "/forget"} exact={true} component={ForgotPassword} />
    </div>
   
      
    </div>
  );
}
}

export default App;
