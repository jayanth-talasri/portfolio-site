import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Background />

      <Navbar />

      <Hero />
    </div>
  );
}

export default App;