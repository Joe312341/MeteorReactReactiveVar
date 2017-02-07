import React, { PropTypes } from 'react'

import AuthorList from '/imports/ui/components/AuthorList.jsx';
import BookList from '/imports/ui/components/BookList.jsx';

import { Row, Col } from 'react-bootstrap';

class OverviewPage extends React.Component {
  render () {
    const { authors, books, authorId, loadingAuthors, authorsExists, loadingBooks, booksExists} = this.props;
    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
            <AuthorList
              authors={authors}
              authorId={authorId}
              loadingAuthors={loadingAuthors}
              authorsExists={authorsExists}/>
          </Col>
          <Col xs={12} md={4}>
            <BookList
              books={books}
              loadingBooks={loadingBooks}
              booksExists={booksExists} />
          </Col>
        </Row>
      </div>
    )
  }
}

OverviewPage.propTypes = {
  authors: React.PropTypes.array,
  books: React.PropTypes.array,
  authorId: React.PropTypes.object,
  loadingAuthors: React.PropTypes.bool,
  authorsExists: React.PropTypes.bool,
  loadingBooks: React.PropTypes.bool,
  booksExists: React.PropTypes.bool,
};

export default OverviewPage;
