import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import FormSection from './components/FormSection/FormSection'
import VideoSection from './components/VideoSection/VideoSection'

function App(){
  return( 
    <>
      <VideoSection src='/public/video/video.mp4'/>
      <FormSection />
    </>
  )
}

export default App
