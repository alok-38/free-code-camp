import React from 'react';

import './App.css';

import { books } from './components/Books';
import Book from './components/Book';

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

export default BookList;