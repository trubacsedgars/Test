import {FC} from "react";
import './Button.css'

type ButtonProps = {
    name: string
    onClick: () => void;
}

export const Button:FC<ButtonProps> = ({name, onClick}) => (
    <div className="button-wrapper">
        <button
            className="button"
            onClick={() => onClick()}
        >
            {name}
        </button>
    </div>
)
