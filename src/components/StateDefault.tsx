import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefault.css";

type StateDefaultType = {
  download?: string;

  /** Style props */
  stateDefaultMargin?: CSSProperties["margin"];
  stateDefaultPosition?: CSSProperties["position"];
  stateDefaultTop?: CSSProperties["top"];
  stateDefaultLeft?: CSSProperties["left"];
  stateDefaultZIndex?: CSSProperties["zIndex"];
  stateDefaultPadding?: CSSProperties["padding"];
  downloadIconWidth?: CSSProperties["width"];
  downloadIconHeight?: CSSProperties["height"];
};

const StateDefault: FunctionComponent<StateDefaultType> = ({
  download,
  stateDefaultMargin,
  stateDefaultPosition,
  stateDefaultTop,
  stateDefaultLeft,
  stateDefaultZIndex,
  stateDefaultPadding,
  downloadIconWidth,
  downloadIconHeight,
}) => {
  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      margin: stateDefaultMargin,
      position: stateDefaultPosition,
      top: stateDefaultTop,
      left: stateDefaultLeft,
      zIndex: stateDefaultZIndex,
      padding: stateDefaultPadding,
    };
  }, [
    stateDefaultMargin,
    stateDefaultPosition,
    stateDefaultTop,
    stateDefaultLeft,
    stateDefaultZIndex,
    stateDefaultPadding,
  ]);

  const downloadIconStyle: CSSProperties = useMemo(() => {
    return {
      width: downloadIconWidth,
      height: downloadIconHeight,
    };
  }, [downloadIconWidth, downloadIconHeight]);

  return (
    <div className="statedefault" style={stateDefaultStyle}>
      <img
        className="download-icon"
        alt=""
        src={download}
        style={downloadIconStyle}
      />
    </div>
  );
};

export default StateDefault;
