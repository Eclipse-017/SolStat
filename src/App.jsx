import './App.css'
import VideoSection from './components/VideoSection/VideoSection'
import TableSection from './components/TableSection/TableSection'
import FormSection from './components/FormSection'

function App(){
  return( 
    <>
      <VideoSection src='/public/video/video.mp4'/>
      <TableSection/>
      <FormSection></FormSection>
    </>
  )
}

export default App
