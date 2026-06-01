import './App.css'
import VideoSection from './components/VideoSection/VideoSection'
import FormSection from './components/FormSection'

function App(){
  return( 
    <>
      <VideoSection src='/public/video/video.mp4'/>
      <FormSection></FormSection>
    </>
  )
}

export default App
