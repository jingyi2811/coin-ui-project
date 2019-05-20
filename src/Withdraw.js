import React from 'react';

class Homepage extends React.Component {
  
   handleClick() {
      
      fetch('http://ubuntu:90/common-cgi/trainee/krunal/my-app/src/database/insert.pl',            
      {
         method: 'POST',
         headers: 
         {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
         },  
         body: JSON.stringify({
            email: this.state.email
          })
          body: JSON.stringify({
            email: this.state.email
          })

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
            //console.warn(error);
            this.setState({ loading: false, disabled: false });
      });
   }

  render() {
    return (

      <div>
         <div class="container"> 
            <div id="deposit_withdraw">
               <h1 id="heading">Withdraw LTC</h1>
               <div class="center-text">
                  <h3>Account ID: CR840750</h3>
                  <h3>Withdraw Litecoin (LTC) to your wallet</h3>
                  <div class="gr-row">
                      <div class="gr-padding-10">
                       <div class="gr-12 centered-m gr-padding-10">
                           <label for="address">Enter your address (LTC):</label>
                        </div>
                        <div class="gr-12 centered-m">
                           <input type="number" name="amount" class="amount" required="required" size="45" autocomplete="off" min="0.05413534" step="any" data-precision="8"/>
                        </div>
                       </div>
                  </div>
                  <div class="gr-padding-10">
                     <div class="gr-12 centered-m gr-padding-10">
                           <label for="amount">Enter the amount (LTC):</label>
                     </div>
                     <div class="gr-12 centered-m">
                           <input type="number" name="amount" class="amount" required="required" size="45" autocomplete="off" min="0.05413534" step="any" data-precision="8"/>
                     </div>
                  </div>
                  <div class="gr-padding-10">
                     <div class="gr-12 center-text">
                        <button onClick={this.handleClick}>
                           Withdraw
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>    
 
        );
      }
    }
    
export default Homepage;

