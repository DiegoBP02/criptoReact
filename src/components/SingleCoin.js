import React from "react";
import styled from "styled-components";

const SingleCoin = ({ coin }) => {
  const {
    name,
    id,
    current_price: price,
    symbol,
    total_volume: volume,
    market_cap,
    image,
    price_change_percentage_24h: priceChange,
  } = coin;
  return (
    <Wrapper>
      <div className="singleRow">
        <div className="coin">
          <img src={image} alt={name} className="coinImg" />
          <p>{name}</p>
          <p className="symbol">{symbol}</p>
          <p>${price}</p>
          <p>${volume.toLocaleString()}</p>
          <p className={priceChange > 0 ? "green" : "red"}>
            {priceChange.toFixed(2)}
          </p>
          <p>${market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .singleRow {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    border-bottom: 1px solid var(--clr-grey-5);
    width: 90vw;
    padding: 0 2rem;
    max-width: var(--max-width);
  }
  .coin {
    display: grid;
    place-items: baseline;
    align-items: center;
    grid-template-columns: 1fr 1fr 2fr 2fr 3fr 1fr 1fr;
  }
  .coinImg {
    width: auto;
    height: 2.5rem;
    padding-right: 1.5rem;
  }
  p {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  .symbol {
    text-transform: uppercase;
    font-size: 0.625rem;
  }
  .red {
    color: var(--clr-red-dark);
  }
  .green {
    color: var(--clr-green-dark);
  }
`;

export default SingleCoin;
