export default function Footer() {
  const today = new Date();

  return (
    <footer className="mt-5">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
