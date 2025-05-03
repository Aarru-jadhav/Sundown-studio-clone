import { useState } from 'react'
import './App.css'
import Header from './Header'
import Herosection from './Herosection'
import Video from './video'
import Anime from './anime'
import Movingline from './movingline'
import Page2b from './Page2b'
import Elmcorn from './elmcorn'
import Page4 from './page4'
import Page5 from './page5'
import Loader from './Loader'




function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
     {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Herosection />
          <Anime />
          <Video />
          <Movingline />
          <Page2b />
          <Elmcorn />
          <Page4 />
          <Page5 />
        </>
      )}
     </>
  )
}

export default App
