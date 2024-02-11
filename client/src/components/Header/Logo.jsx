import { Link } from 'react-router-dom'

const Logo = ({ textSizeClass }) => {
    return (
        <Link to={'/'} className='group'>
            <h1 className={`${textSizeClass === 'sm' ? 'text-xs' : 'text-4xl'} font-pump text-emerald-600 font-bold transition-colors group-hover:text-emerald-400`}>
                <span className={`${textSizeClass === 'sm' ? 'text-xl' : 'text-2xl'} mr-1`}>💰</span>The Coin Explorer.
            </h1>
        </Link>
    )
}

export default Logo
