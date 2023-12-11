import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Container.css";

type ContainerType = {
  frameImageName?: string;
  postTitleReplyCount?: string;
  percentageValue?: string;
  productIconImageUrl?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const Container: FunctionComponent<ContainerType> = ({
  frameImageName,
  postTitleReplyCount,
  percentageValue,
  productIconImageUrl,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
}) => {
  const postStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv18Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const div7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="post" style={postStyle}>
      <img className="post-child" alt="" src={frameImageName} />
      <div className="post1">{postTitleReplyCount}</div>
      <div className="div8">{percentageValue}</div>
      <div className="frame-parent21">
        <div
          className="product-iconarrow-narrow-down-parent"
          style={frameDiv18Style}
        >
          <img
            className="product-iconarrow-narrow-down1"
            alt=""
            src={productIconImageUrl}
          />
          <div className="div9" style={div7Style}>
            2.5%
          </div>
        </div>
        <div className="vs-last-week1">vs Last Week</div>
      </div>
    </div>
  );
};

export default Container;
