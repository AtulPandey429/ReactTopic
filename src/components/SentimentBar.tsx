import { FunctionComponent, useMemo, type CSSProperties } from "react";

type SentimentBarType = {
  /** Style props */
  sentimentBarGap?: CSSProperties["gap"];
  positiveWidth?: CSSProperties["width"];
  positiveHeight?: CSSProperties["height"];
  neutralHeight?: CSSProperties["height"];
  negativeWidth?: CSSProperties["width"];
  negativeHeight?: CSSProperties["height"];
};

const SentimentBar: FunctionComponent<SentimentBarType> = ({
  sentimentBarGap,
  positiveWidth,
  positiveHeight,
  neutralHeight,
  negativeWidth,
  negativeHeight,
}) => {
  const sentimentBarStyle: CSSProperties = useMemo(() => {
    return {
      gap: sentimentBarGap,
    };
  }, [sentimentBarGap]);

  const positiveStyle: CSSProperties = useMemo(() => {
    return {
      width: positiveWidth,
      height: positiveHeight,
    };
  }, [positiveWidth, positiveHeight]);

  const neutralStyle: CSSProperties = useMemo(() => {
    return {
      height: neutralHeight,
    };
  }, [neutralHeight]);

  const negativeStyle: CSSProperties = useMemo(() => {
    return {
      width: negativeWidth,
      height: negativeHeight,
    };
  }, [negativeWidth, negativeHeight]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[1px] self-stretch"
      style={sentimentBarStyle}
    >
      <div
        className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[30.67px] h-2 border-[1px] border-solid border-primary-400"
        style={positiveStyle}
      />
      <div
        className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-2 border-[1px] border-solid border-teal-400"
        style={neutralStyle}
      />
      <div
        className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-5 h-2 [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400"
        style={negativeStyle}
      />
    </div>
  );
};

export default SentimentBar;
