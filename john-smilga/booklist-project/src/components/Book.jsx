const Book = (props) => {
    const { img, title, author } = props;

    return (
        <article className="book">
            <img className="h-52 mb-5" src={img} alt={title}></img>
            <h2 className="mb-2 text-green-600">{title}</h2>
            <h4 className="text-green-600">{author}</h4>
        </article>
    );
}

export default Book;