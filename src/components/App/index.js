import React from 'react';
import Header from '../Header';
import Content from '../Content';
import Loader from '../Loader';
import BookContext from '../../shared/BookContext';
import { gridColumns, fetchUrl, nytapi } from '../../assets/constants';

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

  function deleteRecord(title) {
    const oldList = JSON.parse(localStorage.getItem('books'));
    const newList = oldList.filter(x => x.title !== title);
    localStorage.setItem('books', JSON.stringify(newList));
    setBooks(JSON.parse(localStorage.getItem('books')));
  }

  return (
    <BookContext.Provider
        value={{
          gridColumns: gridColumns,
          data: books,
          deleteRecord: deleteRecord
        }}>
      <div>
        <Header title={"NYTimes Best Sellers"} />
        <div>
          {loading ? <Loader /> :
            <Content />
          }
        </div>
      </div>
    </BookContext.Provider>
  );
}

