import Banner from "./section/banner/Banner"
import Brand from "./section/brand/Brand"
import Counter from "./section/counter/Counter"
import Destination from "./section/destination/Destination"
import Destination2 from "./section/destination2/Destination2"
import Gallery from "./section/gallery/Gallery"
import Navbar from "./section/navbar/Navbar"
import Newsletter from "./section/newsletter/Newsletter"
import Package from "./section/package/Package"


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Destination />
      <Package />
      <Destination2 />
      <Gallery />
      <Counter />
      <Newsletter />
      <Brand />
    </>
  )
}

export default App
