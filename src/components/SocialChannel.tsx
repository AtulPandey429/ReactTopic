import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./SocialChannel.css";

type SocialChannelType = {
  social?: string;
  socialChannel?: string;

  /** Style props */
  socialChannelBorderRadius?: CSSProperties["borderRadius"];
  socialChannelPadding?: CSSProperties["padding"];
  socialChannelGap?: CSSProperties["gap"];
  socialChannelBackgroundColor?: CSSProperties["backgroundColor"];
  socialChannelHeight?: CSSProperties["height"];
  socialChannelBorder?: CSSProperties["border"];
  socialIconWidth?: CSSProperties["width"];
  socialIconHeight?: CSSProperties["height"];
  channelFontSize?: CSSProperties["fontSize"];
};

const SocialChannel: FunctionComponent<SocialChannelType> = ({
  social,
  socialChannel = "#general",
  socialChannelBorderRadius,
  socialChannelPadding,
  socialChannelGap,
  socialChannelBackgroundColor,
  socialChannelHeight,
  socialChannelBorder,
  socialIconWidth,
  socialIconHeight,
  channelFontSize,
}) => {
  const socialChannelStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: socialChannelBorderRadius,
      padding: socialChannelPadding,
      gap: socialChannelGap,
      backgroundColor: socialChannelBackgroundColor,
      height: socialChannelHeight,
      border: socialChannelBorder,
    };
  }, [
    socialChannelBorderRadius,
    socialChannelPadding,
    socialChannelGap,
    socialChannelBackgroundColor,
    socialChannelHeight,
    socialChannelBorder,
  ]);

  const socialIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: socialIconWidth,
      height: socialIconHeight,
    };
  }, [socialIconWidth, socialIconHeight]);

  const channelStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: channelFontSize,
    };
  }, [channelFontSize]);

  return (
    <div className="social-channel" style={socialChannelStyle}>
      <img
        className="social-icon2"
        alt=""
        src={social}
        style={socialIcon1Style}
      />
      <div className="channel" style={channelStyle}>
        {socialChannel}
      </div>
    </div>
  );
};

export default SocialChannel;
