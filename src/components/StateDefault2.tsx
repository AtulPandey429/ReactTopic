import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefault2.css";

type StateDefault2Type = {
  dotpoints?: string;

  /** Style props */
  stateDefaultPadding?: CSSProperties["padding"];
  dotpointsIconWidth?: CSSProperties["width"];
  dotpointsIconHeight?: CSSProperties["height"];
};

const StateDefault2: FunctionComponent<StateDefault2Type> = ({
  dotpoints,
  stateDefaultPadding,
  dotpointsIconWidth,
  dotpointsIconHeight,
}) => {
  const stateDefault2Style: CSSProperties = useMemo(() => {
    return {
      padding: stateDefaultPadding,
    };
  }, [stateDefaultPadding]);

  const dotpointsIconStyle: CSSProperties = useMemo(() => {
    return {
      width: dotpointsIconWidth,
      height: dotpointsIconHeight,
    };
  }, [dotpointsIconWidth, dotpointsIconHeight]);

  return (
    <div className="statedefault2" style={stateDefault2Style}>
      <img
        className="dotpoints-icon"
        alt=""
        src={dotpoints}
        style={dotpointsIconStyle}
      />
    </div>
  );
};

export default StateDefault2;
