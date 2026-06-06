import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import VideoSection from './components/VideoSection/VideoSection'

function App(){
  return( 
    <>
      <VideoSection src='/public/video/video.mp4'/>
    </>
  )
}

export default App
