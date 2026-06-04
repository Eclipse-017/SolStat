import './App.css'
import VideoSection from './components/VideoSection/VideoSection'
import TableSection from './components/TableSection/TableSection'

function App() {
  return (
    <>
      <VideoSection src='/public/video/video.mp4' />
      <TableSection />
    </>
  )
}

export default App
