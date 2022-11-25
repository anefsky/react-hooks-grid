import React from 'react';
import Content from '../Content';
import Loader from '../Loader';
import BookContext from '../../shared/BookContext';
import { fetchUrl, nytapi } from '../../assets/constants';

export default function App() {

  const [books, setBooks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if(!localStorage.getItem('books')) {
      setLoading(true);
      fetch(`${fetchUrl}?api-key=${nytapi}`)
        .then(response => response.json())
        .then(myJson => 
          localStorage.setItem('books', JSON.stringify(myJson.results.books)))
        .then(() => setBooks(JSON.parse(localStorage.getItem('books'))))
        .then(() => setLoading(false))
    } else {
      setBooks(JSON.parse(localStorage.getItem('books')))
    }
  }, []);

  function deleteRecord(book_id) {
    const oldList = JSON.parse(localStorage.getItem('books'));
    const newList = oldList.filter(x => x.primary_isbn10 !== book_id);
    localStorage.setItem('books', JSON.stringify(newList));
    setBooks(JSON.parse(localStorage.getItem('books')));
  }

  function updateUserRating(book_id, newRatingNum) {
    const oldList = JSON.parse(localStorage.getItem('books'));
    const newList = oldList.map(x => x.primary_isbn10 === book_id ? {...x, userRating: newRatingNum} : x);
    localStorage.setItem('books', JSON.stringify(newList));
  }

  return (
    <BookContext.Provider
        value={{
          data: books,
          deleteRecord: deleteRecord,
          updateUserRating: updateUserRating
        }}>
      <div>
        <div>
          {loading ? <Loader /> : <Content />}
        </div>
      </div>
    </BookContext.Provider>
  );
}

