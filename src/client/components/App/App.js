import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {GeneralApiServices, UserApiServices} from '../../services/api-service'
//import { Button, Fab} from '@material-ui/core';
//import Fab from '@material-ui/core/Fab';
//import DeleteIcon from '@material-ui/icons/Delete';
//import EditIcon from '@material-ui/icons/Edit';
import './App.css';

/**COMPONENTS **/
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import List from '../List/List';

export default class App extends React.Component {
    state= {
        hobbies:{
            header:'Age Demographic of Users with hobby',
            columns: ["Age", "Count"],
            list:[],
        },
        users:{
            header:'',
            columns: [],
            list:[], 
        },
        counter:0,
    }

    updateData=(data)=>{
        return {

        }
    }

    componentDidMount(){
        GeneralApiServices.getAllItems('users').then((data) => {
            this.setState({
                users:{
                    header: `All Users: ${data.length}`,
                    list:data,
                    columns: Object.keys(data[0]).map(s=>s.charAt(0).toUpperCase() + s.slice(1))
                },
                counter: data.length,
            })
        })
        GeneralApiServices.getAllItems('hobbies').then((data) => {
            this.setState({
                hobbies:{
                    ...this.state.hobbies,
                    hobbies: data,
                }
            })
            this.updateListByHobby(data[0])
            })
    }

    updateListByHobby= (hobby)=>{
        UserApiServices.getAgeDemographicByHobby(hobby).then((data)=>{
            this.setState({
                hobbies:{
                    ...this.state.hobbies,
                    list: data,
                }
            })
        })
    }

    render() {
        const {users, hobbies}= this.state
        
        return (
            <>
                <Header counter={this.state.counter}/>
                <main className='content'>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" render={()=> <About></About>}/>
                        <Route exact path="/users" render={()=><List 
                            {...users}
                        />}
                        />
                        <Route path="/users/age" render={()=><List 
                            {...hobbies}
                            updateList={this.updateListByHobby}
                        />}
                        />
                        
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