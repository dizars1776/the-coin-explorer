import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex flex-col gap-4 p-4 mt-4">
            <Link to={'/'} className='group'>
                <h1 className="text-2xl text-emerald-600 font-bold transition-colors group-hover:text-emerald-400">💰 Coin Explorer.</h1>
            </Link>
        </header>
    )
}

export default Header
