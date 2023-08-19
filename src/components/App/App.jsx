import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Features } from "../Features/Features";
import { TopNfts } from "../TopNfts/TopNfts";
import { JoinUs } from "../JoinUs/JoinUs";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <TopNfts />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
