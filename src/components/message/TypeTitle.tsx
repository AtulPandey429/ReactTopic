import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TypeTitle.css";

type TypeTitleType = {
  member?: string;

  /** Style props */
  typeTitleWidth?: CSSProperties["width"];
  typeTitlePadding?: CSSProperties["padding"];
  typeTitleZIndex?: CSSProperties["zIndex"];
  memberFontSize?: CSSProperties["fontSize"];
  memberLineHeight?: CSSProperties["lineHeight"];
  memberFontWeight?: CSSProperties["fontWeight"];
};

const TypeTitle: FunctionComponent<TypeTitleType> = ({
  member,
  typeTitleWidth,
  typeTitlePadding,
  typeTitleZIndex,
  memberFontSize,
  memberLineHeight,
  memberFontWeight,
}) => {
  const typeTitleStyle: CSSProperties = useMemo(() => {
    return {
      width: typeTitleWidth,
      padding: typeTitlePadding,
      zIndex: typeTitleZIndex,
    };
  }, [typeTitleWidth, typeTitlePadding, typeTitleZIndex]);

  const memberStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: memberFontSize,
      lineHeight: memberLineHeight,
      fontWeight: memberFontWeight,
    };
  }, [memberFontSize, memberLineHeight, memberFontWeight]);

  return (
    <div className="typetitle" style={typeTitleStyle}>
      <div className="member" style={memberStyle}>
        {member}
      </div>
    </div>
  );
};

export default TypeTitle;
