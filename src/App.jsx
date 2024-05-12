import Navbar from "./components/navbar";
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffers, Subscribe } from "./section";


export default function App() {
  return (
    <main className="relative xl:padding-l wide:padding-r padding-b px-20 ">
      <Navbar/>
      <Hero />
      <PopularProducts/>
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <Subscribe />
    </main>
  )
}
