import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StatesDefault.css";

type StatesDefaultType = {
  bold?: string;

  /** Style props */
  statesDefaultPadding?: CSSProperties["padding"];
  boldIconWidth?: CSSProperties["width"];
  boldIconHeight?: CSSProperties["height"];
};

const StatesDefault: FunctionComponent<StatesDefaultType> = ({
  bold,
  statesDefaultPadding,
  boldIconWidth,
  boldIconHeight,
}) => {
  const statesDefaultStyle: CSSProperties = useMemo(() => {
    return {
      padding: statesDefaultPadding,
    };
  }, [statesDefaultPadding]);

  const boldIconStyle: CSSProperties = useMemo(() => {
    return {
      width: boldIconWidth,
      height: boldIconHeight,
    };
  }, [boldIconWidth, boldIconHeight]);

  return (
    <div className="statesdefault" style={statesDefaultStyle}>
      <img className="bold-icon" alt="" src={bold} style={boldIconStyle} />
    </div>
  );
};

export default StatesDefault;
