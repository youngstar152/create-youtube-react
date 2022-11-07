import { VideoCard } from "../../components/VedioCard"
import {Container,Grid} from "@material-ui/core";

export const Home=()=>{
    return (
        <Container>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <VideoCard/>
        </Grid>
        <Grid item xs={4}>
            <VideoCard/>
        </Grid>
        <Grid item xs={4}>
            <VideoCard/>
        </Grid>
        <Grid item xs={4}>
            <VideoCard/>
        </Grid>
        <Grid item xs={4}>
            <VideoCard/>
        </Grid>
    </Grid>
    </Container>
    );
};