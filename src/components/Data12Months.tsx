import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Data12Months.css";

type Data12MonthsType = {
  /** Style props */
  data12MonthsPadding?: CSSProperties["padding"];
  janFontSize?: CSSProperties["fontSize"];
  febFontSize?: CSSProperties["fontSize"];
  marFontSize?: CSSProperties["fontSize"];
  aprFontSize?: CSSProperties["fontSize"];
  mayFontSize?: CSSProperties["fontSize"];
  junFontSize?: CSSProperties["fontSize"];
  julFontSize?: CSSProperties["fontSize"];
  augFontSize?: CSSProperties["fontSize"];
  sepFontSize?: CSSProperties["fontSize"];
  octFontSize?: CSSProperties["fontSize"];
  novFontSize?: CSSProperties["fontSize"];
  decFontSize?: CSSProperties["fontSize"];
};

const Data12Months: FunctionComponent<Data12MonthsType> = ({
  data12MonthsPadding,
  janFontSize,
  febFontSize,
  marFontSize,
  aprFontSize,
  mayFontSize,
  junFontSize,
  julFontSize,
  augFontSize,
  sepFontSize,
  octFontSize,
  novFontSize,
  decFontSize,
}) => {
  const data12MonthsStyle: CSSProperties = useMemo(() => {
    return {
      padding: data12MonthsPadding,
    };
  }, [data12MonthsPadding]);

  const janStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: janFontSize,
    };
  }, [janFontSize]);

  const febStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: febFontSize,
    };
  }, [febFontSize]);

  const marStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: marFontSize,
    };
  }, [marFontSize]);

  const aprStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: aprFontSize,
    };
  }, [aprFontSize]);

  const mayStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: mayFontSize,
    };
  }, [mayFontSize]);

  const junStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: junFontSize,
    };
  }, [junFontSize]);

  const julStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: julFontSize,
    };
  }, [julFontSize]);

  const augStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: augFontSize,
    };
  }, [augFontSize]);

  const sepStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: sepFontSize,
    };
  }, [sepFontSize]);

  const octStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: octFontSize,
    };
  }, [octFontSize]);

  const novStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: novFontSize,
    };
  }, [novFontSize]);

  const decStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: decFontSize,
    };
  }, [decFontSize]);

  return (
    <div className="data12-months" style={data12MonthsStyle}>
      <div className="jan" style={janStyle}>
        Jan
      </div>
      <div className="jan" style={febStyle}>
        Feb
      </div>
      <div className="jan" style={marStyle}>
        Mar
      </div>
      <div className="jan" style={aprStyle}>
        Apr
      </div>
      <div className="jan" style={mayStyle}>
        May
      </div>
      <div className="jan" style={junStyle}>
        Jun
      </div>
      <div className="jan" style={julStyle}>
        Jul
      </div>
      <div className="jan" style={augStyle}>
        Aug
      </div>
      <div className="jan" style={sepStyle}>
        Sep
      </div>
      <div className="jan" style={octStyle}>
        Oct
      </div>
      <div className="jan" style={novStyle}>
        Nov
      </div>
      <div className="jan" style={decStyle}>
        Dec
      </div>
    </div>
  );
};

export default Data12Months;
