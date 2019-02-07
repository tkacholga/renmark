import React from 'react';
import './company-list.css';

class CompanyList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="title text-center">Our Clients</h3>

        <div className="row">
          {this.props.data.map(company => (
            <div className="item col-2" key={company.id}>
              <div className="company-logo">
                <img src={company.logo} alt={company.name} />
              </div>
              {company.name}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyList;
