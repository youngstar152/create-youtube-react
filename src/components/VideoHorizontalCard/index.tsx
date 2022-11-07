// src/components/VideoHorizontalCard/index.tsx

import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { HeaderTitle } from "../VedioCard/HeaderTitle";
import { SubHeaderContent } from "../VedioCard/SubHeaderContent";

// styleのimport
import useStyles from "./style";

export const VideoHorizontalCard = () => {
  // styleの生成
  const styles = useStyles();
  return (
    // styleの適用
    // 複数のスタイルを適用したい場合、このような形で記述します。
    // `${}`という記法を用いることで、変数の値を文字として展開できます。
    // 例：ten = 10 → `${ten}` == "10"
    // 詳しくはhttps://jsprimer.net/basic/data-type/#template-literal
    <Card
      className={`${styles.root} ${styles.transparent}`}
      elevation={0}
      square
    >
      {/*
      styleの適用

      サムネイルを16:9で表示するために、`CardMedia`を<div>で囲み、widthプロパティを固定しています。
      */}
      <div className={styles.thumbnail}>
        <CardMedia
          className={styles.media}
          image="/static/no-image.jpg"
          title="Thumbnail"
        />
      </div>

      {/* styleの適用 */}
      <CardHeader
        className={styles.contentPadding}
        title={<HeaderTitle />}
        subheader={<SubHeaderContent />}
      />
    </Card>
  );
};