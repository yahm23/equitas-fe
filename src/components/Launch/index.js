import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {

    return (
        <div>
            <div className={styles.launchTitle}>{props.name}</div>
            <div>Id: {props.id}</div>
            <div>Flight Number: {props.flight_number}</div>
            <div>Launch Date: {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
    )

}

export default Launch