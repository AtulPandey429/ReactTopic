import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CheckedNoIndeterminateNo from "./CheckedNoIndeterminateNo";
import "./TypeItem.css";

type TypeItemType = {
  affiliation?: string;

  /** Style props */
  typeItemWidth?: CSSProperties["width"];
  typeItemHeight?: CSSProperties["height"];
  typeItemPadding?: CSSProperties["padding"];
  typeItemGap?: CSSProperties["gap"];
  typeItemZIndex?: CSSProperties["zIndex"];
  typeItemBorderRadius?: CSSProperties["borderRadius"];
  checkboxWidth?: CSSProperties["width"];
  checkboxHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
  affiliationFontSize?: CSSProperties["fontSize"];
  affiliationLineHeight?: CSSProperties["lineHeight"];
};

const TypeItem: FunctionComponent<TypeItemType> = ({
  affiliation,
  typeItemWidth,
  typeItemHeight,
  typeItemPadding,
  typeItemGap,
  typeItemZIndex,
  typeItemBorderRadius,
  checkboxWidth,
  checkboxHeight,
  rectangleDivWidth,
  rectangleDivHeight,
  affiliationFontSize,
  affiliationLineHeight,
}) => {
  const typeItemStyle: CSSProperties = useMemo(() => {
    return {
      width: typeItemWidth,
      height: typeItemHeight,
      padding: typeItemPadding,
      gap: typeItemGap,
      zIndex: typeItemZIndex,
      borderRadius: typeItemBorderRadius,
    };
  }, [
    typeItemWidth,
    typeItemHeight,
    typeItemPadding,
    typeItemGap,
    typeItemZIndex,
    typeItemBorderRadius,
  ]);

  const checkedNoIndeterminateNoStyle: CSSProperties = useMemo(() => {
    return {
      width: checkboxWidth,
      height: checkboxHeight,
    };
  }, [checkboxWidth, checkboxHeight]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [rectangleDivWidth, rectangleDivHeight]);

  const affiliationStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: affiliationFontSize,
      lineHeight: affiliationLineHeight,
    };
  }, [affiliationFontSize, affiliationLineHeight]);

  return (
    <div className="typeitem" style={typeItemStyle}>
      <CheckedNoIndeterminateNo
        checkedNoIndeterminateNoPosition="relative"
        checkedNoIndeterminateNoFlexShrink="0"
        checkedNoIndeterminateNoWidth="24px"
        checkedNoIndeterminateNoHeight="24px"
        rectangleDivWidth="16px"
        rectangleDivHeight="16px"
      />
      <div className="affiliation" style={affiliationStyle}>
        {affiliation}
      </div>
    </div>
  );
};

export default TypeItem;
