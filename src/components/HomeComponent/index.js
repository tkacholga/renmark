import React from 'react';
import ReactPaginate from 'react-paginate';
import CompanyList from '../CompanyList';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
      pageCount: 0,
      pageRangeDisplayed: 5
    };
  }

  loadCommentsFromServer() {
    const testData = [];
    for (let i = 1; i <= 100; i++) {
      testData.push({ name: `Company name ${i}` });
    }
    const pageCount = Math.ceil(
      testData.length / this.state.pageRangeDisplayed
    );
    const data = testData.splice(
      this.state.offset,
      this.state.pageRangeDisplayed
    );

    this.setState({ data, pageCount });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.pageRangeDisplayed);

    this.setState({ offset: offset }, () => {
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
