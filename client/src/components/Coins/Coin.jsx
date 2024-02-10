const Coin = ({ coin }) => {
    console.log('coin ', coin)
    return (
        <div>
            Coin view for: &nbsp; {coin.name}
        </div>
    )
}

export default Coin
