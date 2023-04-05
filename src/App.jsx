import { useState } from "react"
import { DetailsSection, Navbar, Slide } from "./components"


function App() {

  const [cartCounter, setCartCounter] = useState(0);

  return (
    <div className="App font-kumbhsans">
      <Navbar cartCounter={cartCounter}/>
      {/* TODO: Slide funcional */}
      <Slide />
      <DetailsSection cartCounter={cartCounter} setCartCounter={setCartCounter}/>
    </div>
  )
}

export default App
