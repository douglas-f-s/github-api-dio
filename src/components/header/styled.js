import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    margin: 10px;
    border: 1px solid #89c403;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding-left:20px;
    font-weight: 500;
    color: #fff;
    background-color: #767676;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
     color: #fff;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
       color: #fff;
    }
  }

  button {
    margin: 10px;
    box-shadow:inset 0px 1px 0px 0px #a4e271;
  	background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  	background-color:#89c403;
  	border:1px solid #74b807;
  	display:inline-block;
	  color:#fff;
  	font-size:15px;
  	font-weight:bold;
  	padding:6px 24px;
  	text-decoration:none;
  	text-shadow:0px 1px 0px #528009;
    height: 44px;
    border-radius: 8px;

    &:hover {
      background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
    	background-color:#77a809;
    }

    &:active {
      position:relative;
      top:1px;
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
