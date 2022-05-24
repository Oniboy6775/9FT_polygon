import { useSelector } from "react-redux";
import styled from "styled-components";
const Mint = ({ myFunctions }) => {
  const blockchain = useSelector((state) => state.blockchain);
  const {
    cost,
    maxSupply,
    symbol,
    displayCost,
    mintAmount,
    setMaxMint,
    mintingStatus,
    saleEnded,
    decrement,
    increment,
    connectWallet,
    feedback,
    mintNFT,
  } = myFunctions;
  return (
    <Container>
      <h1 className="title">MINT NOW</h1>
      <div className="title-underline"></div>

      <div className="mint__container">
        {/* <h2 className="sub__title">9ft NFT</h2> */}
        <div className="min__price row">
          <p className="col">
            TOTAL ITEM: {maxSupply} {symbol}
          </p>{" "}
        </div>
        <div className="alert-danger">{feedback}</div>
        <div className="gif__container row">
          <div className="gif col">
            <img src="./assets/gif.png" alt="sample gif" className="img" />
          </div>
          <div className="mint__price__container col">
            <h3 className="mint__price__title">Mint Price</h3>

            <div className="min__price row">
              <p className="col">MIN</p> <p className="col">{cost} MATIC</p>
            </div>
            <div className="max__price row">
              <p className="col">MAX</p>{" "}
              <p className="col">{displayCost} MATIC</p>
            </div>
          </div>
        </div>
        {/* Counter */}
        <div className="mint__counter__container row ">
          <div className="count ">
            <span onClick={(e) => decrement(e)} className="btn">
              -
            </span>
            <span>{mintAmount}</span>
            <span onClick={(e) => increment(e)} className="btn">
              +
            </span>
          </div>
          <div
            onClick={() => {
              setMaxMint();
            }}
            className="max btn"
          >
            10 MAX
          </div>
        </div>
        {/* Total */}
        <div className="total__container row">
          <p className="total__text">Total</p>
          <p className="total">
            {" "}
            {displayCost * mintAmount} {symbol}
          </p>
        </div>
        {/* mint button */}

        <button
          disabled={mintingStatus === "MINTING" || saleEnded}
          onClick={(e) => {
            blockchain.account === "" || blockchain.smartContract === null
              ? connectWallet(e)
              : mintNFT(e);
          }}
          className="mint__btn btn btn-block"
        >
          {blockchain.account === "" || blockchain.smartContract === null
            ? "CONNECT WALLET"
            : mintingStatus}
        </button>
      </div>
    </Container>
  );
};

export default Mint;
const Container = styled.div`
  padding-top: 4rem;
  .mint__container {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1rem 2rem;
    margin: auto;
    margin-top: 2rem;
    max-width: var(--fixed-width);
    text-align: center;
  }
  .sub__title {
    text-align: center;
    text-transform: uppercase;
  }
  .gif {
    border: 2px solid #fff;
    margin-right: 1rem;
    border-radius: 15px;
    padding: 1rem;
  }
  .mint__price__title {
    color: var(--primary-500);
    font-weight: 900;
    text-transform: uppercase;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .col {
    width: 100%;
  }
  .min__price,
  .max__price {
    margin: -1.5rem auto;
    font-weight: 600;
  }
  .gif {
    width: 80%;
  }
  .gif__container {
    display: flex;
  }
  .mint__counter__container {
    border: 2px solid #fff;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: var(--borderRadius);
  }
  .mint__counter__container .btn {
    color: black;
    font-weight: 900;
  }
  .count span {
    margin-right: 1rem;
  }
  .total__container {
    margin-top: 1rem;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    line-height: 0.2;
    padding: 0 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  .mint__btn {
    margin-top: 1rem;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 900;
  }
`;
