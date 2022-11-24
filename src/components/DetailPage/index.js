import { detailPageFields } from '../../assets/constants';

export default function DetailPage({ book_id }) {
    const availableBooks = JSON.parse(localStorage.getItem('books'));
    const selectedBook = availableBooks.filter(book => book.primary_isbn10 === book_id)[0];

    return (
        <>
            {detailPageFields.map(field => 
                <div key={field.id}>
                    <h3>{field.label}</h3>
                    {field.isImage ? <img src={selectedBook[field.id]} /> 
                        : <div>{selectedBook[field.id]}</div>}  
                </div>          
            )}
        </>
    );
}