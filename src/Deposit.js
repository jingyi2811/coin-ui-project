import React from 'react';

class Deposit extends React.Component {
 
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
      <body>
        <br/><br/><br/><br/><br/>
        <div id="container">
          <div id="deposit_withdraw">
            <div class="center-text">
              <div class="container">
                <div id="deposit_withdraw">
                  <h1 id="heading">Deposit LTC</h1>
                </div>
              </div>
              <br/><br/>
              <h3>Account ID: CR840750</h3>
              <h3>Send your Litecoin (LTC) to this address:</h3>
              <p class="gr-padding-10" />
              <p />
              <div class="gr-padding-10">
                <strong class="fill-bg-color gr-padding-10 gr-padding-lr-10">
                  MVna41AZXWwr847jUpkBGir4rqup8CgbmP
            </strong>
              </div>
              <p class="container-small">
                <strong>
                  Important: Please use the address above only once.
            </strong>
                <br />
                For subsequent deposits, please visit the cashier page again to generate a new address.
            </p>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Deposit;