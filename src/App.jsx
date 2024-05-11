import Navbar from "./components/navbar";
import { Hero, PopularProducts, SuperQuality } from "./section";


export default function App() {
  return (
    <main className="relative">
      <Navbar/>
      <Hero />
      <PopularProducts/>
      <SuperQuality />
    </main>
  )
}
