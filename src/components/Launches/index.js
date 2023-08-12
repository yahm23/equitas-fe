import {Grid} from "@mui/material";
import Launch from "../Launch";
import styles from './launches.module.css';

const Launches = ({launches}) =>  {
    return (
        <Grid className={styles.launches} container spacing={2}>
            {launches.map((launch) => (
                <Launch key={launch.id} props={launch}/>
            ))}
        </Grid>
    );
}


export default Launches