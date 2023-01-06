import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import {motion} from "framer-motion";

export const Wrapper = styled.div`
  margin: 4rem 0;
`

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    height: 40%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`

export const GridCard = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 15px;
    line-height: 1.5;
    margin: 0;
  }
`

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  
  svg {
    color: white;
    font-size: 1.5rem;
  }
  
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    
    svg {
      color: white;
    }
    
    h4 {
      color: white;
    }
  }
`

export const FormStyle = styled.form`
  margin: 0 20rem;
  
  div {
    width: 100%;
    position: relative;
  }
  
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white
  }
`

export const DetailWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  
  ul {
    margin-top: 2rem;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

export const Info = styled.div`
  margin-left: 10rem;
`

export const Logo = styled(Link)`
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

export const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  color: #000;
  justify-content: flex-start;
  align-items: center;
  
  svg {
    font-size: 2rem;
  }
`