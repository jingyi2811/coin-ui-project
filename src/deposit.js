import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Deposit extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
        text: "After you have made your deposit, please wait for 5 - 30 minutes for the system to update your balance.",
        address: "",
        //address: "QRos3MJZt3j97Huibn9NJQbXGmExUjVZji",
        amount: "0"
    }

  }

  componentDidMount(){

    axios.get('http://127.0.0.1:5000/get_an_address')
    .then(res => {this.setState({address: res.data});})

    //this.setState({address: 'QRos3MJZt3j97Huibn9NJQbXGmExUjVZji'});

    this.timerID = setInterval(() =>

    axios.get('http://127.0.0.1:5000/coin_deposit?to_address=' + this.state.address)
        .then(res => {
               this.setState({
                          amount: res.data
                        });

                        if(this.state.amount > 0){
                            this.setState({text: 'Important: Please use the address above only once. For subsequent deposits, please press back again to generate a new address.'});
                        }

                        }), 1000 )

  }

  render() {

    return (

            <div class="background">

                <br/> <br/>

                <h1> Deposit LTC </h1>

                <br/>

                <h3> Send your Litecoin (LTC) to this address: </h3>

                <h3> {this.state.address} </h3>

                <br/>

                <h3> We have received {this.state.amount} amount. </h3>

                <h5> {this.state.text}</h5>

                <br/> <br/>

                <Link to="/">Back</Link>

             </div>

            );
        }
    }

export default Deposit;

