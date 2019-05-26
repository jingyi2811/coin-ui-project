import React from 'react';
import { Link } from 'react-router-dom'

class Withdraw extends React.Component {
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

    <div class="background">

        <br/>

        <h1 class="h1_txt">Withdraw LTC</h1>

        <br/>

        <h3 class="h3_txt">Account ID: CR840750</h3>

        <h3 class="h3_txt">Withdraw Litecoin (LTC) to your wallet</h3>

        <br/>

        <label class="label_txt"> Enter your address (LTC): </label>

        <br/>

        <input type="number" name="amount" class="input" required="required" size="45" autocomplete="off" min="0.05413534" step="any" data-precision="8"/>

        <br/>

        <label class="label_txt"> Enter the amount (LTC): </label>

        <br/>

        <input type="number" name="amount" class="input" required="required" size="45" autocomplete="off" min="0.05413534" step="any" data-precision="8"/>

        <div>

            <a>
                <span class="button">
                    Withdraw
                </span>
            </a>

        </div>

        <br/>
        <br/>
        <br/>

        <Link to="/">Back</Link>

    </div>

        );
      }
    }
    
export default Withdraw;

