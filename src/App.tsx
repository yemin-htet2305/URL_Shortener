import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SearchBox from "./components/SearchBox"
function App() {
  
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <NavBar />
        <Hero/>
        <SearchBox/>
      </div>
    </>
  )
}

export default App
