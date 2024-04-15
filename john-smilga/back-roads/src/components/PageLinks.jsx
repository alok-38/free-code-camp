import { pageLinks } from './data';
import PageLink from './PageLink'

export default function PageLinks({ parentClass, itemClass }) {
    <ul className={parentClass} id='nav-links'>
        {pageLinks.map((link) => {
            return <PageLink key={link.id} link={link} itemClass={itemClass} />
        })}
    </ul>
}