import {FC} from "react"

interface Props {
    size: number;
    sizeClass: 'normal' | 'bigger' | 'biggest';
}

export const FontSet: FC<Props> = (props) => {
    const changeSize = () => {
        document.documentElement.style.fontSize = `${props.size}%`
    }
    return (
            <li 
            onClick={changeSize}
            className={`font-sizer__list-item font-sizer__list-item--${props.sizeClass}`}
            >
                A
            </li>
    )
}