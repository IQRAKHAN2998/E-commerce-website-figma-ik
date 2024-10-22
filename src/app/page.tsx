import Contact from "./contact/page";
import Categories from "./categori/page";
import About from "./about/page";
import Home from "./home/page";
import BestSelling from "./selling/page";


export default function Main() {
  return (

    <main className="max-w-full overflow-hidden mx-auto">
      {/* homepage */}
      <Home />

      <section >
        {/* best selling*/}
        <BestSelling />
      </section>

      <section>
        <About />
      </section>

      <section id="products">
        <Categories />
      </section>

       <Contact />

    </main>
  )
}