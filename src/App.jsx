import Navbar from "./components/navbar";
import { Hero, PopularProducts, SuperQuality, Services } from "./section";


export default function App() {
  return (
    <main className="relative xl:padding-l wide:padding-r padding-b px-10 ">
      <Navbar/>
      <Hero />
      <PopularProducts/>
      <SuperQuality />
      <Services />
    </main>
  )
}
