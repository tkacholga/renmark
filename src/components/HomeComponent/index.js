import React from 'react';
import ReactPaginate from 'react-paginate';
import CompanyList from '../CompanyList';
import axios from 'axios';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedPage: 1,
      exchanges: [],
      exchangeCode: null
    };
  }

  fetchCompanies() {
    axios
      .get('https://api.renmark.ir/companies', {
        params: {
          page: this.state.selectedPage,
          exchange: this.state.exchangeCode
        }
      })
      .then(response => {
        const responseData = response.data ? response.data.data : [];
        const paginationData = response.data
          ? response.data.meta.pagination
          : {};

        this.setState({
          data: responseData,
          pageCount: paginationData.total_pages,
          pageRangeDisplayed: paginationData.per_page
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchExchanges = () => {
    return axios
      .get('https://api.renmark.ir/exchanges')
      .then(response => {
        const responseData = response.data ? response.data.data : [];

        this.setState({
          exchanges: responseData
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchExchanges().then(() => {
      this.fetchCompanies();
    });
  }

  handlePageClick = data => {
    const selectedPage = data.selected + 1;

    this.setState({ selectedPage }, () => {
      this.fetchCompanies();
    });
  };

  handleFilterChange = exchangeCode => {
    this.setState(
      { exchangeCode: exchangeCode ? exchangeCode : null, selectedPage: 1 },
      () => {
        this.fetchCompanies();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="form-group col-5">
            <label htmlFor="exampleFormControlSelect1">Choose Exchange</label>
            <select
              className="form-control"
              id="exchanges"
              onChange={event => this.handleFilterChange(event.target.value)}
            >
              <option value="">= Filter by Exchange =</option>
              {this.state.exchanges.map(exchange => (
                <option key={exchange.code} value={exchange.code}>
                  {exchange.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <CompanyList data={this.state.data} />
        <div className="row justify-content-center">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={this.state.pageRangeDisplayed}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
          />
        </div>
      </div>
    );
  }
}

export default HomeComponent;
