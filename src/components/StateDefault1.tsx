import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefault1.css";

type StateDefault1Type = {
  code?: string;

  /** Style props */
  stateDefaultPadding?: CSSProperties["padding"];
  codeIconWidth?: CSSProperties["width"];
  codeIconHeight?: CSSProperties["height"];
};

const StateDefault1: FunctionComponent<StateDefault1Type> = ({
  code,
  stateDefaultPadding,
  codeIconWidth,
  codeIconHeight,
}) => {
  const stateDefault1Style: CSSProperties = useMemo(() => {
    return {
      padding: stateDefaultPadding,
    };
  }, [stateDefaultPadding]);

  const codeIconStyle: CSSProperties = useMemo(() => {
    return {
      width: codeIconWidth,
      height: codeIconHeight,
    };
  }, [codeIconWidth, codeIconHeight]);

  return (
    <div className="statedefault1" style={stateDefault1Style}>
      <img className="code-icon" alt="" src={code} style={codeIconStyle} />
    </div>
  );
};

export default StateDefault1;
