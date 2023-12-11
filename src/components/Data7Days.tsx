import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Data7DaysType = {
  /** Style props */
  data7DaysWidth?: CSSProperties["width"];
  data7DaysPadding?: CSSProperties["padding"];
  monFontSize?: CSSProperties["fontSize"];
  tueFontSize?: CSSProperties["fontSize"];
  wedFontSize?: CSSProperties["fontSize"];
  thuFontSize?: CSSProperties["fontSize"];
  friFontSize?: CSSProperties["fontSize"];
  satFontSize?: CSSProperties["fontSize"];
  sunFontSize?: CSSProperties["fontSize"];
};

const Data7Days: FunctionComponent<Data7DaysType> = ({
  data7DaysWidth,
  data7DaysPadding,
  monFontSize,
  tueFontSize,
  wedFontSize,
  thuFontSize,
  friFontSize,
  satFontSize,
  sunFontSize,
}) => {
  const data7DaysStyle: CSSProperties = useMemo(() => {
    return {
      width: data7DaysWidth,
      padding: data7DaysPadding,
    };
  }, [data7DaysWidth, data7DaysPadding]);

  const monStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: monFontSize,
    };
  }, [monFontSize]);

  const tueStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: tueFontSize,
    };
  }, [tueFontSize]);

  const wedStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: wedFontSize,
    };
  }, [wedFontSize]);

  const thuStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: thuFontSize,
    };
  }, [thuFontSize]);

  const friStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: friFontSize,
    };
  }, [friFontSize]);

  const satStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: satFontSize,
    };
  }, [satFontSize]);

  const sunStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: sunFontSize,
    };
  }, [sunFontSize]);

  return (
    <div
      className="w-[655px] flex flex-row items-center justify-between py-0 px-6 box-border text-center text-3xs text-black font-inter-body-14-semibold"
      style={data7DaysStyle}
    >
      <div className="flex-1 relative" style={monStyle}>
        Mon
      </div>
      <div className="flex-1 relative" style={tueStyle}>
        Tue
      </div>
      <div className="flex-1 relative" style={wedStyle}>
        Wed
      </div>
      <div className="flex-1 relative" style={thuStyle}>
        Thu
      </div>
      <div className="flex-1 relative" style={friStyle}>
        Fri
      </div>
      <div className="flex-1 relative" style={satStyle}>
        Sat
      </div>
      <div className="flex-1 relative" style={sunStyle}>
        Sun
      </div>
    </div>
  );
};

export default Data7Days;
