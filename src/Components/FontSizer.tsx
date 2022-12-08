import {FC} from "react"
import { FontSet } from "./FontSet"
export const FontSizer: FC = () => {
    
    return (
      <section className="font-sizer">
        <div className="font-sizer__info">
            Please set font size
        </div>
        <ul className="font-sizer__list">
            <FontSet size={62.5} sizeClass={"normal"} />
            <FontSet size={80} sizeClass={"bigger"} />
            <FontSet size={100} sizeClass={"biggest"} />
        </ul>
      </section>  
    )
}