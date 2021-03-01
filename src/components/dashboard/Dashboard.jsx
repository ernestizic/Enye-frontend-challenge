import React, { Component } from 'react';
import AllProfile from '../profiles/AllProfile';
import axios from 'axios';
import SearchBar from '../profiles/SearchBar';
import ProfileFilter from '../layout/ProfileFilter';
//import Select from 'react-select';
//import Pagination from '../layout/Pagination';


const api = axios.create({
    baseURL: `https://api.enye.tech/v1/challenge/records`
})

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            status: '',
            size: '',
            searchField: "",
        }
      }


     componentDidMount() {
        api.get('/').then(res => 
            this.setState({profiles: res.data.records.profiles}))
     }

    render() { 
        //for search purpose
        const { profiles, searchField } = this.state;
        const searched = profiles.filter(profile => (
            profile.FirstName.toLowerCase().includes(searchField.toLowerCase())
        ))
       
        return ( 
            <div className="container">
                <div className="row" style={{paddingTop:"20px", paddingBottom: "20px"}}>
                    <div className="col-sm-6">
                        <SearchBar onChange={(e)=> this.setState({searchField: e.target.value})}/>
                    </div>
                    <div className="col-sm-6">
                        <ProfileFilter />
                    </div>
                </div>
                <AllProfile profiles={searched} status= {this.state.status} size={this.state.size}/>
            </div>
         );
    }
}




export default Dashboard;