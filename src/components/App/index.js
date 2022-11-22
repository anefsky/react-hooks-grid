import React from 'react';
import{ Header, Main }  from './styles.js';
import Grid from '../Grid';
import { gridColumns, fetchUrl, nytapi } from '../../assets/constants';

export default function App() {

  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    if(!localStorage.getItem('books')) {
      fetch(`${fetchUrl}?api-key=${nytapi}`)
        .then(response => response.json())
        .then(myJson => 
          localStorage.setItem('books', JSON.stringify(myJson.results.books)))
        .then(() => setBooks(JSON.parse(localStorage.getItem('books'))));
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
    <>
      <Header>
        NYTimes Best Sellers
      </Header>
      <Main>
        <Grid columns={gridColumns} data={books} deleteRecord={deleteRecord}/>
      </Main>
    </>
  );
}

