import { Link } from 'react-router-dom'
import Error from '../../components/Error/'

const CoinList = ({ listItems }) => {
    if (!listItems) {
        return <Error error={{ message: 'We are out of coins.' }} />
    }

    return (
        listItems.map((item) => (
            <Link
                key={item.id}
                to={`/coins/${item.id}`}
                className="flex bg-cryptic-darker hover:bg-cryptic-lighter mx-4 p-4 md:p-8 rounded-3xl transition-colors flex-col sm:flex-row gap-2 sm:gap-8 items-center"
            >
                <div className="w-24 h-24 sm:w-40 sm:h-40">
                    <img
                        src={item.image}
                        alt={`${item.name} logo`}
                        className="w-full h-full rounded-full"
                    />
                </div>
                <ul className="flex flex-col gap-2 text-emerald-800">
                    <li className="font-bold">
                        Name: <span className="font-normal text-slate-200">{item.name}</span>
                    </li>
                    <li className="font-bold">
                        Symbol: <span className="font-normal text-slate-200">{item.symbol}</span>
                    </li>
                    <li className="font-bold">
                        Price:{' '}
                        <span className="font-normal text-slate-200">{`${item.price} $`}</span>
                    </li>
                    <li className="font-bold">
                        24h High:{' '}
                        <span className="font-normal text-slate-200">{`${item['24hHigh']} $`}</span>
                    </li>
                    <li className="font-bold">
                        24h Low:{' '}
                        <span className="font-normal text-slate-200">{`${item['24hLow']} $`}</span>
                    </li>
                    <li className="font-bold">
                        24h Price fluctuation:{' '}
                        <span className="font-normal text-slate-200">
                            {`${item['24hFluctuationPercentage'].toFixed(2)} %`}
                        </span>
                    </li>
                </ul>
            </Link>
        ))
    )
}

export default CoinList
