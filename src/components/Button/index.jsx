import cl from "./button.module.scss"

function Button(props) {
    const {children, type, size, disabled, onClick} = props
    const {
        btn: defaultStyle,
        darkSolid,
        lightSolid,
        darkNoBg,
        lightNoBg,
        sm, md, fu
    } = cl

    const getType = () => {
        switch (type) {
            case 'lightSolid':
                return lightSolid
            case 'darkNoBg':
                return darkNoBg
            case 'lightNoBg':
                return lightNoBg
            default:
                return darkSolid
        }
    }

    const getSize = () => {
        switch (size) {
            case 'md':
                return md
            case 'fu':
                return fu
            default:
                return sm
        }
    }

    return ( 
        <button
            className={`${defaultStyle} ${getType()} ${getSize()}`}
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    )
}

export default Button;