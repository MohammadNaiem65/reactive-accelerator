import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
