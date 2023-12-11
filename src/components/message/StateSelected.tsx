import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateSelected.css";

type StateSelectedType = {
  italic?: string;

  /** Style props */
  stateSelectedPadding?: CSSProperties["padding"];
  italicIconWidth?: CSSProperties["width"];
  italicIconHeight?: CSSProperties["height"];
};

const StateSelected: FunctionComponent<StateSelectedType> = ({
  italic,
  stateSelectedPadding,
  italicIconWidth,
  italicIconHeight,
}) => {
  const stateSelectedStyle: CSSProperties = useMemo(() => {
    return {
      padding: stateSelectedPadding,
    };
  }, [stateSelectedPadding]);

  const italicIconStyle: CSSProperties = useMemo(() => {
    return {
      width: italicIconWidth,
      height: italicIconHeight,
    };
  }, [italicIconWidth, italicIconHeight]);

  return (
    <div className="stateselected" style={stateSelectedStyle}>
      <img
        className="italic-icon"
        alt=""
        src={italic}
        style={italicIconStyle}
      />
    </div>
  );
};

export default StateSelected;
