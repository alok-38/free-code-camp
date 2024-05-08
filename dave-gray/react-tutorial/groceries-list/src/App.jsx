import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center leading-10 min-h-screen">
      <Header />
      <Content className="flex-grow" />
      <Footer />
    </main>
  );
}
