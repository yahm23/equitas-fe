import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {
    const backgroundClass = props.rocket.flickr_images.length ? {
        backgroundImage: `url("${props.rocket.flickr_images[Math.floor(Math.random() * props.rocket.flickr_images.length)]}")`,
    } :
    {
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAYFBMVEUAAAD///8QEBBVVVU/Pz/8/PxjY2NRUVFISEiAgIA7Ozu4uLikpKQsLCzW1tYbGxvq6urHx8etra0jIyN2dnadnZ3Q0NBbW1vi4uLx8fEVFRXAwMAzMzNwcHCNjY2Wlpa5oDCYAAABbUlEQVR4nO3U3XKDIBAFYFZEUeI/GtE0ef+3LCx16themZk6nTnfTURX9ggaIQAAAAAAAAAAAAAAAAAAAP6BJbmw+WBtlkk9XJVBF7e1z6vmovZCVGNdj/c/b7tb72KiNTs1SbMqYq1/gExtgzjZrY5FjzmeJvfhe9FGCmFdrK1epPqzOyCpztk9DRlISylzq2Zu3dIzZqEpnJcyFA2a+UHoqWvyRaMjU55MEDJMKc8ZJvTrwCeH1vGvJZXHDN3uDtMbY/rHNjZ90dJ8bheialtmGnkdVEBk4tUbtc0xQ0HOZ9g99kr0St+IEFKwkmbOYIvAP1XTT13XEXc/ZJj2t2eOXFar8Y0Egy6ZjhnU99w9c1Tw+1ClrAwZ6nicho/iSTRrYXzW6nSGXO33guh4/Rlef+22omL/XWgRms+LL7N+F+3pECKJ4vHy8/LSHIqWr0GorZLtHyJpzi8EAAAAAAAAAAAAAAAAAADAbz4B/uMOaRJ+/kEAAAAASUVORK5CYII=")`,
    }
     
    return (
        <div>
            <div data-id={props.id} className={`${styles.launchContainer}`}>
                <div className={styles.launchImageContainer}>
                    <div role="img" alt={props.rocket.flickr_images.length ? props.rocket.name : "Fallback SpaceX logo"} style={backgroundClass} className={styles.launchImage}/>
                </div>
                <div className={styles.launchCopy}>
                    <p className={styles.launchTitle}>{props.name}</p>
                    <p><b>Flight Number:</b> {props.flight_number}</p>
                    <p><b>Launch Date:</b> {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>
            <div id={props.id} className={`${styles.launchContainer} hidden`}>
                <div className={`${styles.launchImageContainer} launchImageContainer `}>
                    <div role="img" alt={props.rocket.flickr_images.length ? props.rocket.name : "Fallback SpaceX logo"} style={backgroundClass} className={styles.launchImage}/>
                </div>
                <div className={styles.launchCopy}>
                    <p className={styles.launchTitle}>{props.name}</p>
                    <p><b>ID:</b> {props.id}</p>
                    <p><b>Flight Number:</b> {props.flight_number}</p>
                    <p><b>Launch Date:</b> {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p><b>Rocket description:</b> {props.rocket.description}</p>
                    <p><b>Launchpad details:</b> {props.launchpad.details}</p>
                </div>
                <div className={styles.buttonContainer}>
                    { props.links.article ? 
                        (
                            <a className="button" target="_blank" href={props.links.article}>Read more</a>
                        )
                        :
                        (
                            <div></div>
                        )
                    }
                    <button className="button closeButton" >Close</button>
                </div>
            </div>

            
        </div>
    )

}

export default Launch