import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col items-center h-screen justify-center leading-10">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
