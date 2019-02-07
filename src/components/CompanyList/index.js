import React from 'react';
import './company-list.css';

class CompanyList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="title text-center">Our Clients</h3>

        <div className="container">
          <div className="row">
            {this.props.data.map((company, index) => (
              <div className="item col-2" key={index}>
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyList;
