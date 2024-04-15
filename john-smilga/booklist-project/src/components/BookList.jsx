import { books } from './books';
import Book from './Book';

const BookList = () => {
    return (
        <div>
            <h1 className='text-center my-20 text-5xl font-medium text-rose-400'>Amazon Best Sellers</h1>
            <section className='flex flex-wrap text-center gap-10 justify-center'>
                {books.map((book) => {
                    return <Book {...book} key={book.id}/>
                })}
            </section>
        </div>
    );
}

export default BookList;