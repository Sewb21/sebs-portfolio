import React from "react"
import styled from "styled-components"

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  height: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    display: flex;
    flex-direction: row;
    jusitfy-content: center;
    align-items: center;
    margin: 16px 0 16px 0;
  }

  & span {
    color: white;
    margin: 16px 0 16px 8px;
    align-items: self;
  }

  & a {
    color: #feffff;
    text-decoration: none;
    font-size: 24px;
    margin-left: 8px;

    & span {

      & :hover {
        color: #3aafa9;
        text-decoration: underline;
        0.12s all ease-in-out;
      }
    }

    &:hover {
      color: #3aafa9;

      & svg {
        fill: #3aafa9;
        transition: 0.12s all ease-in-out;
      }
    }
  }

  @media only screen and (max-width: 475px) {
    font-size: 18px;

    & a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 380px) {
    font-size: 16px;

    & a {
      font-size: 16px;
    }
  }
`

export default function ContactBox({ details }) {
  return (
    <Root>
      {details.map(({ icon: Icon, value, url }, key) =>
        url ? (
          <div key={key}>
            <a href={url}>
              {Icon ? <Icon size={28} color="white" /> : null}
              <span>{value}</span>
            </a>
          </div>
        ) : (
          <div key={key}>
            {Icon ? <Icon size={28} color="white" /> : null}
            <span>{value}</span>
          </div>
        )
      )}
    </Root>
  )
}
