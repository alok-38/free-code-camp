import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="flex flex-col items-center mt-10 justify-center leading-10">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
