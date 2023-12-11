import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ChartBar.css";

type ChartBarType = {
  /** Style props */
  chartBarWidth?: CSSProperties["width"];
  chartBarPadding?: CSSProperties["padding"];
  chartBarMargin?: CSSProperties["margin"];
  chartBarPosition?: CSSProperties["position"];
  chartBarTop?: CSSProperties["top"];
  chartBarLeft?: CSSProperties["left"];
  chartBarZIndex?: CSSProperties["zIndex"];
  graphBarGap?: CSSProperties["gap"];
  responseTimeWidth?: CSSProperties["width"];
  responseTimeHeight?: CSSProperties["height"];
  noReplyWidth?: CSSProperties["width"];
  noReplyHeight?: CSSProperties["height"];
  hasReplyWidth?: CSSProperties["width"];
  hasReplyHeight?: CSSProperties["height"];
  graphBarGap1?: CSSProperties["gap"];
  responseTimeWidth1?: CSSProperties["width"];
  responseTimeHeight1?: CSSProperties["height"];
  noReplyWidth1?: CSSProperties["width"];
  noReplyHeight1?: CSSProperties["height"];
  hasReplyWidth1?: CSSProperties["width"];
  hasReplyHeight1?: CSSProperties["height"];
  graphBarGap2?: CSSProperties["gap"];
  responseTimeWidth2?: CSSProperties["width"];
  responseTimeHeight2?: CSSProperties["height"];
  noReplyWidth2?: CSSProperties["width"];
  noReplyHeight2?: CSSProperties["height"];
  hasReplyWidth2?: CSSProperties["width"];
  hasReplyHeight2?: CSSProperties["height"];
  graphBarGap3?: CSSProperties["gap"];
  responseTimeWidth3?: CSSProperties["width"];
  responseTimeHeight3?: CSSProperties["height"];
  noReplyWidth3?: CSSProperties["width"];
  noReplyHeight3?: CSSProperties["height"];
  hasReplyWidth3?: CSSProperties["width"];
  hasReplyHeight3?: CSSProperties["height"];
  graphBarGap4?: CSSProperties["gap"];
  responseTimeWidth4?: CSSProperties["width"];
  responseTimeHeight4?: CSSProperties["height"];
  noReplyWidth4?: CSSProperties["width"];
  noReplyHeight4?: CSSProperties["height"];
  hasReplyWidth4?: CSSProperties["width"];
  hasReplyHeight4?: CSSProperties["height"];
  graphBarGap5?: CSSProperties["gap"];
  responseTimeWidth5?: CSSProperties["width"];
  responseTimeHeight5?: CSSProperties["height"];
  noReplyWidth5?: CSSProperties["width"];
  noReplyHeight5?: CSSProperties["height"];
  hasReplyWidth5?: CSSProperties["width"];
  hasReplyHeight5?: CSSProperties["height"];
  graphBarGap6?: CSSProperties["gap"];
  responseTimeWidth6?: CSSProperties["width"];
  responseTimeHeight6?: CSSProperties["height"];
  noReplyWidth6?: CSSProperties["width"];
  noReplyHeight6?: CSSProperties["height"];
  hasReplyWidth6?: CSSProperties["width"];
  hasReplyHeight6?: CSSProperties["height"];
  graphBarGap7?: CSSProperties["gap"];
  responseTimeWidth7?: CSSProperties["width"];
  responseTimeHeight7?: CSSProperties["height"];
  noReplyWidth7?: CSSProperties["width"];
  noReplyHeight7?: CSSProperties["height"];
  hasReplyWidth7?: CSSProperties["width"];
  hasReplyHeight7?: CSSProperties["height"];
  graphBarGap8?: CSSProperties["gap"];
  responseTimeWidth8?: CSSProperties["width"];
  responseTimeHeight8?: CSSProperties["height"];
  noReplyWidth8?: CSSProperties["width"];
  noReplyHeight8?: CSSProperties["height"];
  hasReplyWidth8?: CSSProperties["width"];
  hasReplyHeight8?: CSSProperties["height"];
  graphBarGap9?: CSSProperties["gap"];
  responseTimeWidth9?: CSSProperties["width"];
  responseTimeHeight9?: CSSProperties["height"];
  noReplyWidth9?: CSSProperties["width"];
  noReplyHeight9?: CSSProperties["height"];
  hasReplyWidth9?: CSSProperties["width"];
  hasReplyHeight9?: CSSProperties["height"];
  graphBarGap10?: CSSProperties["gap"];
  responseTimeWidth10?: CSSProperties["width"];
  responseTimeHeight10?: CSSProperties["height"];
  noReplyWidth10?: CSSProperties["width"];
  noReplyHeight10?: CSSProperties["height"];
  hasReplyWidth10?: CSSProperties["width"];
  hasReplyHeight10?: CSSProperties["height"];
  graphBarGap11?: CSSProperties["gap"];
  responseTimeWidth11?: CSSProperties["width"];
  responseTimeHeight11?: CSSProperties["height"];
  noReplyWidth11?: CSSProperties["width"];
  noReplyHeight11?: CSSProperties["height"];
  hasReplyWidth11?: CSSProperties["width"];
  hasReplyHeight11?: CSSProperties["height"];
};

