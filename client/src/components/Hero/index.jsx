const Hero = () => {
    return (
        <div className="flex w-full h-fit flex-1 justify-end mb-8">
            <div className="max-w-56 h-auto md:max-w-xl animate-flow">
                <img
                    src={'/images/coin-explorer-avatar.png'}
                    alt='the coin explorer avatar'
                    className="w-full h-full -scale-x-100"
                />
            </div>
        </div>
    )
}

export default Hero

