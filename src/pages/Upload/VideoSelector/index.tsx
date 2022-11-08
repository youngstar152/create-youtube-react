// src/pages/Upload/VideoSelector/index.tsxを作成
// index.tsxのコード

import { Button ,CardMedia,Grid,Typography} from "@material-ui/core";
import { useRef ,useState,ChangeEvent,useEffect} from "react";
import useStyles from "./style";
export const VideoSelect = () => {
    const styles=useStyles();
    const [file,setFile]=useState<File>();
    const selectedfFile=(event:ChangeEvent<HTMLInputElement>)=>{
        if(event.currentTarget.files?.length){
            setFile(event.currentTarget.files[0]);
        }
    };
    const [videoURL,setVidelURL]=useState<string>();
    const [thumbnailURLs,setThumbnailURLs]=useState<string[]>([]);

    const createThumbnail=(videoReFURL:string)=>{
        const video=document.createElement("video");
        const canvas=document.createElement("canvas");
        const context=canvas.getContext("2d");

        video.onloadeddata=()=>{
            canvas.width=video.videoWidth;
            canvas.height=video.videoHeight;
            video.currentTime=0;
        };
        video.onseeked=()=>{
            if(video.currentTime>=video.duration||!context) return;
            context.drawImage(video,0,0);
            setThumbnailURLs((prev)=>[...prev,canvas.toDataURL("image/jpeg")]);
            video.currentTime+=Math.ceil(video.duration/3);
        };
        video.src=videoReFURL;
        video.load();
    };

    const inputRef=useRef<HTMLInputElement>(null);
    const handleClick=()=>{
        inputRef.current?.click();
    }
    useEffect(()=>{
        if(file){
            const videoURL=URL.createObjectURL(file);
            setVidelURL(videoURL);
            createThumbnail(videoURL);
        }
    },[file]);

    return (
        // 後にスタイリングでデザインを整える用の<div>要素を配置する
        <div className={styles.root}>
            {videoURL && (
            <div className={styles.full}>
            <CardMedia component="video" src={videoURL} controls />
            <Typography className={styles.textPadding}>サムネイル</Typography>
            <Grid container spacing={2} className={styles.thumbnailContent}>
                {thumbnailURLs.map((url)=>{
                    return(
                        <Grid item xs={4}>
                        <CardMedia image={url} style={{ paddingTop: "56.25%" }} />
                      </Grid> 
                    );
                })}
            </Grid>
            </div>)
            }
            <input type="file" hidden ref={inputRef} onChange={selectedfFile}/>
            {!videoURL && <Button variant="contained" color="primary" onClick={handleClick}>
            ファイルを選択
            </Button>}
        </div>
    );
};