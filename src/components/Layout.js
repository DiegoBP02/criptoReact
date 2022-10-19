import React from "react";
import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>Coin</p>
        <p>Price</p>
        <p>Volume</p>
        <p>Price Change</p>
        <p>Market Cap</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 2rem;
  .container {
    display: grid;
    place-items: center;
    grid-template-columns: 7fr 4fr 3fr 2fr 3fr;
  }
  p {
    color: var(--clr-grey-9);
    font-weight: 600;
  }
  p:first-child {
    width: 8rem;
  }
  p:nth-child(2) {
    width: 11rem;
  }
  p:nth-child(3) {
    width: 14rem;
  }
  p:nth-child(4) {
    width: 7rem;
  }
`;

export default Layout;
