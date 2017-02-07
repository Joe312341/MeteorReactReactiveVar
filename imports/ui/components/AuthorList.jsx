import React from 'react'

import { Panel, ListGroup } from 'react-bootstrap';

import AuthorListItem from '/imports/ui/components/AuthorListItem.jsx';

class AuthorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemKey: 0
    }
  }
  onItemActive(id, authorId) {
    this.setState({activeItemKey: id});
    //settings reactive var here
    this.props.authorId.set(authorId);
  }
  render () {
    const { authors, loadingAuthors, authorsExists } = this.props;
    const { activeItemKey } = this.state;
    let Authors;
    if (!authorsExists) {
      Authors = (
        <li>
          No Authors
        </li>
      );
    } else {
      Authors = authors.map((author, i) => (
        <AuthorListItem key={i}
          id={i}
          authorId={author._id}
          title={author.name}
          subTitle={author.birthDate.toString()}
          active={ activeItemKey==i ? 'active' : ''}
          onItemActive={this.onItemActive.bind(this)}
           />
      ));
    }
    const title = (
      <h3>Author List</h3>
    );

    const panelsInstance = (
      <div>
        <Panel header={title}>
          <ListGroup>
            {loadingAuthors ? 'Loading...' : Authors}
          </ListGroup>
        </Panel>
      </div>
    )

    return (
      panelsInstance
    )
  }
}

AuthorList.propTypes = {
  authors: React.PropTypes.array,
  authorId: React.PropTypes.object,
  loading: React.PropTypes.bool,
  authorsExists: React.PropTypes.bool,
}


export default AuthorList;
