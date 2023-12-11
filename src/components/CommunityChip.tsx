import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./CommunityChip.css";

type CommunityChipType = {
  social?: string;
  discord?: string;
  productIconClose?: string;

  /** Style props */
  communityChipHeight?: CSSProperties["height"];
  communityChipPadding?: CSSProperties["padding"];
  communityChipGap?: CSSProperties["gap"];
  socialNameGap?: CSSProperties["gap"];
  socialIconWidth?: CSSProperties["width"];
  socialIconHeight?: CSSProperties["height"];
  discordFontSize?: CSSProperties["fontSize"];
  productIconCloseWidth?: CSSProperties["width"];
  productIconCloseHeight?: CSSProperties["height"];
};

const CommunityChip: FunctionComponent<CommunityChipType> = ({
  social,
  discord,
  productIconClose,
  communityChipHeight,
  communityChipPadding,
  communityChipGap,
  socialNameGap,
  socialIconWidth,
  socialIconHeight,
  discordFontSize,
  productIconCloseWidth,
  productIconCloseHeight,
}) => {
  const communityChipStyle: CSSProperties = useMemo(() => {
    return {
      height: communityChipHeight,
      padding: communityChipPadding,
      gap: communityChipGap,
    };
  }, [communityChipHeight, communityChipPadding, communityChipGap]);

  const socialNameStyle: CSSProperties = useMemo(() => {
    return {
      gap: socialNameGap,
    };
  }, [socialNameGap]);

  const socialIconStyle: CSSProperties = useMemo(() => {
    return {
      width: socialIconWidth,
      height: socialIconHeight,
    };
  }, [socialIconWidth, socialIconHeight]);

  const discordStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: discordFontSize,
    };
  }, [discordFontSize]);

  const productIconCloseStyle: CSSProperties = useMemo(() => {
    return {
      width: productIconCloseWidth,
      height: productIconCloseHeight,
    };
  }, [productIconCloseWidth, productIconCloseHeight]);

  return (
    <div className="community-chip" style={communityChipStyle}>
      <div className="social-name" style={socialNameStyle}>
        <img
          className="product-iconclose"
          alt=""
          src={social}
          style={socialIconStyle}
        />
        <div className="discord" style={discordStyle}>
          {discord}
        </div>
      </div>
      <img
        className="product-iconclose"
        alt=""
        src={productIconClose}
        style={productIconCloseStyle}
      />
    </div>
  );
};

export default CommunityChip;
