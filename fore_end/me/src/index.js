import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Nice extends Component{
    constructor(){
        super();
        this.state={
            content:''
        }
    }
    componentDidMount(){
        fetch('https://hf.yunfuwuko.com/routes/js',{
            method:'GET',
            mode:'cors',
            headers:{
                'Content-Type':"application/x-www-form-urlencoded"
            }
        }).then(res=>res.json())
        .then(json=>{
            console.log(json)
            this.setState({
                content:json
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.content}
            </div>
        )
    }
}
ReactDOM.render(<Nice/>, document.getElementById('root'));
