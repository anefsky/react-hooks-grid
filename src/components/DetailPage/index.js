import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Wrapper, Contents, LeftPanel, RightPanel, Entry, LinkWrap } from './styles';

export default function DetailPage() {
    const { bookId } = useParams();
    const availableBooks = JSON.parse(localStorage.getItem('books'));
    const selectedBook = availableBooks.filter(book => book.primary_isbn10 === bookId)[0];

    return (
        <Wrapper>
            <Contents>
                <LeftPanel>
                    <img src={selectedBook.book_image} />
                </LeftPanel>

                <RightPanel>
                    <Entry>{selectedBook.title}</Entry>
                    <Entry>{selectedBook.author}</Entry>
                    <Entry>{selectedBook.description}</Entry>
                    <LinkWrap>
                        <Link to="/">&lt; Return to list</Link>
                    </LinkWrap>
                </RightPanel>
            </Contents>
        </Wrapper>
    );
}