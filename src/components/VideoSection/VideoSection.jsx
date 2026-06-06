import './VideoSectionVariables.css'
import './VideoSectionStyles.css'
import './VideoSectionQueries.css'

import HeadingTwo from '../HeadingTwo/HeadingTwo'

function VideoSection({
    src="https://cdn.pixabay.com/video/2023/10/09/184209-872701502_large.mp4", 
    type="video/mp4", desc="The Planets In Our Solar System"}){

    return (
        <section className='main-section video-container'>
            <div className='video-section'>
                <div className='left'>
                    <figure>
                        <video autoPlay muted loop controls>
                            <source src={src} type={type} />   

                            <p>Video not supported by browser</p>
                        </video>

                        <figcaption>{desc}</figcaption>
                    </figure>
                </div>

                <div className='right'>
                    <HeadingTwo 
                        className="video-heading"
                        title="How Planetary Data Helps Us Understand Space"
                        description={<>
                            Planetary science goes beyond images. Comparing
                            <strong> mass</strong>, <strong> diameter</strong>,
                            <strong> gravity</strong>, and <strong>density</strong>, 
                            we gain insight into how planets form, behave, 
                            and interact within the solar system.
                        </>}
                    />
                </div>
            </div>
        </section>
    )

}

export default VideoSection