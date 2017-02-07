import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import OverviewPage from '../pages/OverviewPage.jsx';

import { Authors } from '/imports/api/authors/authors.js';
import { Books } from '/imports/api/books/books.js';

let authorId = new ReactiveVar('');

export default createContainer(() => {
  //authors Subscription
  const authorsHandle = Meteor.subscribe('allAuthors');
  const loadingAuthors = !authorsHandle.ready();
  const authors = Authors.find();
  const authorsExists = !loadingAuthors && !!authors;


  //books Subscription
  //preselect first Author in the collection
  let authorIdLocal;
  if (!authorId.get() && authorsExists) {
    const firstAuthor = authors.fetch()[0];
    authorIdLocal = firstAuthor._id;
  }
  else {
    authorIdLocal = authorId.get();
  }

  const booksHandle = Meteor.subscribe('booksForAuthor', authorIdLocal);
  const loadingBooks = !booksHandle.ready();
  const books = Books.find({authorId: authorIdLocal});
  const booksExists = !loadingBooks && !!books;

  return {
    loadingAuthors,
    authorsExists,
    loadingBooks,
    booksExists,
    authorId,
    authors: authors.fetch(),
    books: books.fetch()
  };
}, OverviewPage);
