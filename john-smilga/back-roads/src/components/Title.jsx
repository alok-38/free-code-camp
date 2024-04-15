export default function Title({ title, subTitle }) {
    return (
        <div>
            <h2>
                {title} <span>{subTitle}</span>
            </h2>
        </div>
    );
}