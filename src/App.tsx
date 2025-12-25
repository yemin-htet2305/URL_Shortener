import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SearchBox from "./components/SearchBox"
import Features from "./components/Features"
import GetStarted from "./components/GetStarted"

function App() {
  
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <NavBar />
        <Hero/>
        <SearchBox/>
        <Features/>
        <GetStarted/>
      </div>
    </>
  )
}

export default App
