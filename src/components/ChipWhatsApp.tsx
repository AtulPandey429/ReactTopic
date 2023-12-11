import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CommunityChip from "./CommunityChip";
import "./ChipWhatsApp.css";

type ChipWhatsAppType = {
  social?: string;
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

const ChipWhatsApp: FunctionComponent<ChipWhatsAppType> = ({
  social,
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
    <div className="chipwhatsapp">
      <CommunityChip
        social="/social6.svg"
        discord="WhatsApp"
        productIconClose="/product-iconclose1.svg"
        communityChipHeight="24px"
        communityChipPadding="4px 6px"
        communityChipGap="6px"
        socialNameGap="4px"
        socialIconWidth="14px"
        socialIconHeight="14px"
        discordFontSize="12px"
        productIconCloseWidth="14px"
        productIconCloseHeight="14px"
      />
    </div>
  );
};

export default ChipWhatsApp;
