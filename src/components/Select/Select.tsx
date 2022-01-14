import './Select.css'

export const Select = () => {
    return (
        <div>
            <label
                className="form__label"
                htmlFor="fieldType">
                Lauka tips
            </label>
            <select className="form__input" name="fieldType" id="fieldType">
                <option value="input" defaultValue="input">Input</option>
                <option value="select">Select</option>
                <option value="numberInput">Number Input</option>
            </select>
        </div>
    )
}
