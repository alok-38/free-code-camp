export default function Footer({ itemCount }) {
  const today = new Date();

  return (
    <footer className="mt-5">
      {itemCount !== 0 && (
        <p>
          {itemCount} {itemCount === 1 ? "item" : "items"} in your list
        </p>
      )}
      {itemCount === 0 && <p>Your list is empty.</p>}
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
