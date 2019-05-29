import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Withdraw extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

            text: "",
            address: "",
            amount: "0"

        }

        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
  };

  withdraw() {

    axios.get('http://127.0.0.1:5000/coin_withdraw?to_address=' + this.state.address + '&amount=' + this.state.amount)
       .then(res => {

            this.setState({text: 'Withdrawing coin, transaction id is ' + res.data});
       })
  }

  handleChangeAddress(event) {
    this.setState({address: event.target.value})
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value})
  }

  render() {

    return (


        <div class="background">

            <br/>

            <h1 class="h1_txt">Withdraw LTC</h1>

            <br/>

            <h3 class="h3_txt">Withdraw Litecoin (LTC) to your wallet</h3>

            <br/>

            <label class="label_txt"> Enter your address (LTC): </label>

            <br/> <br/>

            <input type="text" name="address" class="input" required="required" size="60" value={this.state.address} onChange={this.handleChangeAddress.bind(this)}/>

            <br/> <br/>

            <label class="label_txt"> Enter the amount (LTC): </label>

            <br/> <br/>

            <input type="number" name="amount" class="input" required="required" size="45" value={this.state.amount} onChange={this.handleChangeAmount.bind(this)}/>

            <br/> <br/>

            <button class="button" onClick={(e) => this.withdraw(e)}>
              Withdraw
            </button>

            <br/>
            <h5> {this.state.text}</h5>
            <br/>
            <br/>

            <Link to="/">Back</Link>

        </div>

    );
  }
}
    
export default Withdraw;

