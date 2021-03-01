import React, { Component } from 'react';


class ProfileFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filteredProfile: ""
         }
    }

    render() { 

        return ( 
            <form style = {{width:"100%"}}>
                <div className="form-group">                   
                    <select className="form-control">
                        <option value="gender">Gender</option>
                        <option value="payment">Payment method</option>
                    </select>
                </div>
            </form>
         );
    }
}
 
export default ProfileFilter;