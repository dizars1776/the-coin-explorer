import { Link } from 'react-router-dom'

const CoinList = ({ listItems }) => {
    return (
        listItems.map((item) => (
            <Link
                key={item.id}
                to={`/coins/${item.id}`}
                className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center"
            >
                <div className="w-24 h-24 sm:w-40 sm:h-40">
                    <img
                        src={item.image}
                        alt={`${item.name} logo`}
                        className="w-full h-full rounded-full"
                    />
                </div>
                <ul className="flex flex-col gap-2">
                    <li className="font-bold">
                        Name: <span className="font-normal">{item.name}</span>
                    </li>
                    <li className="font-bold">
                        Symbol: <span className="font-normal">{item.symbol}</span>
                    </li>
                    <li className="font-bold">
                        Price:{' '}
                        <span className="font-normal">{`${item.price} $`}</span>
                    </li>
                    <li className="font-bold">
                        24h High:{' '}
                        <span className="font-normal">{`${item['24hHigh']} $`}</span>
                    </li>
                    <li className="font-bold">
                        24h Low:{' '}
                        <span className="font-normal">{`${item['24hLow']} $`}</span>
                    </li>
                    <li className="font-bold">
                        24h Price fluctuation:{' '}
                        <span className="font-normal">
                            {`${item['24hFluctuationPercentage'].toFixed(2)} %`}
                        </span>
                    </li>
                </ul>
            </Link>
        ))
    )
}

export default CoinList