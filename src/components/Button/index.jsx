export const Button = ({onClick, className, style, children}) => {

    return(
        <>
            <button
                onClick={onClick}
                className={className}
                style={style}
            >
                {children}
            </button>
        </>
    )
}