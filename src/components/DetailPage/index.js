import { detailPageFields } from '../../assets/constants';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DetailPage() {
    const { bookId } = useParams();
    const availableBooks = JSON.parse(localStorage.getItem('books'));
    const selectedBook = availableBooks.filter(book => book.primary_isbn10 === bookId)[0];

    return (
        <>
            {detailPageFields.map(field => 
                <div key={field.id}>
                    <h3>{field.label}</h3>
                    {field.isImage ? <img src={selectedBook[field.id]} /> 
                        : <div>{selectedBook[field.id]}</div>}  
                </div>          
            )}
            <Link to="/">&lt; Return to list</Link>
        </>
    );
}