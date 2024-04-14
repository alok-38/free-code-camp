import Image from '../components/books/Image'
import Title from './books/Title'
import Author from './books/Author'

export default function Book() {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}