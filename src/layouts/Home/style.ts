import {makeStyles} from "@material-ui/core";

const APP_BAR=64;
const SIDEBAR_WIDTH=240;

export default makeStyles({
    sidebar:{
        paddingTop: APP_BAR,
        width: SIDEBAR_WIDTH,
    },
    main:{
        paddingTop: APP_BAR+30,
        flexGrow: 1,
    },
    root:{
        display: "flex",
        minHeight: "100%",
    },
});