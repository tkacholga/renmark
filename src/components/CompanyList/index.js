import React from 'react';
import './company-list.css';

class CompanyList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((company, index) => (
          <div key={index}>{company.name}</div>
        ))}
      </div>
    );
  }
}

export default CompanyList;
