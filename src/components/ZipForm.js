import React from 'react';

class ZipForm extends React.Component {
  render(){
    return (
      <div className="zip-form">
        <form onSubmit={this.submitZipCode}>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-controle"
            type="input"
            name="zipcode"
            value={this.state.zipcode}
            onInput={this.updateZipCode}
          />
            <button type="submit" className="btn btn-success">
                Get Forcast
            </button>
        </form>
      </div>
    )
  }
  constructor(props) {
      super(props);

      this.state = {
          zipcode: ''
      };
      this.updateZipCode = this.updateZipCode.bind(this);
      this.submitZipCode = this.submitZipCode.bind(this);
    }

   updateZipCode(e) {
      const {value} = e.target;
       console.log("update called.......", value)
      this.setState({
          zipcode: value
      })
   }

    submitZipCode(e) {
        e.preventDefault();

        const { zipcode } = this.state;
        console.log("submit form::::", this.props)
        const { onSubmit } = this.props;

        onSubmit(zipcode);
        this.setState({ zipcode: '' });
    }
}

export default  ZipForm;