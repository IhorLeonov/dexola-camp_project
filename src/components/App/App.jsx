import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Features } from "../Features/Features";
import { Top } from "../Top/Top";
import { Join } from "../Join/Join";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Join />
        <Top />
      </main>
      <Footer />
    </>
  );
}

export default App;
