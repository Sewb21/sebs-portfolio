import React from "react"
import styled from "styled-components"
import TextGroup from "components/TextGroup"

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;

  @media (min-width: 475px) {
    flex-direction: row;
  }
`

const ImgWrapper = styled.div`
  max-width: 33.333333333%;
  width: 100%;
  & img {
    width: 100%;
  }
`

const Content = styled.div`
  flex: 1 1 auto;
  color: white;

  & h3 {
    font-size: 24px;
    font-weight: 700;
  }

  @media only screen and (min-width: 476px) {
    margin-left: 60px;
  }
`

const TechGroup = styled(TextGroup)`
  & > div {
    display: flex;
    flex-direction: column;
    & > * + * {
      margin-top: 4px;
    }

    @media only screen and (min-width: 475px) {
      & > * + * {
        margin-top: 0px;
      }
    }
  }
`

const Desc = styled.p`
  font-size: 20px;
  line-height: 28px;

  @media only screen and (max-width: 475px) {
    font-size: 18px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 16px;
  }

  & a {
    transition: 0.12s color ease-in-out;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 16px;

    & > * + * {
      margin-left: 8px;
    }

    & svg {
      transition: 0.12s all ease-in-out;
    }

    &:hover {
      color: #3aafa9;
      & svg {
        fill: #3aafa9;
      }
    }
  }
`

export default function WorkBox({
  className,
  title,
  imgSrc,
  imgAlt,
  jobRole,
  jobDescription,
  links = [],
  technologies,
}) {
  return (
    <Root>
      <ImgWrapper>
        <img src={imgSrc} alt={imgAlt} />
      </ImgWrapper>
      <Content>
        <h3>{title}</h3>
        <TextGroup>
          <span>Role:</span>
          <p>{jobRole}</p>
        </TextGroup>
        <TechGroup>
          <span>Technologies:</span>
          <div>
            {technologies.map((tech, key) => (
              <p key={key}>{tech}</p>
            ))}
          </div>
        </TechGroup>
        <Desc>{jobDescription}</Desc>
        {links && links.length ? (
          <Links>
            {links.map(({ icon: Icon, name, url }, key) => (
              <a href={url} key={key}>
                {Icon ? <Icon size={16} color="white" /> : null}
                <span>{name}</span>
              </a>
            ))}
          </Links>
        ) : null}
      </Content>
    </Root>
  )
}
