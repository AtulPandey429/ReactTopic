import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefault3.css";

type StateDefault3Type = {
  link?: string;

  /** Style props */
  stateDefaultPadding?: CSSProperties["padding"];
  linkIconWidth?: CSSProperties["width"];
  linkIconHeight?: CSSProperties["height"];
};

const StateDefault3: FunctionComponent<StateDefault3Type> = ({
  link,
  stateDefaultPadding,
  linkIconWidth,
  linkIconHeight,
}) => {
  const stateDefault3Style: CSSProperties = useMemo(() => {
    return {
      padding: stateDefaultPadding,
    };
  }, [stateDefaultPadding]);

  const linkIconStyle: CSSProperties = useMemo(() => {
    return {
      width: linkIconWidth,
      height: linkIconHeight,
    };
  }, [linkIconWidth, linkIconHeight]);

  return (
    <div className="statedefault3" style={stateDefault3Style}>
      <img className="link-icon" alt="" src={link} style={linkIconStyle} />
    </div>
  );
};

export default StateDefault3;
