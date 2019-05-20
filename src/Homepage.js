import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...'
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState() {

    /*
    this.setState({ loading: true, disabled: true }, () =>
    {
      fetch('http://ubuntu:90/common-cgi/trainee/krunal/my-app/src/database/insert.pl',
        {
          method: 'POST',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },  
          body: JSON.stringify(fields)

        }).then(res => {
          //.then(res => res.text()).then(text => {
              alert("Success");
            //  this.setState({
            //    json_response: json_response
            //})

              //JSON.stringify(json_response);
              //alert(json_response.Username);                            
              //fields["Username"] = "";
              //fields["lastname"] = "";
              //fields["email"] = "";
              //fields["message"] = "";
              //this.setState({fields:fields});

          }).catch((error) =>
          {
            console.error(error.toString());
            this.setState({ loading: false, disabled: false });
          });
        });*/
  };

  render() {
    return (

      <div>
      <div class="container">
        
        <h1>Cashier</h1>
       </div>

      <div class="gr-padding-10 table-body">
   <h3 class="gr-padding-10"><span class="invisible normal_currency client_logged_out">Bank wire, credit card, e-wallet</span><span class="crypto_currency">Cryptocurrency</span></h3>
   <div class="gr-row">
      <div class="gr-2 gr-4-m"><a href="/en/cashier/forwardws.html?action=deposit" id="payment_methods"><img class="responsive" id="payment_methods_icon" src="https://www.binary.com/images/pages/cashier/payment-methods.svg"/></a></div>
      <div class="gr-6 gr-8-m">
         <span class="invisible normal_currency client_logged_out">Deposit or withdraw to your account via bank wire, credit card, or e-wallet.</span><span class="crypto_currency">Manage the funds in your cryptocurrency account.</span>&nbsp;<a class="invisible normal_currency client_logged_out" href="/en/cashier/payment_methods.html" id="view_payment_methods"><span>View available payment methods</span></a>
         <div class="gr-padding-10 invisible cashier_note gr-hide-m gr-child">
            <div class="gr-12 color-dark-white">
               <div class="gr-row">
                  <div class="gr-adapt gr-1-m gr-no-gutter-left">
                     <div class="notice-circle faded margin-top-3">i</div>
                  </div>
                  <div class="gr-11 gr-9-t gr-9-p gr-11-m gr-no-gutter align-start">
                     <p class="no-margin">Please do not share your bank account, credit card, or e-wallet with another client, as this may cause delays in your withdrawals.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="gr-padding-10 invisible cashier_note gr-12 gr-hide gr-show-m gr-child">
         <div class="gr-12 color-dark-white">
            <div class="gr-row">
               <div class="gr-adapt gr-1-m gr-no-gutter-left">
                  <div class="notice-circle faded margin-top-3">i</div>
               </div>
               <div class="gr-11 gr-9-t gr-9-p gr-11-m gr-no-gutter align-start">
                  <p class="no-margin">Please do not share your bank account, credit card, or e-wallet with another client, as this may cause delays in your withdrawals.</p>
               </div>
            </div>
         </div>
      </div>
      <div class="gr-2 gr-12-m">
         <div class="gr-hide-m gr-parent gr-hide gr-show-m gr-padding-10">
            <div class="separator-line  "></div>
         </div>
         <div class="gr-row gr-row-align-left gr-row-align-right-m">
            <div class="gr-adapt gr-no-gutter-m client_real gr-parent"><a id="deposit_btn_cashier" href="/en/cashier/forwardws.html?action=deposit" class="toggle button client_real"><span class="deposit">Deposit</span></a></div>
            <br/>
            <div class="gr-adapt client_real"><a id="deposit_btn_cashier" href="/en/cashier/z?action=withdraw" class="toggle button client_real"><span class="withdraw">Withdraw</span></a></div>
         </div>
      </div>
   </div>
</div>


</div>



   
        );
      }
    }
    
export default Homepage;

