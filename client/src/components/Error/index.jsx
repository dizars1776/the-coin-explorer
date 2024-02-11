const Error = ({ error }) => {
    return (
        <div className="flex w-full pl-8">
            <i className="text-slate-400 text-lg">{`Error: ${error.message}`}</i>
        </div>
    )
}

export default Error
