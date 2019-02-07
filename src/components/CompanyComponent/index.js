import React from 'react';
import axios from 'axios';

class CompanyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: null
    };
  }

  fetchCompany() {
    const urlParts = this.props.location.pathname.split('/companies/');
    const companyId = urlParts[1];

    axios
      .get(`https://api.renmark.ir/companies/${companyId}`)
      .then(response => {
        const responseData = response.data ? response.data.data : null;
        this.setState({ company: responseData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchCompany();
  }

  render() {
    if (!this.state.company) return null;

    const {
      name,
      email,
      logo,
      overview,
      website,
      filingNo,
      tickers
    } = this.state.company;
    return (
      <div className="container">
        <h1>{name}</h1>
        <div className="row">
          <div className="col-12">
            <p>
              <img
                style={{ marginRight: '15px' }}
                src={logo}
                alt={name}
                className="float-left"
              />
              {overview}
            </p>
          </div>
        </div>
        <div className="row">
          <label className="col-3">
            <strong>Email</strong>
          </label>
          <div className="col-9">
            <div>{email}</div>
          </div>
        </div>
        <div className="row">
          <label className="col-3">
            <strong>Website</strong>
          </label>
          <div className="col-9">
            <div>{website}</div>
          </div>
        </div>
        <div className="row">
          <label className="col-3">
            <strong>filingNo</strong>
          </label>
          <div className="col-9">
            <div>{filingNo}</div>
          </div>
        </div>
        <div className="row">
          <label className="col-3">
            <strong>Exchange name</strong>
          </label>
          <div className="col-9">
            <div>{tickers[0].exchange.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyComponent;
