import React from 'react';
import {Route, Switch} from 'react-router-dom';
//import { Button, Fab} from '@material-ui/core';
//import Fab from '@material-ui/core/Fab';
//import DeleteIcon from '@material-ui/icons/Delete';
//import EditIcon from '@material-ui/icons/Edit';
import './App.css';

/**COMPONENTS **/
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import List from '../List/List';
import Hobby from '../List/Hobby'


export default class App extends React.Component {
    render() {
        console.log(process.env.NODE_ENV)
        return (
            <>
                <Header />
                <main className='content'>
                    
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" render={()=> <About></About>}/>
                        <Route exact path="/users" component={List}/>
                        <Route path="/users/age" component={Hobby}/>
                    </Switch>
                </main>
                <Footer />
            </>
          )
    }
};

function Home() {
    return (
        <>
            <h1>HOME</h1>  
        </>
    );
  }
  
function About() {
    return (
        <>
            <h1>CONTACT US</h1> 
        </>
    );
}