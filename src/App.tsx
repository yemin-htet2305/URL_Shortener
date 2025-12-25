import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SearchBox from "./components/SearchBox"
import Features from "./components/Features"
import GetStarted from "./components/GetStarted"
import Footer from "./components/Footer"
function App() {
  
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <NavBar />
        <Hero/>
        <SearchBox/>
        <Features/>
        <GetStarted/>
        <Footer/>
      </div>
    </>
  )
}

export default App
