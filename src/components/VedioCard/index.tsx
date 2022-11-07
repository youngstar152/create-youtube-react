import {Avatar, Card,CardHeader, CardMedia} from "@material-ui/core";
import useStyles from "./style";

export const VideoCard=()=>{
    const styles=useStyles();
    return (
        <Card className={styles.root} elevation={0} square>
            <CardMedia className={styles.media} image="/static/no-image.jpg" title="Thumbnail" />
            <CardHeader className={styles.header} avatar={<Avatar/>} title="Organization Admin Settings: Dashboard overview[1/7]"
            subheader="Figma 16K views 2 months ago"/>
        </Card>
    );
};