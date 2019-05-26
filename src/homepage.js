import React from 'react';

class Homepage extends React.Component {

  constuctor() {
    this.deposit = this.deposit.bind(this);
  }

  deposit() {
    this.props.history.push("/deposit");
  }

  withdraw() {
    this.props.history.push("/withdraw");
  }

  render() {

    return (

        <div class="background">

            <br/>

            <h1 class="h1_txt">Cashier</h1>

            <br/>

            <h3 class="h3_txt">Cryptocurrency</h3>

            <br/>

            <a href="/en/cashier/forwardws.html?action=deposit" id="payment_methods">
                <img class="image" id="payment_methods_icon" src="https://www.binary.com/images/pages/cashier/payment-methods.svg"/>
            </a>

            <br/>
            <br/>

            <span>
                Manage the funds in your cryptocurrency account.
            </span>

            <br/>
            <br/>

            <div>
                <a>
                    <button class="button" onClick={(e) => this.deposit(e)}>
                        Deposit
                    </button>
                </a>
            </div>

            <br/>

            <div>
                <button class="button"  onClick={(e) => this.withdraw(e)}>
                    Withdraw
                </button>
            </div>

        </div>


        );
      }
    }

export default Homepage;

