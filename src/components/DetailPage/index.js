import { detailPageFields } from '../../assets/constants';

export default function DetailPage({ book_id }) {
    const availableBooks = JSON.parse(localStorage.getItem('books'));
    const selectedBook = availableBooks.filter(book => book.primary_isbn10 === book_id)[0];

    return (
        <>
            {detailPageFields.map(field => 
                <div>
                    <h3>{field.label}</h3>
                    <div>{selectedBook[field.id]}</div>  
                </div>          
            )}
        </>
    );
}