import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./GraphBarDetails.css";

type GraphBarDetailsType = {
  reply?: string;
  members?: string;
  hasReply?: string;
  members1?: string;
  responseTime?: string;
  prop?: string;
  h44m?: string;
  showMembers?: boolean;
  membersVisible?: boolean;
  showH44m?: boolean;

  /** Style props */
  graphBarDetailsWidth?: CSSProperties["width"];
  graphBarDetailsPadding?: CSSProperties["padding"];
  graphBarDetailsMargin?: CSSProperties["margin"];
  graphBarDetailsPosition?: CSSProperties["position"];
  graphBarDetailsTop?: CSSProperties["top"];
  graphBarDetailsLeft?: CSSProperties["left"];
  graphBarDetailsZIndex?: CSSProperties["zIndex"];
  frameDivGap?: CSSProperties["gap"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivPadding?: CSSProperties["padding"];
  fridayJuly26FontSize?: CSSProperties["fontSize"];
  frameDivPadding1?: CSSProperties["padding"];
  frameDivGap1?: CSSProperties["gap"];
  frameDivGap2?: CSSProperties["gap"];
  frameDivGap3?: CSSProperties["gap"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  replyFontSize?: CSSProperties["fontSize"];
  replyWidth?: CSSProperties["width"];
  replyHeight?: CSSProperties["height"];
  frameDivGap4?: CSSProperties["gap"];
  divFontSize?: CSSProperties["fontSize"];
  membersFontSize?: CSSProperties["fontSize"];
  frameDivGap5?: CSSProperties["gap"];
  frameDivGap6?: CSSProperties["gap"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
  hasReplyFontSize?: CSSProperties["fontSize"];
  hasReplyWidth?: CSSProperties["width"];
  hasReplyHeight?: CSSProperties["height"];
  frameDivGap7?: CSSProperties["gap"];
  divFontSize1?: CSSProperties["fontSize"];
  membersFontSize1?: CSSProperties["fontSize"];
  frameDivGap8?: CSSProperties["gap"];
  frameDivGap9?: CSSProperties["gap"];
  frameDivWidth2?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
  responseTimeFontSize?: CSSProperties["fontSize"];
  responseTimeWidth?: CSSProperties["width"];
  responseTimeHeight?: CSSProperties["height"];
  frameDivGap10?: CSSProperties["gap"];
  divFontSize2?: CSSProperties["fontSize"];
  h44mFontSize?: CSSProperties["fontSize"];
};

const GraphBarDetails: FunctionComponent<GraphBarDetailsType> = ({
  reply,
  members,
  hasReply,
  members1,
  responseTime,
  prop,
  h44m,
  showMembers,
  membersVisible,
  showH44m,
  graphBarDetailsWidth,
  graphBarDetailsPadding,
  graphBarDetailsMargin,
  graphBarDetailsPosition,
  graphBarDetailsTop,
  graphBarDetailsLeft,
  graphBarDetailsZIndex,
  frameDivGap,
  frameDivAlignSelf,
  frameDivPadding,
  fridayJuly26FontSize,
  frameDivPadding1,
  frameDivGap1,
  frameDivGap2,
  frameDivGap3,
  frameDivWidth,
  frameDivHeight,
  replyFontSize,
  replyWidth,
  replyHeight,
  frameDivGap4,
  divFontSize,
  membersFontSize,
  frameDivGap5,
  frameDivGap6,
  frameDivWidth1,
  frameDivHeight1,
  hasReplyFontSize,
  hasReplyWidth,
  hasReplyHeight,
  frameDivGap7,
  divFontSize1,
  membersFontSize1,
  frameDivGap8,
  frameDivGap9,
  frameDivWidth2,
  frameDivHeight2,
  responseTimeFontSize,
  responseTimeWidth,
  responseTimeHeight,
  frameDivGap10,
  divFontSize2,
  h44mFontSize,
}) => {
  const graphBarDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: graphBarDetailsWidth,
      padding: graphBarDetailsPadding,
      margin: graphBarDetailsMargin,
      position: graphBarDetailsPosition,
      top: graphBarDetailsTop,
      left: graphBarDetailsLeft,
      zIndex: graphBarDetailsZIndex,
    };
  }, [
    graphBarDetailsWidth,
    graphBarDetailsPadding,
    graphBarDetailsMargin,
    graphBarDetailsPosition,
    graphBarDetailsTop,
    graphBarDetailsLeft,
    graphBarDetailsZIndex,
  ]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivGap, frameDivAlignSelf]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const fridayJuly26Style: CSSProperties = useMemo(() => {
    return {
      fontSize: fridayJuly26FontSize,
    };
  }, [fridayJuly26FontSize]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
      gap: frameDivGap1,
    };
  }, [frameDivPadding1, frameDivGap1]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap2,
    };
  }, [frameDivGap2]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap3,
    };
  }, [frameDivGap3]);

  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const replyStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: replyFontSize,
      width: replyWidth,
      height: replyHeight,
    };
  }, [replyFontSize, replyWidth, replyHeight]);

  const frameDiv9Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap4,
    };
  }, [frameDivGap4]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
    };
  }, [divFontSize]);

  const members1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize,
    };
  }, [membersFontSize]);

  const frameDiv10Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap5,
    };
  }, [frameDivGap5]);

  const frameDiv11Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap6,
    };
  }, [frameDivGap6]);

  const frameDiv12Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivWidth1, frameDivHeight1]);

  const hasReplyStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: hasReplyFontSize,
      width: hasReplyWidth,
      height: hasReplyHeight,
    };
  }, [hasReplyFontSize, hasReplyWidth, hasReplyHeight]);

  const frameDiv13Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap7,
    };
  }, [frameDivGap7]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize1,
    };
  }, [divFontSize1]);

  const members2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize1,
    };
  }, [membersFontSize1]);

  const frameDiv14Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap8,
    };
  }, [frameDivGap8]);

  const frameDiv15Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap9,
    };
  }, [frameDivGap9]);

  const frameDiv16Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivWidth2, frameDivHeight2]);

  const responseTimeStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: responseTimeFontSize,
      width: responseTimeWidth,
      height: responseTimeHeight,
    };
  }, [responseTimeFontSize, responseTimeWidth, responseTimeHeight]);

  const frameDiv17Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap10,
    };
  }, [frameDivGap10]);

  const div5Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize2,
    };
  }, [divFontSize2]);

  const h44mStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: h44mFontSize,
    };
  }, [h44mFontSize]);

  return (
    <div className="graph-bar-details" style={graphBarDetailsStyle}>
      <div className="frame-parent13" style={frameDiv3Style}>
        <div className="friday-july-26-2023-wrapper" style={frameDiv4Style}>
          <div className="friday-july-26" style={fridayJuly26Style}>
            Friday, July 26, 2023
          </div>
        </div>
        <div className="frame-parent14" style={frameDiv5Style}>
          <div className="frame-parent15" style={frameDiv6Style}>
            <div className="frame-parent16" style={frameDiv7Style}>
              <div className="frame-child1" style={frameDiv8Style} />
              <div className="reply" style={replyStyle}>
                {reply}
              </div>
            </div>
            <div className="parent" style={frameDiv9Style}>
              <div className="friday-july-26" style={div3Style}>
                20%
              </div>
              {showMembers && (
                <div className="h-44m" style={members1Style}>
                  {members}
                </div>
              )}
            </div>
          </div>
          <div className="frame-parent15" style={frameDiv10Style}>
            <div className="frame-parent16" style={frameDiv11Style}>
              <div className="frame-child2" style={frameDiv12Style} />
              <div className="reply" style={hasReplyStyle}>
                {hasReply}
              </div>
            </div>
            <div className="parent" style={frameDiv13Style}>
              <div className="friday-july-26" style={div4Style}>
                20%
              </div>
              {membersVisible && (
                <div className="h-44m" style={members2Style}>
                  {members1}
                </div>
              )}
            </div>
          </div>
          <div className="frame-parent19" style={frameDiv14Style}>
            <div className="frame-parent16" style={frameDiv15Style}>
              <div className="frame-child3" style={frameDiv16Style} />
              <div className="reply" style={responseTimeStyle}>
                {responseTime}
              </div>
            </div>
            <div className="parent" style={frameDiv17Style}>
              <div className="friday-july-26" style={div5Style}>
                {prop}
              </div>
              {showH44m && (
                <div className="h-44m" style={h44mStyle}>
                  {h44m}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphBarDetails;
