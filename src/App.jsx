import Banner from "./section/banner/Banner"
import Brand from "./section/brand/Brand"
import Counter from "./section/counter/Counter"
import Destination from "./section/destination/Destination"
import Destination2 from "./section/destination2/Destination2"
import Footer from "./section/footer/Footer"
import Gallery from "./section/gallery/Gallery"
import Message from "./section/message/Message"
import Navbar from "./section/navbar/Navbar"
import Newsletter from "./section/newsletter/Newsletter"
import Package from "./section/package/Package"
import Review from "./section/review/Review"
import Test from "./section/test/Test"


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
      <Review />
      <Message />
      <Footer />
      <Test />
    </>
  )
}

export default App
