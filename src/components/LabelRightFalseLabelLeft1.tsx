import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./LabelRightFalseLabelLeft1.css";

type LabelRightFalseLabelLeft1Type = {
  prop?: string;

  /** Style props */
  labelRightFalseLabelLeftWidth?: CSSProperties["width"];
  labelRightFalseLabelLeftGap?: CSSProperties["gap"];
  labelRightFalseLabelLeftAlignSelf?: CSSProperties["alignSelf"];
  divFontSize?: CSSProperties["fontSize"];
  divWidth?: CSSProperties["width"];
  lineDivBorderTop?: CSSProperties["borderTop"];
  lineDivHeight?: CSSProperties["height"];
};

const LabelRightFalseLabelLeft1: FunctionComponent<
  LabelRightFalseLabelLeft1Type
> = ({
  prop,
  labelRightFalseLabelLeftWidth,
  labelRightFalseLabelLeftGap,
  labelRightFalseLabelLeftAlignSelf,
  divFontSize,
  divWidth,
  lineDivBorderTop,
  lineDivHeight,
}) => {
  const labelRightFalseLabelLeft1Style: CSSProperties = useMemo(() => {
    return {
      width: labelRightFalseLabelLeftWidth,
      gap: labelRightFalseLabelLeftGap,
      alignSelf: labelRightFalseLabelLeftAlignSelf,
    };
  }, [
    labelRightFalseLabelLeftWidth,
    labelRightFalseLabelLeftGap,
    labelRightFalseLabelLeftAlignSelf,
  ]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
      width: divWidth,
    };
  }, [divFontSize, divWidth]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: lineDivBorderTop,
      height: lineDivHeight,
    };
  }, [lineDivBorderTop, lineDivHeight]);

  return (
    <div
      className="label-rightfalse-label-left1"
      style={labelRightFalseLabelLeft1Style}
    >
      <div className="div7" style={div6Style}>
        {prop}
      </div>
      <div className="label-rightfalse-label-left-child" style={lineDivStyle} />
    </div>
  );
};

export default LabelRightFalseLabelLeft1;
