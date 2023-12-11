import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TypeLike.css";

type TypeLikeType = {
  heart?: string;
  reaction?: string;

  /** Style props */
  typeLikeBorder?: CSSProperties["border"];
  typeLikePadding?: CSSProperties["padding"];
  typeLikeGap?: CSSProperties["gap"];
  typeLikeBackgroundColor?: CSSProperties["backgroundColor"];
  heartIconWidth?: CSSProperties["width"];
  heartIconHeight?: CSSProperties["height"];
  divFontSize?: CSSProperties["fontSize"];
};

const TypeLike: FunctionComponent<TypeLikeType> = ({
  heart,
  reaction = "10+",
  typeLikeBorder,
  typeLikePadding,
  typeLikeGap,
  typeLikeBackgroundColor,
  heartIconWidth,
  heartIconHeight,
  divFontSize,
}) => {
  const typeLikeStyle: CSSProperties = useMemo(() => {
    return {
      border: typeLikeBorder,
      padding: typeLikePadding,
      gap: typeLikeGap,
      backgroundColor: typeLikeBackgroundColor,
    };
  }, [typeLikeBorder, typeLikePadding, typeLikeGap, typeLikeBackgroundColor]);

  const heartIconStyle: CSSProperties = useMemo(() => {
    return {
      width: heartIconWidth,
      height: heartIconHeight,
    };
  }, [heartIconWidth, heartIconHeight]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
    };
  }, [divFontSize]);

  return (
    <div className="typelike" style={typeLikeStyle}>
      <img className="heart-icon" alt="" src={heart} style={heartIconStyle} />
      <div className="div3" style={div2Style}>
        {reaction}
      </div>
    </div>
  );
};

export default TypeLike;
