import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  justify-content: center;
  margin: 0;
`;

WrapperTabList.tabsRole = "TabList";
export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #89c403;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#89c403";
  margin: 8px;
  box-shadow:inset 0px 1px 0px 0px #a4e271;
  background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color:#89c403;
  border:1px solid #74b807;
  display:inline-block;
	color:#fff;
  font-size:15px;
  font-weight:bold;
  text-decoration:none;
  text-shadow:0px 1px 0px #528009;
  border-radius: 8px;
  height: 44px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
  	background-color:#77a809;
  }

  &.is-selected {
    position:relative;
    top:1px;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
