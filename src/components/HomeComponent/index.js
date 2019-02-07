import React from 'react';
import ReactPaginate from 'react-paginate';
import CompanyList from '../CompanyList';
import axios from 'axios';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedPage: 1
    };
  }

  loadCommentsFromServer() {
    axios
      .get('https://api.renmark.ir/companies', {
        params: { page: this.state.selectedPage }
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

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick = data => {
    const selectedPage = data.selected + 1;

    this.setState({ selectedPage }, () => {
      this.loadCommentsFromServer();
    });
  };

  render() {
    return (
      <div className="commentBox">
        <CompanyList data={this.state.data} />
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
    );
  }
}

export default HomeComponent;
