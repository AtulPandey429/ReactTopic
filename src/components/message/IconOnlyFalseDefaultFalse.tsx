import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1Details1 from "./Property1Details1";
import FormContainer from "./FormContainer";
import StateExtended from "./StateExtended";
import Property1Details from "./Property1Details";
import "./IconOnlyFalseDefaultFalse.css";

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
  membersFontWeight?: CSSProperties["fontWeight"];
  navItemNavDropdownItemPadding2?: CSSProperties["padding"];
  navItemNavDropdownItemGap2?: CSSProperties["gap"];
  frameDivWidth4?: CSSProperties["width"];
  frameDivHeight4?: CSSProperties["height"];
  frameDivWidth5?: CSSProperties["width"];
  frameDivHeight5?: CSSProperties["height"];
  membersFontSize2?: CSSProperties["fontSize"];
  membersLineHeight2?: CSSProperties["lineHeight"];
  membersWidth2?: CSSProperties["width"];
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
  membersFontWeight,
  navItemNavDropdownItemPadding2,
  navItemNavDropdownItemGap2,
  frameDivWidth4,
  frameDivHeight4,
  frameDivWidth5,
  frameDivHeight5,
  membersFontSize2,
  membersLineHeight2,
  membersWidth2,
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

  const property1DetailsStyle: CSSProperties = useMemo(() => {
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

  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      top: exportTop,
      left: exportLeft,
      padding: exportPadding,
    };
  }, [exportTop, exportLeft, exportPadding]);

  const downloadIconStyle: CSSProperties = useMemo(() => {
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

  const stateExtendedStyle: CSSProperties = useMemo(() => {
    return {
      width: navDropdownItemWidth,
      gap: navDropdownItemGap,
    };
  }, [navDropdownItemWidth, navDropdownItemGap]);

  const stateDefaultIconOnlyNoStyle: CSSProperties = useMemo(() => {
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

  const chevronDownIconStyle: CSSProperties = useMemo(() => {
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

  const navItemNavDropdownItemStyle1: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding1,
      gap: navItemNavDropdownItemGap1,
    };
  }, [navItemNavDropdownItemPadding1, navItemNavDropdownItemGap1]);

  const frameDivStyle1: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivWidth2, frameDivHeight2]);

  const frameDiv1Style1: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth3,
      height: frameDivHeight3,
    };
  }, [frameDivWidth3, frameDivHeight3]);

  const membersStyle1: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize1,
      lineHeight: membersLineHeight1,
      width: membersWidth1,
      fontWeight: membersFontWeight,
    };
  }, [membersFontSize1, membersLineHeight1, membersWidth1, membersFontWeight]);

  const navItemNavDropdownItemStyle2: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding2,
      gap: navItemNavDropdownItemGap2,
    };
  }, [navItemNavDropdownItemPadding2, navItemNavDropdownItemGap2]);

  const frameDivStyle2: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth4,
      height: frameDivHeight4,
    };
  }, [frameDivWidth4, frameDivHeight4]);

  const frameDiv1Style2: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth5,
      height: frameDivHeight5,
    };
  }, [frameDivWidth5, frameDivHeight5]);

  const membersStyle2: CSSProperties = useMemo(() => {
    return {
      fontSize: membersFontSize2,
      lineHeight: membersLineHeight2,
      width: membersWidth2,
    };
  }, [membersFontSize2, membersLineHeight2, membersWidth2]);

  const navItemStyle1: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding2,
      gap: navItemGap2,
    };
  }, [navItemPadding2, navItemGap2]);

  const titleStyle1: CSSProperties = useMemo(() => {
    return {
      width: titleWidth2,
      gap: titleGap2,
    };
  }, [titleWidth2, titleGap2]);

  const navIconStyle1: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth2,
      height: navIconHeight2,
    };
  }, [navIconWidth2, navIconHeight2]);

  const notificationsStyle1: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize2,
    };
  }, [notificationsFontSize2]);

  const updateCountStyle1: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding2,
    };
  }, [updateCountPadding2]);

  const divStyle1: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize2,
      lineHeight: divLineHeight2,
    };
  }, [divFontSize2, divLineHeight2]);

  const blankStyle1: CSSProperties = useMemo(() => {
    return {
      width: blankWidth1,
      height: blankHeight1,
    };
  }, [blankWidth1, blankHeight1]);

  const navItemStyle2: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding3,
      gap: navItemGap3,
    };
  }, [navItemPadding3, navItemGap3]);

  const titleStyle2: CSSProperties = useMemo(() => {
    return {
      width: titleWidth3,
      gap: titleGap3,
    };
  }, [titleWidth3, titleGap3]);

  const navIconStyle2: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth3,
      height: navIconHeight3,
    };
  }, [navIconWidth3, navIconHeight3]);

  const notificationsStyle2: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize3,
    };
  }, [notificationsFontSize3]);

  const updateCountStyle2: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding3,
    };
  }, [updateCountPadding3]);

  const divStyle2: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize3,
      lineHeight: divLineHeight3,
    };
  }, [divFontSize3, divLineHeight3]);

  const blankStyle2: CSSProperties = useMemo(() => {
    return {
      width: blankWidth2,
      height: blankHeight2,
    };
  }, [blankWidth2, blankHeight2]);

  const navItemStyle3: CSSProperties = useMemo(() => {
    return {
      width: navItemWidth1,
      padding: navItemPadding4,
      gap: navItemGap4,
    };
  }, [navItemWidth1, navItemPadding4, navItemGap4]);

  const titleStyle3: CSSProperties = useMemo(() => {
    return {
      width: titleWidth4,
      gap: titleGap4,
    };
  }, [titleWidth4, titleGap4]);

  const navIconStyle3: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth4,
      height: navIconHeight4,
    };
  }, [navIconWidth4, navIconHeight4]);

  const notificationsStyle3: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize4,
    };
  }, [notificationsFontSize4]);

  const updateCountStyle3: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding4,
    };
  }, [updateCountPadding4]);

  const divStyle3: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize4,
      lineHeight: divLineHeight4,
    };
  }, [divFontSize4, divLineHeight4]);

  const blankStyle3: CSSProperties = useMemo(() => {
    return {
      width: blankWidth3,
      height: blankHeight3,
    };
  }, [blankWidth3, blankHeight3]);

  const navItemStyle4: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding5,
      gap: navItemGap5,
    };
  }, [navItemPadding5, navItemGap5]);

  const titleStyle4: CSSProperties = useMemo(() => {
    return {
      width: titleWidth5,
      gap: titleGap5,
    };
  }, [titleWidth5, titleGap5]);

  const navIconStyle4: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth5,
      height: navIconHeight5,
    };
  }, [navIconWidth5, navIconHeight5]);

  const notificationsStyle4: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize5,
    };
  }, [notificationsFontSize5]);

  const updateCountStyle4: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding5,
    };
  }, [updateCountPadding5]);

  const divStyle4: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize5,
      lineHeight: divLineHeight5,
    };
  }, [divFontSize5, divLineHeight5]);

  const blankStyle4: CSSProperties = useMemo(() => {
    return {
      width: blankWidth4,
      height: blankHeight4,
    };
  }, [blankWidth4, blankHeight4]);

  const property1Details1Style: CSSProperties = useMemo(() => {
    return {
      width: profileWidth,
      padding: profilePadding,
      gap: profileGap,
    };
  }, [profileWidth, profilePadding, profileGap]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
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
      className="icon-onlyfalse-defaultfalse"
      style={iconOnlyFalseDefaultFalseStyle}
    >
      <div className="container" style={containerStyle}>
        <div className="logo-actions" style={logoActionsStyle}>
          <Property1Details1
            logoIcon="/logo-icon1.svg"
            alignLeft="/alignleft1.svg"
            property1DetailsWidth="256px"
            property1DetailsPadding="12px 8px"
            property1DetailsGap="12px"
            logoIconWidth="39.84px"
            logoIconHeight="39.84px"
            grovioFontSize="27.89px"
            exportTop="19.92px"
            exportLeft="224px"
            exportPadding="6px"
            alignLeftIconWidth="12px"
            alignLeftIconHeight="12px"
          />
          <div className="actions" style={actionsStyle}>
            <FormContainer
              navIconImage="/nav-icon6.svg"
              pageTitle="Home"
              dropdown
              updateCount={false}
              propPadding="6px 8px"
              propGap="8px"
              propWidth="256px"
              propWidth1="200px"
              propGap1="14px"
              propWidth2="28px"
              propHeight="28px"
              propFontSize="14px"
              propPadding1="2px 4px"
              propFontSize1="14px"
              propLineHeight="18px"
              propWidth3="24px"
              propHeight1="24px"
            />
            <StateExtended
              navIcon="/nav-icon7.svg"
              chevronUp="/chevronup1.svg"
              stateExtendedWidth="256px"
              stateExtendedGap="6px"
              navItemPadding="6px 8px"
              navItemGap="8px"
              titleWidth="200px"
              titleGap="14px"
              navIconWidth="28px"
              navIconHeight="28px"
              notificationsFontSize="14px"
              updateCountPadding="2px 4px"
              divFontSize="14px"
              divLineHeight="18px"
              chevronUpIconWidth="24px"
              chevronUpIconHeight="24px"
              navItemNavDropdownItemPadding="8px 92px 8px 65px"
              navItemNavDropdownItemGap="7px"
              frameDivWidth="20px"
              frameDivHeight="20px"
              frameDivWidth1="8px"
              frameDivHeight1="8px"
              membersColor="#344054"
              membersFontSize="14px"
              membersLineHeight="18px"
              membersWidth="117px"
              navItemNavDropdownItemPadding1="8px 92px 8px 65px"
              navItemNavDropdownItemGap1="7px"
              frameDivWidth2="20px"
              frameDivHeight2="20px"
              frameDivWidth3="8px"
              frameDivHeight3="8px"
              membersColor1="#344054"
              membersFontSize1="14px"
              membersLineHeight1="18px"
              membersWidth1="117px"
              membersFontWeight="unset"
              navItemNavDropdownItemPadding2="8px 92px 8px 65px"
              navItemNavDropdownItemGap2="7px"
              frameDivWidth4="20px"
              frameDivHeight4="20px"
              frameDivWidth5="8px"
              frameDivHeight5="8px"
              membersColor2="#344054"
              membersFontSize2="14px"
              membersLineHeight2="18px"
              membersWidth2="117px"
            />
            <FormContainer
              navIconImage="/nav-icon8.svg"
              pageTitle="Communities"
              dropdown
              updateCount={false}
              propPadding="6px 8px"
              propGap="8px"
              propWidth="unset"
              propWidth1="200px"
              propGap1="14px"
              propWidth2="28px"
              propHeight="28px"
              propFontSize="14px"
              propPadding1="2px 4px"
              propFontSize1="14px"
              propLineHeight="18px"
              propWidth3="24px"
              propHeight1="24px"
            />
            <FormContainer
              navIconImage="/nav-icon9.svg"
              pageTitle="Campaigns"
              dropdown
              updateCount={false}
              propPadding="6px 8px"
              propGap="8px"
              propWidth="unset"
              propWidth1="200px"
              propGap1="14px"
              propWidth2="28px"
              propHeight="28px"
              propFontSize="14px"
              propPadding1="2px 4px"
              propFontSize1="14px"
              propLineHeight="18px"
              propWidth3="24px"
              propHeight1="24px"
            />
            <FormContainer
              navIconImage="/nav-icon10.svg"
              pageTitle="Notifications"
              dropdown
              updateCount
              propPadding="6px 8px"
              propGap="8px"
              propWidth="256px"
              propWidth1="200px"
              propGap1="14px"
              propWidth2="28px"
              propHeight="28px"
              propFontSize="14px"
              propPadding1="2px 4px"
              propFontSize1="14px"
              propLineHeight="18px"
              propWidth3="24px"
              propHeight1="24px"
            />
            <FormContainer
              navIconImage="/nav-icon11.svg"
              pageTitle="Settings"
              dropdown
              updateCount={false}
              propPadding="6px 8px"
              propGap="8px"
              propWidth="unset"
              propWidth1="200px"
              propGap1="14px"
              propWidth2="28px"
              propHeight="28px"
              propFontSize="14px"
              propPadding1="2px 4px"
              propFontSize1="14px"
              propLineHeight="18px"
              propWidth3="24px"
              propHeight1="24px"
            />
          </div>
        </div>
      </div>
      <Property1Details
        avatar="/avatar1@2x.png"
        logOut="/logout.svg"
        property1DetailsWidth="256px"
        property1DetailsPadding="16px"
        property1DetailsGap="24px"
        frameDivGap="8px"
        avatarIconWidth="42px"
        avatarIconHeight="42px"
        nameEmailGap="4px"
        nameFontSize="14px"
        eMailFontSize="12px"
        eMailLineHeight="16px"
        logOutIconWidth="17px"
        logOutIconHeight="17px"
      />
    </div>
  );
};

export default IconOnlyFalseDefaultFalse;
