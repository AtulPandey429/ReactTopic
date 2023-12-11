import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./CheckedNoIndeterminateNo.css";

type CheckedNoIndeterminateNoType = {
  /** Style props */
  checkedNoIndeterminateNoPosition?: CSSProperties["position"];
  checkedNoIndeterminateNoFlexShrink?: CSSProperties["flexShrink"];
  checkedNoIndeterminateNoWidth?: CSSProperties["width"];
  checkedNoIndeterminateNoHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
};

const CheckedNoIndeterminateNo: FunctionComponent<
  CheckedNoIndeterminateNoType
> = ({
  checkedNoIndeterminateNoPosition,
  checkedNoIndeterminateNoFlexShrink,
  checkedNoIndeterminateNoWidth,
  checkedNoIndeterminateNoHeight,
  rectangleDivWidth,
  rectangleDivHeight,
}) => {
  const checkedNoIndeterminateNoStyle: CSSProperties = useMemo(() => {
    return {
      position: checkedNoIndeterminateNoPosition,
      flexShrink: checkedNoIndeterminateNoFlexShrink,
      width: checkedNoIndeterminateNoWidth,
      height: checkedNoIndeterminateNoHeight,
    };
  }, [
    checkedNoIndeterminateNoPosition,
    checkedNoIndeterminateNoFlexShrink,
    checkedNoIndeterminateNoWidth,
    checkedNoIndeterminateNoHeight,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [rectangleDivWidth, rectangleDivHeight]);

  return (
    <div
      className="checkedno-indeterminateno"
      style={checkedNoIndeterminateNoStyle}
    >
      <div
        className="checkedno-indeterminateno-child"
        style={rectangleDivStyle}
      />
    </div>
  );
};

export default CheckedNoIndeterminateNo;
