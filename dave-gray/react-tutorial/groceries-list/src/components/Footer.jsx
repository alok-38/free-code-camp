export default function Footer() {
  const today = new Date();
  return (
    <footer className="bg-slate-600 text-white w-[50%] text-center">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
