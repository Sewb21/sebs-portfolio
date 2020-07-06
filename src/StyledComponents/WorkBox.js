import React from 'react';
import styled from 'styled-components';

const Root = styled.article`
  font-size: 24px;
  background-color: #2B7A78;
  margin-top: 2px;
  width: 100%;
  height: 400px;
  & > span {
    font-weight: bold;
    margin: 0 43% 0 43%;
    color: #FEFFFF;
    text-decoration: underline;
    font-size: 28px;
  }
 `;

const ImageRoot = styled.div`
  margin: 0 0 0 20%;
  position: relative;
  & > img {
    height: 300px;
    width: 300px;
  }
  & > article{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    width: 300px;
    opacity: 0;
    transition: .5s ease;
    background-color: #3AAFA9;
  }
  & > article:hover {
    opacity: 0.5;
  }
  & > article:hover & > span{
    opacity: 1;
    color: black;
  }
  & span:last-child{
    color: #FEFFFF;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export default function WorkBox({ children }) {
  return (
    <Root>
      <span>My Work</span>
      <ImageRoot>
        <img src={'https://filedn.com/lQJfVGhXSkSJSxgrjbFupmB/f4n_full.jpg'} alt='Favor-4-a-neighbour logo' />
        <article>
          <span>
          Favor For A Neighbour
          </span>
        </article>
      </ ImageRoot>
    </Root>
  )
}
