import DOMPurify from 'dompurify'

const Coin = ({ coin }) => {
    const sanitizedCoinDesc = DOMPurify.sanitize(coin.description)

    return (
        <div className="flex flex-col mx-2 my-8 w-full">
            <div
                className="flex max-w-md md:max-w-full mx-auto md:mx-4 text-emerald-600 items-start bg-cryptic-darker border-2 border-cryptic-lighter md:mb-4 md:mt-12 p-4 md:p-8 rounded-3xl flex-col gap-8"
            >
                <h2 className="place-self-center cursor-pointer text-3xl md:text-6xl font-mono font-bold from-emerald-600 via-teal-400 to-emerald-700 bg-gradient-to-r bg-clip-text text-transparent">
                    {coin.name}
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
                    <div className="w-24 h-24 sm:w-40 sm:h-40 lg:pt-1 lg:w-auto lg:h-auto lg:place-self-start">
                        <img
                            src={coin.image.large}
                            alt={`${coin.name} logo`}
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div className='flex flex-col gap-8 lg:flex-1'>
                        <p dangerouslySetInnerHTML={{ __html: sanitizedCoinDesc }} className="text-slate-200 coin-description">
                        </p>
                        <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30" />
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="font-bold">
                                Symbol: <span className="font-normal text-slate-200">{coin.symbol}</span>
                            </li>
                            <ul className="flex flex-row gap-4">
                                <li className="font-bold">
                                    Price:{' '}
                                    <span className="font-normal text-slate-200">{`${coin.price} $`}</span>
                                </li>
                                <li className="font-bold">
                                    Ath:{' '}
                                    <span className="font-normal text-slate-200">{`${coin.ath} $`}</span>
                                </li>
                            </ul>
                            <ul className="flex flex-row gap-4">
                                <li className="font-bold">
                                    24h Low:{' '}
                                    <span className="font-normal text-slate-200">{`${coin['24hLow']} $`}</span>
                                </li>
                                <li className="font-bold">
                                    24h High:{' '}
                                    <span className="font-normal text-slate-200">{`${coin['24hHigh']} $`}</span>
                                </li>
                            </ul>
                            <li className="font-bold">
                                Price fluctuation in:{' '}
                            </li>
                            <ul className="flex flex-wrap gap-2 px-1">
                                <li>
                                    24 hours:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['24h'].toFixed(2)} %`}
                                    </span>
                                </li>
                                <li>
                                    7 days:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['7d'].toFixed(2)} %`}
                                    </span>
                                </li>
                                <li>
                                    14 days:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['14d'].toFixed(2)} %`}
                                    </span>
                                </li>
                                <li>
                                    1 month:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['30d'].toFixed(2)} %`}
                                    </span>
                                </li>
                                <li>
                                    2 months:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['60d'].toFixed(2)} %`}
                                    </span>
                                </li>
                                <li>
                                    200 days:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['200d'].toFixed(2)} %`}
                                    </span>
                                </li>
                                <li>
                                    1 year:{' '}
                                    <span className="font-normal text-slate-200">
                                        {`${coin.priceChangePercentage['1y'].toFixed(2)} %`}
                                    </span>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin
