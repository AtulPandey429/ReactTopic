import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefault4.css";

type StateDefault4Type = {
  strikethrough?: string;

  /** Style props */
  stateDefaultPadding?: CSSProperties["padding"];
  strikethroughIconWidth?: CSSProperties["width"];
  strikethroughIconHeight?: CSSProperties["height"];
};

const StateDefault4: FunctionComponent<StateDefault4Type> = ({
  strikethrough,
  stateDefaultPadding,
  strikethroughIconWidth,
  strikethroughIconHeight,
}) => {
  const stateDefault4Style: CSSProperties = useMemo(() => {
    return {
      padding: stateDefaultPadding,
    };
  }, [stateDefaultPadding]);

  const strikethroughIconStyle: CSSProperties = useMemo(() => {
    return {
      width: strikethroughIconWidth,
      height: strikethroughIconHeight,
    };
  }, [strikethroughIconWidth, strikethroughIconHeight]);

  return (
    <div className="statedefault4" style={stateDefault4Style}>
      <img
        className="strikethrough-icon"
        alt=""
        src={strikethrough}
        style={strikethroughIconStyle}
      />
    </div>
  );
};

export default StateDefault4;