const ChartBar: FunctionComponent<ChartBarType> = ({
  chartBarWidth,
  chartBarPadding,
  chartBarMargin,
  chartBarPosition,
  chartBarTop,
  chartBarLeft,
  chartBarZIndex,
  graphBarGap,
  responseTimeWidth,
  responseTimeHeight,
  noReplyWidth,
  noReplyHeight,
  hasReplyWidth,
  hasReplyHeight,
  graphBarGap1,
  responseTimeWidth1,
  responseTimeHeight1,
  noReplyWidth1,
  noReplyHeight1,
  hasReplyWidth1,
  hasReplyHeight1,
  graphBarGap2,
  responseTimeWidth2,
  responseTimeHeight2,
  noReplyWidth2,
  noReplyHeight2,
  hasReplyWidth2,
  hasReplyHeight2,
  graphBarGap3,
  responseTimeWidth3,
  responseTimeHeight3,
  noReplyWidth3,
  noReplyHeight3,
  hasReplyWidth3,
  hasReplyHeight3,
  graphBarGap4,
  responseTimeWidth4,
  responseTimeHeight4,
  noReplyWidth4,
  noReplyHeight4,
  hasReplyWidth4,
  hasReplyHeight4,
  graphBarGap5,
  responseTimeWidth5,
  responseTimeHeight5,
  noReplyWidth5,
  noReplyHeight5,
  hasReplyWidth5,
  hasReplyHeight5,
  graphBarGap6,
  responseTimeWidth6,
  responseTimeHeight6,
  noReplyWidth6,
  noReplyHeight6,
  hasReplyWidth6,
  hasReplyHeight6,
  graphBarGap7,
  responseTimeWidth7,
  responseTimeHeight7,
  noReplyWidth7,
  noReplyHeight7,
  hasReplyWidth7,
  hasReplyHeight7,
  graphBarGap8,
  responseTimeWidth8,
  responseTimeHeight8,
  noReplyWidth8,
  noReplyHeight8,
  hasReplyWidth8,
  hasReplyHeight8,
  graphBarGap9,
  responseTimeWidth9,
  responseTimeHeight9,
  noReplyWidth9,
  noReplyHeight9,
  hasReplyWidth9,
  hasReplyHeight9,
  graphBarGap10,
  responseTimeWidth10,
  responseTimeHeight10,
  noReplyWidth10,
  noReplyHeight10,
  hasReplyWidth10,
  hasReplyHeight10,
  graphBarGap11,
  responseTimeWidth11,
  responseTimeHeight11,
  noReplyWidth11,
  noReplyHeight11,
  hasReplyWidth11,
  hasReplyHeight11,
}) => {
  const chartBarStyle: CSSProperties = useMemo(() => {
    return {
      width: chartBarWidth,
      padding: chartBarPadding,
      margin: chartBarMargin,
      position: chartBarPosition,
      top: chartBarTop,
      left: chartBarLeft,
      zIndex: chartBarZIndex,
    };
  }, [
    chartBarWidth,
    chartBarPadding,
    chartBarMargin,
    chartBarPosition,
    chartBarTop,
    chartBarLeft,
    chartBarZIndex,
  ]);

  const graphBarStyle: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap,
    };
  }, [graphBarGap]);

  const responseTime1Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth,
      height: responseTimeHeight,
    };
  }, [responseTimeWidth, responseTimeHeight]);

  const noReplyStyle: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth,
      height: noReplyHeight,
    };
  }, [noReplyWidth, noReplyHeight]);

  const hasReply1Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth,
      height: hasReplyHeight,
    };
  }, [hasReplyWidth, hasReplyHeight]);

  const graphBar1Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap1,
    };
  }, [graphBarGap1]);

  const responseTime2Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth1,
      height: responseTimeHeight1,
    };
  }, [responseTimeWidth1, responseTimeHeight1]);

  const noReply1Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth1,
      height: noReplyHeight1,
    };
  }, [noReplyWidth1, noReplyHeight1]);

  const hasReply2Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth1,
      height: hasReplyHeight1,
    };
  }, [hasReplyWidth1, hasReplyHeight1]);

  const graphBar2Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap2,
    };
  }, [graphBarGap2]);

  const responseTime3Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth2,
      height: responseTimeHeight2,
    };
  }, [responseTimeWidth2, responseTimeHeight2]);

  const noReply2Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth2,
      height: noReplyHeight2,
    };
  }, [noReplyWidth2, noReplyHeight2]);

  const hasReply3Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth2,
      height: hasReplyHeight2,
    };
  }, [hasReplyWidth2, hasReplyHeight2]);

  const graphBar3Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap3,
    };
  }, [graphBarGap3]);

  const responseTime4Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth3,
      height: responseTimeHeight3,
    };
  }, [responseTimeWidth3, responseTimeHeight3]);

  const noReply3Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth3,
      height: noReplyHeight3,
    };
  }, [noReplyWidth3, noReplyHeight3]);

  const hasReply4Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth3,
      height: hasReplyHeight3,
    };
  }, [hasReplyWidth3, hasReplyHeight3]);

  const graphBar4Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap4,
    };
  }, [graphBarGap4]);

  const responseTime5Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth4,
      height: responseTimeHeight4,
    };
  }, [responseTimeWidth4, responseTimeHeight4]);

  const noReply4Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth4,
      height: noReplyHeight4,
    };
  }, [noReplyWidth4, noReplyHeight4]);

  const hasReply5Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth4,
      height: hasReplyHeight4,
    };
  }, [hasReplyWidth4, hasReplyHeight4]);

  const graphBar5Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap5,
    };
  }, [graphBarGap5]);

  const responseTime6Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth5,
      height: responseTimeHeight5,
    };
  }, [responseTimeWidth5, responseTimeHeight5]);

  const noReply5Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth5,
      height: noReplyHeight5,
    };
  }, [noReplyWidth5, noReplyHeight5]);

  const hasReply6Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth5,
      height: hasReplyHeight5,
    };
  }, [hasReplyWidth5, hasReplyHeight5]);

  const graphBar6Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap6,
    };
  }, [graphBarGap6]);

  const responseTime7Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth6,
      height: responseTimeHeight6,
    };
  }, [responseTimeWidth6, responseTimeHeight6]);

  const noReply6Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth6,
      height: noReplyHeight6,
    };
  }, [noReplyWidth6, noReplyHeight6]);

  const hasReply7Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth6,
      height: hasReplyHeight6,
    };
  }, [hasReplyWidth6, hasReplyHeight6]);

  const graphBar7Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap7,
    };
  }, [graphBarGap7]);

  const responseTime8Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth7,
      height: responseTimeHeight7,
    };
  }, [responseTimeWidth7, responseTimeHeight7]);

  const noReply7Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth7,
      height: noReplyHeight7,
    };
  }, [noReplyWidth7, noReplyHeight7]);

  const hasReply8Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth7,
      height: hasReplyHeight7,
    };
  }, [hasReplyWidth7, hasReplyHeight7]);

  const graphBar8Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap8,
    };
  }, [graphBarGap8]);

  const responseTime9Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth8,
      height: responseTimeHeight8,
    };
  }, [responseTimeWidth8, responseTimeHeight8]);

  const noReply8Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth8,
      height: noReplyHeight8,
    };
  }, [noReplyWidth8, noReplyHeight8]);

  const hasReply9Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth8,
      height: hasReplyHeight8,
    };
  }, [hasReplyWidth8, hasReplyHeight8]);

  const graphBar9Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap9,
    };
  }, [graphBarGap9]);

  const responseTime10Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth9,
      height: responseTimeHeight9,
    };
  }, [responseTimeWidth9, responseTimeHeight9]);

  const noReply9Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth9,
      height: noReplyHeight9,
    };
  }, [noReplyWidth9, noReplyHeight9]);

  const hasReply10Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth9,
      height: hasReplyHeight9,
    };
  }, [hasReplyWidth9, hasReplyHeight9]);

  const graphBar10Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap10,
    };
  }, [graphBarGap10]);

  const responseTime11Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth10,
      height: responseTimeHeight10,
    };
  }, [responseTimeWidth10, responseTimeHeight10]);

  const noReply10Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth10,
      height: noReplyHeight10,
    };
  }, [noReplyWidth10, noReplyHeight10]);

  const hasReply11Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth10,
      height: hasReplyHeight10,
    };
  }, [hasReplyWidth10, hasReplyHeight10]);

  const graphBar11Style: CSSProperties = useMemo(() => {
    return {
      gap: graphBarGap11,
    };
  }, [graphBarGap11]);

  const responseTime12Style: CSSProperties = useMemo(() => {
    return {
      width: responseTimeWidth11,
      height: responseTimeHeight11,
    };
  }, [responseTimeWidth11, responseTimeHeight11]);

  const noReply11Style: CSSProperties = useMemo(() => {
    return {
      width: noReplyWidth11,
      height: noReplyHeight11,
    };
  }, [noReplyWidth11, noReplyHeight11]);

  const hasReply12Style: CSSProperties = useMemo(() => {
    return {
      width: hasReplyWidth11,
      height: hasReplyHeight11,
    };
  }, [hasReplyWidth11, hasReplyHeight11]);

  return (
    <div className="chartbar" style={chartBarStyle}>
      <div className="graph-bar" style={graphBarStyle}>
        <div className="response-time1" style={responseTime1Style} />
        <div className="no-reply" style={noReplyStyle} />
        <div className="has-reply1" style={hasReply1Style} />
      </div>
      <div className="graph-bar" style={graphBar1Style}>
        <div className="response-time2" style={responseTime2Style} />
        <div className="no-reply" style={noReply1Style} />
        <div className="has-reply2" style={hasReply2Style} />
      </div>
      <div className="graph-bar" style={graphBar2Style}>
        <div className="response-time3" style={responseTime3Style} />
        <div className="no-reply2" style={noReply2Style} />
        <div className="has-reply3" style={hasReply3Style} />
      </div>
      <div className="graph-bar" style={graphBar3Style}>
        <div className="response-time1" style={responseTime4Style} />
        <div className="no-reply" style={noReply3Style} />
        <div className="has-reply1" style={hasReply4Style} />
      </div>
      <div className="graph-bar" style={graphBar4Style}>
        <div className="response-time2" style={responseTime5Style} />
        <div className="no-reply" style={noReply4Style} />
        <div className="has-reply2" style={hasReply5Style} />
      </div>
      <div className="graph-bar" style={graphBar5Style}>
        <div className="response-time3" style={responseTime6Style} />
        <div className="no-reply2" style={noReply5Style} />
        <div className="has-reply3" style={hasReply6Style} />
      </div>
      <div className="graph-bar" style={graphBar6Style}>
        <div className="response-time7" style={responseTime7Style} />
        <div className="no-reply6" style={noReply6Style} />
        <div className="has-reply7" style={hasReply7Style} />
      </div>
      <div className="graph-bar" style={graphBar7Style}>
        <div className="response-time8" style={responseTime8Style} />
        <div className="no-reply7" style={noReply7Style} />
        <div className="has-reply8" style={hasReply8Style} />
      </div>
      <div className="graph-bar" style={graphBar8Style}>
        <div className="response-time9" style={responseTime9Style} />
        <div className="no-reply" style={noReply8Style} />
        <div className="has-reply2" style={hasReply9Style} />
      </div>
      <div className="graph-bar" style={graphBar9Style}>
        <div className="response-time7" style={responseTime10Style} />
        <div className="no-reply" style={noReply9Style} />
        <div className="has-reply1" style={hasReply10Style} />
      </div>
      <div className="graph-bar" style={graphBar10Style}>
        <div className="response-time8" style={responseTime11Style} />
        <div className="no-reply7" style={noReply10Style} />
        <div className="has-reply8" style={hasReply11Style} />
      </div>
      <div className="graph-bar" style={graphBar11Style}>
        <div className="response-time8" style={responseTime12Style} />
        <div className="no-reply7" style={noReply11Style} />
        <div className="has-reply8" style={hasReply12Style} />
      </div>
    </div>
  );
};

export default ChartBar;
