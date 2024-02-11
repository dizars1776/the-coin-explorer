const LoadMore = ({ fetchMoreHandler, isFetchingNext, hasNext }) => {
    return (
        <div className="flex w-full justify-center items-center mt-12 mb-8">
            <button
                disabled={!hasNext || isFetchingNext}
                className='text-gray-500 font-mono text-lg bg-gray-700 p-3 rounded-lg transition-colors hover:shadow-md hover:text-gray-200 hover:bg-gray-600'
                onClick={() => fetchMoreHandler()}
            >
                {isFetchingNext ? 'Loading...' : hasNext ? 'Explore deeper' : 'Nothing more'}
            </button>
        </div>
    )
}

export default LoadMore
