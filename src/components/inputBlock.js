import React from 'react';

class InputUser extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            name: 'Yurii'
        }

        this.changeMess = this.changeMess.bind(this); 
    }
    changeMess(e){
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input 
                    type="text"
                    value = {this.state.name}
                    onChange = {this.changeMess}    
                />
            </div>
        )
    }
}

export default InputUser;