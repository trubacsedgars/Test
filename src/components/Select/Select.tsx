import {FC} from "react";
import './Select.css'

type SelectProps = {
    selectInputValue: string,
    setSelectInputValue: (input: string) => void;
}

export const Select: FC<SelectProps> = ({selectInputValue, setSelectInputValue}) => {

    const changeSelectInputValue = (input: string) => {
        setSelectInputValue(input)
    }

    return (
        <div>
            <label
                className="form__label"
                htmlFor="fieldType">
                Lauka tips
            </label>
            <select className="form__input"
                    name="fieldType" id="fieldType"
                    value={selectInputValue}
                    onChange={(e) => changeSelectInputValue(e.target.value)}>
                <option value="1" defaultValue="input">Input</option>
                <option value="2">Select</option>
                <option value="3">Number Input</option>
            </select>
        </div>
    )
}
