import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./SentimentHappy.css";

type SentimentHappyType = {
  faceHappy?: string;

  /** Style props */
  sentimentHappyBorder?: CSSProperties["border"];
  sentimentHappyWidth?: CSSProperties["width"];
  sentimentHappyHeight?: CSSProperties["height"];
  sentimentHappyPadding?: CSSProperties["padding"];
  faceHappyIconWidth?: CSSProperties["width"];
  faceHappyIconHeight?: CSSProperties["height"];
};

const SentimentHappy: FunctionComponent<SentimentHappyType> = ({
  faceHappy,
  sentimentHappyBorder,
  sentimentHappyWidth,
  sentimentHappyHeight,
  sentimentHappyPadding,
  faceHappyIconWidth,
  faceHappyIconHeight,
}) => {
  const sentimentHappyStyle: CSSProperties = useMemo(() => {
    return {
      border: sentimentHappyBorder,
      width: sentimentHappyWidth,
      height: sentimentHappyHeight,
      padding: sentimentHappyPadding,
    };
  }, [
    sentimentHappyBorder,
    sentimentHappyWidth,
    sentimentHappyHeight,
    sentimentHappyPadding,
  ]);

  const faceHappyIconStyle: CSSProperties = useMemo(() => {
    return {
      width: faceHappyIconWidth,
      height: faceHappyIconHeight,
    };
  }, [faceHappyIconWidth, faceHappyIconHeight]);

  return (
    <div className="sentimenthappy" style={sentimentHappyStyle}>
      <img
        className="face-happy-icon"
        alt=""
        src={faceHappy}
        style={faceHappyIconStyle}
      />
    </div>
  );
};

export default SentimentHappy;
