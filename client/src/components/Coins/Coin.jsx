const Coin = ({ coin }) => {
    console.log('coin ', coin)
    return (
        <div className="text-white">
            Coin view for: &nbsp; {coin.name}
        </div>
    )
}

export default Coin
