import {Grid, Paper} from "@mui/material";
import Launch from "../Launch";
import styles from './launches.module.css';

const Launches = ({launches}) =>  {
    return (
        <Grid container spacing={2}>
            {launches.map((launch) => (
                <Grid key={launch.id} item xs={4}>
                    <Paper className={styles.page}>
                        <Launch props={launch}/>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}


export default Launches