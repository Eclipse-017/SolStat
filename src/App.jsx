import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'


import VideoSection from './sections/VideoSection/VideoSection'

function App() {
  return (
    <>
      <main>
        <VideoSection src={solStatVideo}/>
      </main>
    </>
  )
}

export default App
