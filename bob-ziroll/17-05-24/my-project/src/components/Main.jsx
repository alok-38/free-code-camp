import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow text-center">
        <h1 className="text-5xl">Reasons I&apos;m excited to learn React</h1>
        <ol className="mt-10 leading-10">
          <li>It&apos;s a popular library.</li>
          <li>I&apos;m more likely to get a job.</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
}
