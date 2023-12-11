import { FunctionComponent, useMemo, type CSSProperties } from "react";

type IconOnlyFalseDefaultFalseType = {
  logoIcon?: string;
  alignLeft?: string;
  navIcon?: string;
  navIcon1?: string;
  chevronUp?: string;
  navIcon2?: string;
  navIcon3?: string;
  navIcon4?: string;
  navIcon5?: string;
  avatar?: string;
  logOut?: string;
  updateCount?: boolean;
  dropdown?: boolean;

  /** Style props */
  iconOnlyFalseDefaultFalseBorderRight?: CSSProperties["borderRight"];
  iconOnlyFalseDefaultFalseHeight?: CSSProperties["height"];
  iconOnlyFalseDefaultFalsePadding?: CSSProperties["padding"];
  iconOnlyFalseDefaultFalsePosition?: CSSProperties["position"];
  iconOnlyFalseDefaultFalseTop?: CSSProperties["top"];
  iconOnlyFalseDefaultFalseLeft?: CSSProperties["left"];
  containerHeight?: CSSProperties["height"];
  logoActionsGap?: CSSProperties["gap"];
  logoWidth?: CSSProperties["width"];
  logoPadding?: CSSProperties["padding"];
  logoGap?: CSSProperties["gap"];
  logoIconWidth?: CSSProperties["width"];
  logoIconHeight?: CSSProperties["height"];
  grovioFontSize?: CSSProperties["fontSize"];
  exportTop?: CSSProperties["top"];
  exportLeft?: CSSProperties["left"];
  exportPadding?: CSSProperties["padding"];
  alignLeftIconWidth?: CSSProperties["width"];
  alignLeftIconHeight?: CSSProperties["height"];
  actionsWidth?: CSSProperties["width"];
  actionsGap?: CSSProperties["gap"];
  navItemWidth?: CSSProperties["width"];
  navItemPadding?: CSSProperties["padding"];
  navItemGap?: CSSProperties["gap"];
  titleWidth?: CSSProperties["width"];
  titleGap?: CSSProperties["gap"];
  navIconWidth?: CSSProperties["width"];
  navIconHeight?: CSSProperties["height"];
  notificationsFontSize?: CSSProperties["fontSize"];
  updateCountPadding?: CSSProperties["padding"];
  divFontSize?: CSSProperties["fontSize"];
  divLineHeight?: CSSProperties["lineHeight"];
  blankWidth?: CSSProperties["width"];
  blankHeight?: CSSProperties["height"];
  navDropdownItemWidth?: CSSProperties["width"];
  navDropdownItemGap?: CSSProperties["gap"];
  navItemPadding1?: CSSProperties["padding"];
  navItemGap1?: CSSProperties["gap"];
  titleWidth1?: CSSProperties["width"];
  titleGap1?: CSSProperties["gap"];
  navIconWidth1?: CSSProperties["width"];
  navIconHeight1?: CSSProperties["height"];
  notificationsFontSize1?: CSSProperties["fontSize"];
  updateCountPadding1?: CSSProperties["padding"];
  divFontSize1?: CSSProperties["fontSize"];
  divLineHeight1?: CSSProperties["lineHeight"];
  chevronUpIconWidth?: CSSProperties["width"];
  chevronUpIconHeight?: CSSProperties["height"];
  navItemNavDropdownItemPadding?: CSSProperties["padding"];
  navItemNavDropdownItemGap?: CSSProperties["gap"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
  membersFontSize?: CSSProperties["fontSize"];
  membersLineHeight?: CSSProperties["lineHeight"];
  membersWidth?: CSSProperties["width"];
  navItemNavDropdownItemPadding1?: CSSProperties["padding"];
  navItemNavDropdownItemGap1?: CSSProperties["gap"];
  frameDivWidth2?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
  frameDivWidth3?: CSSProperties["width"];
  frameDivHeight3?: CSSProperties["height"];
  membersFontSize1?: CSSProperties["fontSize"];
  membersLineHeight1?: CSSProperties["lineHeight"];
  membersWidth1?: CSSProperties["width"];
  navItemNavDropdownItemPadding2?: CSSProperties["padding"];
  navItemNavDropdownItemGap2?: CSSProperties["gap"];
  frameDivWidth4?: CSSProperties["width"];
  frameDivHeight4?: CSSProperties["height"];
  frameDivWidth5?: CSSProperties["width"];
  frameDivHeight5?: CSSProperties["height"];
  membersFontSize2?: CSSProperties["fontSize"];
  membersLineHeight2?: CSSProperties["lineHeight"];
  membersWidth2?: CSSProperties["width"];
  membersFontWeight?: CSSProperties["fontWeight"];
  navItemPadding2?: CSSProperties["padding"];
  navItemGap2?: CSSProperties["gap"];
  titleWidth2?: CSSProperties["width"];
  titleGap2?: CSSProperties["gap"];
  navIconWidth2?: CSSProperties["width"];
  navIconHeight2?: CSSProperties["height"];
  notificationsFontSize2?: CSSProperties["fontSize"];
  updateCountPadding2?: CSSProperties["padding"];
  divFontSize2?: CSSProperties["fontSize"];
  divLineHeight2?: CSSProperties["lineHeight"];
  blankWidth1?: CSSProperties["width"];
  blankHeight1?: CSSProperties["height"];
  navItemPadding3?: CSSProperties["padding"];
  navItemGap3?: CSSProperties["gap"];
  titleWidth3?: CSSProperties["width"];
  titleGap3?: CSSProperties["gap"];
  navIconWidth3?: CSSProperties["width"];
  navIconHeight3?: CSSProperties["height"];
  notificationsFontSize3?: CSSProperties["fontSize"];
  updateCountPadding3?: CSSProperties["padding"];
  divFontSize3?: CSSProperties["fontSize"];
  divLineHeight3?: CSSProperties["lineHeight"];
  blankWidth2?: CSSProperties["width"];
  blankHeight2?: CSSProperties["height"];
  navItemWidth1?: CSSProperties["width"];
  navItemPadding4?: CSSProperties["padding"];
  navItemGap4?: CSSProperties["gap"];
  titleWidth4?: CSSProperties["width"];
  titleGap4?: CSSProperties["gap"];
  navIconWidth4?: CSSProperties["width"];
  navIconHeight4?: CSSProperties["height"];
  notificationsFontSize4?: CSSProperties["fontSize"];
  updateCountPadding4?: CSSProperties["padding"];
  divFontSize4?: CSSProperties["fontSize"];
  divLineHeight4?: CSSProperties["lineHeight"];
  blankWidth3?: CSSProperties["width"];
  blankHeight3?: CSSProperties["height"];
  navItemPadding5?: CSSProperties["padding"];
  navItemGap5?: CSSProperties["gap"];
  titleWidth5?: CSSProperties["width"];
  titleGap5?: CSSProperties["gap"];
  navIconWidth5?: CSSProperties["width"];
  navIconHeight5?: CSSProperties["height"];
  notificationsFontSize5?: CSSProperties["fontSize"];
  updateCountPadding5?: CSSProperties["padding"];
  divFontSize5?: CSSProperties["fontSize"];
  divLineHeight5?: CSSProperties["lineHeight"];
  blankWidth4?: CSSProperties["width"];
  blankHeight4?: CSSProperties["height"];
  profileWidth?: CSSProperties["width"];
  profilePadding?: CSSProperties["padding"];
  profileGap?: CSSProperties["gap"];
  frameDivGap?: CSSProperties["gap"];
  avatarIconWidth?: CSSProperties["width"];
  avatarIconHeight?: CSSProperties["height"];
  nameEmailGap?: CSSProperties["gap"];
  nameFontSize?: CSSProperties["fontSize"];
  eMailFontSize?: CSSProperties["fontSize"];
  eMailLineHeight?: CSSProperties["lineHeight"];
  logOutIconWidth?: CSSProperties["width"];
  logOutIconHeight?: CSSProperties["height"];
};

const IconOnlyFalseDefaultFalse: FunctionComponent<
  IconOnlyFalseDefaultFalseType
> = ({
  logoIcon,
  alignLeft,
  navIcon,
  navIcon1,
  chevronUp,
  navIcon2,
  navIcon3,
  navIcon4,
  navIcon5,
  avatar,
  logOut,
  iconOnlyFalseDefaultFalseBorderRight,
  iconOnlyFalseDefaultFalseHeight,
  iconOnlyFalseDefaultFalsePadding,
  iconOnlyFalseDefaultFalsePosition,
  iconOnlyFalseDefaultFalseTop,
  iconOnlyFalseDefaultFalseLeft,
  containerHeight,
  logoActionsGap,
  logoWidth,
  logoPadding,
  logoGap,
  logoIconWidth,
  logoIconHeight,
  grovioFontSize,
  exportTop,
  exportLeft,
  exportPadding,
  alignLeftIconWidth,
  alignLeftIconHeight,
  actionsWidth,
  actionsGap,
  navItemWidth,
  navItemPadding,
  navItemGap,
  titleWidth,
  titleGap,
  navIconWidth,
  navIconHeight,
  notificationsFontSize,
  updateCountPadding,
  divFontSize,
  divLineHeight,
  blankWidth,
  blankHeight,
  navDropdownItemWidth,
  navDropdownItemGap,
  navItemPadding1,
  navItemGap1,
  titleWidth1,
  titleGap1,
  navIconWidth1,
  navIconHeight1,
  notificationsFontSize1,
  updateCountPadding1,
  divFontSize1,
  divLineHeight1,
  chevronUpIconWidth,
  chevronUpIconHeight,
  navItemNavDropdownItemPadding,
  navItemNavDropdownItemGap,
  frameDivWidth,
  frameDivHeight,
  frameDivWidth1,
  frameDivHeight1,
  membersFontSize,
  membersLineHeight,
  membersWidth,
  navItemNavDropdownItemPadding1,
  navItemNavDropdownItemGap1,
  frameDivWidth2,
  frameDivHeight2,
  frameDivWidth3,
  frameDivHeight3,
  membersFontSize1,
  membersLineHeight1,
  membersWidth1,
  navItemNavDropdownItemPadding2,
  navItemNavDropdownItemGap2,
  frameDivWidth4,
  frameDivHeight4,
  frameDivWidth5,
  frameDivHeight5,
  membersFontSize2,
  membersLineHeight2,
  membersWidth2,
  membersFontWeight,
  navItemPadding2,
  navItemGap2,
  titleWidth2,
  titleGap2,
  navIconWidth2,
  navIconHeight2,
  notificationsFontSize2,
  updateCountPadding2,
  divFontSize2,
  divLineHeight2,
  blankWidth1,
  blankHeight1,
  navItemPadding3,
  navItemGap3,
  titleWidth3,
  titleGap3,
  navIconWidth3,
  navIconHeight3,
  notificationsFontSize3,
  updateCountPadding3,
  divFontSize3,
  divLineHeight3,
  blankWidth2,
  blankHeight2,
  navItemWidth1,
  navItemPadding4,
  navItemGap4,
  titleWidth4,
  titleGap4,
  navIconWidth4,
  navIconHeight4,
  notificationsFontSize4,
  updateCountPadding4,
  divFontSize4,
  divLineHeight4,
  blankWidth3,
  blankHeight3,
  navItemPadding5,
  navItemGap5,
  titleWidth5,
  titleGap5,
  navIconWidth5,
  navIconHeight5,
  notificationsFontSize5,
  updateCountPadding5,
  divFontSize5,
  divLineHeight5,
  blankWidth4,
  blankHeight4,
  profileWidth,
  profilePadding,
  profileGap,
  frameDivGap,
  avatarIconWidth,
  avatarIconHeight,
  nameEmailGap,
  nameFontSize,
  eMailFontSize,
  eMailLineHeight,
  logOutIconWidth,
  logOutIconHeight,
  updateCount,
  dropdown,
}) => {
  const iconOnlyFalseDefaultFalseStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: iconOnlyFalseDefaultFalseBorderRight,
      height: iconOnlyFalseDefaultFalseHeight,
      padding: iconOnlyFalseDefaultFalsePadding,
      position: iconOnlyFalseDefaultFalsePosition,
      top: iconOnlyFalseDefaultFalseTop,
      left: iconOnlyFalseDefaultFalseLeft,
    };
  }, [
    iconOnlyFalseDefaultFalseBorderRight,
    iconOnlyFalseDefaultFalseHeight,
    iconOnlyFalseDefaultFalsePadding,
    iconOnlyFalseDefaultFalsePosition,
    iconOnlyFalseDefaultFalseTop,
    iconOnlyFalseDefaultFalseLeft,
  ]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      height: containerHeight,
    };
  }, [containerHeight]);

  const logoActionsStyle: CSSProperties = useMemo(() => {
    return {
      gap: logoActionsGap,
    };
  }, [logoActionsGap]);

  const logoStyle: CSSProperties = useMemo(() => {
    return {
      width: logoWidth,
      padding: logoPadding,
      gap: logoGap,
    };
  }, [logoWidth, logoPadding, logoGap]);

  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logoIconWidth,
      height: logoIconHeight,
    };
  }, [logoIconWidth, logoIconHeight]);

  const grovioStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: grovioFontSize,
    };
  }, [grovioFontSize]);

  const exportStyle: CSSProperties = useMemo(() => {
    return {
      top: exportTop,
      left: exportLeft,
      padding: exportPadding,
    };
  }, [exportTop, exportLeft, exportPadding]);

  const alignLeftIconStyle: CSSProperties = useMemo(() => {
    return {
      width: alignLeftIconWidth,
      height: alignLeftIconHeight,
    };
  }, [alignLeftIconWidth, alignLeftIconHeight]);

  const actionsStyle: CSSProperties = useMemo(() => {
    return {
      width: actionsWidth,
      gap: actionsGap,
    };
  }, [actionsWidth, actionsGap]);

  const navItemStyle: CSSProperties = useMemo(() => {
    return {
      width: navItemWidth,
      padding: navItemPadding,
      gap: navItemGap,
    };
  }, [navItemWidth, navItemPadding, navItemGap]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: titleWidth,
      gap: titleGap,
    };
  }, [titleWidth, titleGap]);

  const navIconStyle: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth,
      height: navIconHeight,
    };
  }, [navIconWidth, navIconHeight]);

  const notificationsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize,
    };
  }, [notificationsFontSize]);

  const updateCountStyle: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding,
    };
  }, [updateCountPadding]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  const blankStyle: CSSProperties = useMemo(() => {
    return {
      width: blankWidth,
      height: blankHeight,
    };
  }, [blankWidth, blankHeight]);

  const navDropdownItemStyle: CSSProperties = useMemo(() => {
    return {
      width: navDropdownItemWidth,
      gap: navDropdownItemGap,
    };
  }, [navDropdownItemWidth, navDropdownItemGap]);

  const navItem1Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding1,
      gap: navItemGap1,
    };
  }, [navItemPadding1, navItemGap1]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth1,
      gap: titleGap1,
    };
  }, [titleWidth1, titleGap1]);

  const navIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth1,
      height: navIconHeight1,
    };
  }, [navIconWidth1, navIconHeight1]);

  const notifications1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize1,
    };
  }, [notificationsFontSize1]);

  const updateCount1Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding1,
    };
  }, [updateCountPadding1]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize1,
      lineHeight: divLineHeight1,
    };
  }, [divFontSize1, divLineHeight1]);

  const chevronUpIconStyle: CSSProperties = useMemo(() => {
    return {
      width: chevronUpIconWidth,
      height: chevronUpIconHeight,
    };
  }, [chevronUpIconWidth, chevronUpIconHeight]);

  const navItemNavDropdownItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding,
      gap: navItemNavDropdownItemGap,
    };
  }, [navItemNavDropdownItemPadding, navItemNavDropdownItemGap]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivWidth1, frameDivHeight1]);

  const membersStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize,
      lineHeight: membersLineHeight,
      width: membersWidth,
    };
  }, [membersFontSize, membersLineHeight, membersWidth]);

  const navItemNavDropdownItem1Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding1,
      gap: navItemNavDropdownItemGap1,
    };
  }, [navItemNavDropdownItemPadding1, navItemNavDropdownItemGap1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivWidth2, frameDivHeight2]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth3,
      height: frameDivHeight3,
    };
  }, [frameDivWidth3, frameDivHeight3]);

  const members1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize1,
      lineHeight: membersLineHeight1,
      width: membersWidth1,
    };
  }, [membersFontSize1, membersLineHeight1, membersWidth1]);

  const navItemNavDropdownItem2Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding2,
      gap: navItemNavDropdownItemGap2,
    };
  }, [navItemNavDropdownItemPadding2, navItemNavDropdownItemGap2]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth4,
      height: frameDivHeight4,
    };
  }, [frameDivWidth4, frameDivHeight4]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth5,
      height: frameDivHeight5,
    };
  }, [frameDivWidth5, frameDivHeight5]);

  const members2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize2,
      lineHeight: membersLineHeight2,
      width: membersWidth2,
      fontWeight: membersFontWeight,
    };
  }, [membersFontSize2, membersLineHeight2, membersWidth2, membersFontWeight]);

  const navItem2Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding2,
      gap: navItemGap2,
    };
  }, [navItemPadding2, navItemGap2]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth2,
      gap: titleGap2,
    };
  }, [titleWidth2, titleGap2]);

  const navIcon2Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth2,
      height: navIconHeight2,
    };
  }, [navIconWidth2, navIconHeight2]);

  const notifications2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize2,
    };
  }, [notificationsFontSize2]);

  const updateCount2Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding2,
    };
  }, [updateCountPadding2]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize2,
      lineHeight: divLineHeight2,
    };
  }, [divFontSize2, divLineHeight2]);

  const blank1Style: CSSProperties = useMemo(() => {
    return {
      width: blankWidth1,
      height: blankHeight1,
    };
  }, [blankWidth1, blankHeight1]);

  const navItem3Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding3,
      gap: navItemGap3,
    };
  }, [navItemPadding3, navItemGap3]);

  const title3Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth3,
      gap: titleGap3,
    };
  }, [titleWidth3, titleGap3]);

  const navIcon3Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth3,
      height: navIconHeight3,
    };
  }, [navIconWidth3, navIconHeight3]);

  const notifications3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize3,
    };
  }, [notificationsFontSize3]);

  const updateCount3Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding3,
    };
  }, [updateCountPadding3]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize3,
      lineHeight: divLineHeight3,
    };
  }, [divFontSize3, divLineHeight3]);

  const blank2Style: CSSProperties = useMemo(() => {
    return {
      width: blankWidth2,
      height: blankHeight2,
    };
  }, [blankWidth2, blankHeight2]);

  const navItem4Style: CSSProperties = useMemo(() => {
    return {
      width: navItemWidth1,
      padding: navItemPadding4,
      gap: navItemGap4,
    };
  }, [navItemWidth1, navItemPadding4, navItemGap4]);

  const title4Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth4,
      gap: titleGap4,
    };
  }, [titleWidth4, titleGap4]);

  const navIcon4Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth4,
      height: navIconHeight4,
    };
  }, [navIconWidth4, navIconHeight4]);

  const notifications4Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize4,
    };
  }, [notificationsFontSize4]);

  const updateCount4Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding4,
    };
  }, [updateCountPadding4]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize4,
      lineHeight: divLineHeight4,
    };
  }, [divFontSize4, divLineHeight4]);

  const blank3Style: CSSProperties = useMemo(() => {
    return {
      width: blankWidth3,
      height: blankHeight3,
    };
  }, [blankWidth3, blankHeight3]);

  const navItem5Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding5,
      gap: navItemGap5,
    };
  }, [navItemPadding5, navItemGap5]);

  const title5Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth5,
      gap: titleGap5,
    };
  }, [titleWidth5, titleGap5]);

  const navIcon5Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth5,
      height: navIconHeight5,
    };
  }, [navIconWidth5, navIconHeight5]);

  const notifications5Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize5,
    };
  }, [notificationsFontSize5]);

  const updateCount5Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding5,
    };
  }, [updateCountPadding5]);

  const div5Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize5,
      lineHeight: divLineHeight5,
    };
  }, [divFontSize5, divLineHeight5]);

  const blank4Style: CSSProperties = useMemo(() => {
    return {
      width: blankWidth4,
      height: blankHeight4,
    };
  }, [blankWidth4, blankHeight4]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      width: profileWidth,
      padding: profilePadding,
      gap: profileGap,
    };
  }, [profileWidth, profilePadding, profileGap]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const avatarIconStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarIconWidth,
      height: avatarIconHeight,
    };
  }, [avatarIconWidth, avatarIconHeight]);

  const nameEmailStyle: CSSProperties = useMemo(() => {
    return {
      gap: nameEmailGap,
    };
  }, [nameEmailGap]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: nameFontSize,
    };
  }, [nameFontSize]);

  const eMailStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: eMailFontSize,
      lineHeight: eMailLineHeight,
    };
  }, [eMailFontSize, eMailLineHeight]);

  const logOutIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logOutIconWidth,
      height: logOutIconHeight,
    };
  }, [logOutIconWidth, logOutIconHeight]);

  return (
    <div
      className="bg-base-white box-border h-[940.64px] flex flex-col items-start justify-between p-4 text-left text-[27.89px] text-colors-text-title-primary-text font-raleway border-r-[1px] border-solid border-colors-border-radius-primary-border-radius"
      style={iconOnlyFalseDefaultFalseStyle}
    >
      <div
        className="h-[678.64px] flex flex-col items-start justify-between"
        style={containerStyle}
      >
        <div
          className="flex flex-col items-start justify-start gap-[24px]"
          style={logoActionsStyle}
        >
          <div
            className="bg-base-white w-64 flex flex-row items-center justify-start py-3 px-spacing-space-8 box-border relative gap-[12px]"
            style={logoStyle}
          >
            <img
              className="relative rounded-[7.97px] w-[39.84px] h-[39.84px] overflow-hidden shrink-0 z-[0]"
              alt=""
              src={logoIcon}
              style={logoIconStyle}
            />
            <div className="relative font-extrabold z-[1]" style={grovioStyle}>
              Grovio
            </div>
            <div
              className="my-0 mx-[!important] absolute top-[19.92px] left-[224px] rounded-border-radius-radius-6 bg-base-white flex flex-row items-start justify-start p-1.5 z-[2] border-[1px] border-solid border-colors-border-radius-primary-border-radius"
              style={exportStyle}
            >
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src={alignLeft}
                style={alignLeftIconStyle}
              />
            </div>
          </div>
          <div
            className="w-64 flex flex-col items-start justify-start gap-[4px] text-sm text-colors-text-title-secondary-text font-inter-body-14-semibold"
            style={actionsStyle}
          >
            <div
              className="bg-base-white w-64 flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 box-border gap-[8px]"
              style={navItemStyle}
            >
              <div
                className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
                style={titleStyle}
              >
                <img
                  className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
                  alt=""
                  src={navIcon}
                  style={navIconStyle}
                />
                <div
                  className="relative font-medium"
                  style={notificationsStyle}
                >
                  Home
                </div>
              </div>
              <div
                className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-0.5 px-1 border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                style={updateCountStyle}
              >
                <div className="relative leading-[18px]" style={divStyle}>
                  10
                </div>
              </div>
              <div
                className="relative w-6 h-6 overflow-hidden shrink-0"
                style={blankStyle}
              />
            </div>
            <div
              className="w-64 flex flex-col items-start justify-start gap-[6px] text-colors-text-title-primary-text"
              style={navDropdownItemStyle}
            >
              <div
                className="rounded-border-radius-radius-8 bg-color-gray-50 flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[8px] border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                style={navItem1Style}
              >
                <div
                  className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
                  style={title1Style}
                >
                  <img
                    className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
                    alt=""
                    src={navIcon1}
                    style={navIcon1Style}
                  />
                  <div
                    className="relative font-medium"
                    style={notifications1Style}
                  >
                    Analytics
                  </div>
                </div>
                <div
                  className="rounded-border-radius-radius-6 bg-color-gray-25 hidden flex-col items-start justify-start py-0.5 px-1 text-colors-text-title-secondary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                  style={updateCount1Style}
                >
                  <div className="relative leading-[18px]" style={div1Style}>
                    10
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src={chevronUp}
                  style={chevronUpIconStyle}
                />
              </div>
              <div className="flex flex-col items-start justify-start text-colors-text-title-secondary-text">
                <div
                  className="flex flex-row items-start justify-start py-2 pr-[92px] pl-[65px] gap-[7px]"
                  style={navItemNavDropdownItemStyle}
                >
                  <div
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    style={frameDivStyle}
                  >
                    <div
                      className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-700 w-2 h-2 overflow-hidden"
                      style={frameDiv1Style}
                    />
                  </div>
                  <div
                    className="relative leading-[18px] inline-block w-[117px] shrink-0"
                    style={membersStyle}
                  >
                    Members
                  </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start py-2 pr-[92px] pl-[65px] gap-[7px]"
                  style={navItemNavDropdownItem1Style}
                >
                  <div
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    style={frameDiv2Style}
                  >
                    <div
                      className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-500 w-2 h-2 overflow-hidden"
                      style={frameDiv3Style}
                    />
                  </div>
                  <div
                    className="relative leading-[18px] inline-block w-[117px] shrink-0"
                    style={members1Style}
                  >
                    Messages
                  </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start py-2 pr-[92px] pl-[65px] gap-[7px]"
                  style={navItemNavDropdownItem2Style}
                >
                  <div
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    style={frameDiv4Style}
                  >
                    <div
                      className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-300 w-2 h-2 overflow-hidden"
                      style={frameDiv5Style}
                    />
                  </div>
                  <div
                    className="relative leading-[18px] inline-block w-[117px] shrink-0"
                    style={members2Style}
                  >
                    Topics
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-base-white flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[8px]"
              style={navItem2Style}
            >
              <div
                className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
                style={title2Style}
              >
                <img
                  className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
                  alt=""
                  src={navIcon2}
                  style={navIcon2Style}
                />
                <div
                  className="relative font-medium"
                  style={notifications2Style}
                >
                  Communities
                </div>
              </div>
              <div
                className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-0.5 px-1 border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                style={updateCount2Style}
              >
                <div className="relative leading-[18px]" style={div2Style}>
                  10
                </div>
              </div>
              <div
                className="relative w-6 h-6 overflow-hidden shrink-0"
                style={blank1Style}
              />
            </div>
            <div
              className="bg-base-white flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[8px]"
              style={navItem3Style}
            >
              <div
                className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
                style={title3Style}
              >
                <img
                  className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
                  alt=""
                  src={navIcon3}
                  style={navIcon3Style}
                />
                <div
                  className="relative font-medium"
                  style={notifications3Style}
                >
                  Campaigns
                </div>
              </div>
              <div
                className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-0.5 px-1 border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                style={updateCount3Style}
              >
                <div className="relative leading-[18px]" style={div3Style}>
                  10
                </div>
              </div>
              <div
                className="relative w-6 h-6 overflow-hidden shrink-0"
                style={blank2Style}
              />
            </div>
            <div
              className="bg-base-white w-64 flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 box-border gap-[8px]"
              style={navItem4Style}
            >
              <div
                className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
                style={title4Style}
              >
                <img
                  className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
                  alt=""
                  src={navIcon4}
                  style={navIcon4Style}
                />
                <div
                  className="relative font-medium"
                  style={notifications4Style}
                >
                  Notifications
                </div>
              </div>
              <div
                className="rounded-border-radius-radius-6 bg-color-gray-50 flex flex-col items-start justify-start py-0.5 px-1 border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                style={updateCount4Style}
              >
                <div className="relative leading-[18px]" style={div4Style}>
                  10
                </div>
              </div>
              <div
                className="relative w-6 h-6 overflow-hidden shrink-0"
                style={blank3Style}
              />
            </div>
            <div
              className="bg-base-white flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[8px]"
              style={navItem5Style}
            >
              <div
                className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
                style={title5Style}
              >
                <img
                  className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
                  alt=""
                  src={navIcon5}
                  style={navIcon5Style}
                />
                <div
                  className="relative font-medium"
                  style={notifications5Style}
                >
                  Settings
                </div>
              </div>
              <div
                className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-0.5 px-1 border-[1px] border-solid border-colors-border-radius-primary-border-radius"
                style={updateCount5Style}
              >
                <div className="relative leading-[18px]" style={div5Style}>
                  10
                </div>
              </div>
              <div
                className="relative w-6 h-6 overflow-hidden shrink-0"
                style={blank4Style}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-border-radius-radius-16 bg-base-white box-border w-64 flex flex-row items-center justify-start p-4 gap-[24px] text-sm font-inter-body-14-semibold border-[1px] border-solid border-colors-border-radius-primary-border-radius"
        style={profileStyle}
      >
        <div
          className="flex flex-row items-center justify-start gap-[8px]"
          style={frameDiv6Style}
        >
          <img
            className="relative rounded-[10.32px] w-[42px] h-[42px] object-cover"
            alt=""
            src={avatar}
            style={avatarIconStyle}
          />
          <div
            className="flex flex-col items-start justify-start gap-[4px]"
            style={nameEmailStyle}
          >
            <div
              className="self-stretch relative font-medium"
              style={nameStyle}
            >
              Jack Finnigan
            </div>
            <div
              className="self-stretch relative text-xs leading-[16px] text-colors-text-body-primary-text overflow-hidden text-ellipsis whitespace-nowrap"
              style={eMailStyle}
            >
              jackfinnigan@grovio.x..
            </div>
          </div>
        </div>
        <img
          className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
          alt=""
          src={logOut}
          style={logOutIconStyle}
        />
      </div>
    </div>
  );
};

export default IconOnlyFalseDefaultFalse;
