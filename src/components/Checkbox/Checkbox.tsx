import {FC} from "react";
import './Checkbox.css'

type CheckboxProps = {
    checkboxValue: boolean
    setCheckboxValue: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({checkboxValue, setCheckboxValue}) => {

    const toggleCheckboxValue = (checked: boolean) => {
        setCheckboxValue(checked)
    }

    return (
        <div>
            <label className="form__label-checkbox"
                   htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    className="form__input-checkbox"
                    checked={checkboxValue}
                    onChange={(e) => toggleCheckboxValue(e.target.checked)}
                />
                Obligats
            </label>
        </div>
    )
}
