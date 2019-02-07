import React from 'react';
import { Link } from 'react-router-dom';
import './company-list.css';

class CompanyList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="title text-center">Our Clients</h3>

        <div className="row">
          {this.props.data.map((company, index) => (
            <Link
              to={`/companies/${company.id}`}
              className="item col-2"
              key={index}
            >
              <div className="company-logo">
                <img src={company.logo} alt={company.name} />
              </div>
              {company.name}
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyList;
