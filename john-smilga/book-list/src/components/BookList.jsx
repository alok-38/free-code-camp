import Books from './Book'

export default function BookList() {
    return (
        <section>
            <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
        </section>
    )
}