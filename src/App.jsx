import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="section home">
        <h2>Welcome to Maharaja Palace Stay</h2>
      </section>

      <section id="rooms" className="section">
        <Rooms />
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
      </section>
    </>
  );
}

export default App;
