import React, {useState} from "react";
import './Form.css';
import {Checkbox} from "../Checkbox/Checkbox";
import {Select} from "../Select/Select";

export const Form = () => {
    const [inputValue, setInputValue] = useState({
        inputSequent: '',
        inputName: '',
    })
    const [toggleCheckbox, setToggleCheckbox] = useState(false)

    const changeSequentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue, inputSequent: e.target.value
        })
    }

    const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue, inputName: e.target.value
        })
    }

    const onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    return (
        <div>
            <form className="form"
                  onSubmit={onFormSubmit}
            >
                <label className="form__label"
                       htmlFor="sequent">Seciba
                </label>
                <input
                    type="text"
                    id="sequent"
                    className="form__input"
                    placeholder="Seciba..."
                    value={inputValue.inputSequent}
                    onChange={changeSequentInput}
                />
                <Select/>
                <label className="form__label"
                       htmlFor="name">Lauka nosaukums
                </label>
                <input
                    type="text"
                    id="name"
                    className="form__input"
                    placeholder="Lauka nosaukums..."
                    value={inputValue.inputName}
                    onChange={changeNameInput}
                />
                <Checkbox checkboxValue={toggleCheckbox} setCheckboxValue={setToggleCheckbox}/>
                <div className="form__button-wrapper">
                    <button
                        className="form__button">
                        Pievienot vel
                    </button>
                    <button
                        className="form__button-secondary">
                        Saglabat
                    </button>
                </div>
            </form>
        </div>
    )
}
