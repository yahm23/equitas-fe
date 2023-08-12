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
        <div className={styles.launchContainer}>
            <div className={styles.launchImageContainer}>
                <div role="img" alt={props.rocket.flickr_images.length ? props.rocket.name : "Fallback SpaceX logo"} style={backgroundClass} className={styles.launchImage}/>
            </div>
            <div className={styles.launchCopy}>
                <p className={styles.launchTitle}>{props.name}</p>
                <p>Id: {props.id}</p>
                <p>Flight Number: {props.flight_number}</p>
                <p>Launch Date: {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>
    )

}

export default Launch