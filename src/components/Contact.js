import React from "react";
import styled from "styled-components";
import ContactBox from "../StyledComponents/ContactBox";

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  margin: 2px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h1 {
    font-weight: bold;
    margin: 20px 0 0 0;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h1 {
      margin: 10px 0 0 0;
      font-size: 26px;
    }
  }
`;

export default function Contact() {
  return (
    <Root id="Contact">
      <h1>Contact</h1>
      <ContactBox label="Name:" value="Seb Smith" />
      <ContactBox
        label="Email:"
        value="seb-smith@live.com"
        link={"seb-smith@live.com"}
      />
      <ContactBox label="Mobile:" value="07904 107737" />
      <ContactBox
        label="LinkedIn:"
        value="https://www.linkedin.com/in/seb-smith"
        link="https://www.linkedin.com/in/seb-smith-34a20a1a6"
      />
      <ContactBox
        label="GitHub:"
        value="https://github.com/Sewb21"
        link="https://github.com/Sewb21"
      />
    </Root>
  );
}
