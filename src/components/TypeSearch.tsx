import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TypeSearch.css";

type TypeSearchType = {
  search?: string;
  searchSm?: string;
  vector6?: string;

  /** Style props */
  typeSearchBorderBottom?: CSSProperties["borderBottom"];
  typeSearchHeight?: CSSProperties["height"];
  typeSearchPadding?: CSSProperties["padding"];
  typeSearchBorderRadius?: CSSProperties["borderRadius"];
  searchFontSize?: CSSProperties["fontSize"];
  searchLineHeight?: CSSProperties["lineHeight"];
  searchColor?: CSSProperties["color"];
  searchSmIconWidth?: CSSProperties["width"];
  searchSmIconHeight?: CSSProperties["height"];
  vectorIconTop?: CSSProperties["top"];
  vectorIconLeft?: CSSProperties["left"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
};

const TypeSearch: FunctionComponent<TypeSearchType> = ({
  search,
  searchSm,
  vector6,
  typeSearchBorderBottom,
  typeSearchHeight,
  typeSearchPadding,
  typeSearchBorderRadius,
  searchFontSize,
  searchLineHeight,
  searchColor,
  searchSmIconWidth,
  searchSmIconHeight,
  vectorIconTop,
  vectorIconLeft,
  vectorIconWidth,
  vectorIconHeight,
}) => {
  const typeSearchStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: typeSearchBorderBottom,
      height: typeSearchHeight,
      padding: typeSearchPadding,
      borderRadius: typeSearchBorderRadius,
    };
  }, [
    typeSearchBorderBottom,
    typeSearchHeight,
    typeSearchPadding,
    typeSearchBorderRadius,
  ]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: searchFontSize,
      lineHeight: searchLineHeight,
      color: searchColor,
    };
  }, [searchFontSize, searchLineHeight, searchColor]);

  const searchSmIconStyle: CSSProperties = useMemo(() => {
    return {
      width: searchSmIconWidth,
      height: searchSmIconHeight,
    };
  }, [searchSmIconWidth, searchSmIconHeight]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      top: vectorIconTop,
      left: vectorIconLeft,
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconTop, vectorIconLeft, vectorIconWidth, vectorIconHeight]);

  return (
    <div className="typesearch" style={typeSearchStyle}>
      <div className="search" style={searchStyle}>
        {search}
      </div>
      <img
        className="search-sm-icon"
        alt=""
        src={searchSm}
        style={searchSmIconStyle}
      />
      <img
        className="typesearch-child"
        alt=""
        src={vector6}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default TypeSearch;
