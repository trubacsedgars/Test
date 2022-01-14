import React, {useEffect, useState} from "react";
import './Form.css';
import {Checkbox} from "../Checkbox/Checkbox";
import {Select} from "../Select/Select";
import {ObjectValues} from "../Interface/Interface";
import axios from "axios";

export const Form = () => {
    const [inputValue, setInputValue] = useState({
        inputSequent: '',
        inputName: '',
        inputDocName: '',
    })
    const [toggleCheckbox, setToggleCheckbox] = useState(false)
    const [selectInputValue, setSelectInputValue] = useState('')
    const [sendData, setSendData] = useState<ObjectValues>()

    const changeDocNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue, inputDocName: e.target.value
        })
    }

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
        setSendData({
            document_name: inputValue.inputDocName,
            form_values: [{
                field_seq: inputValue.inputSequent,
                is_mandatory: Number(toggleCheckbox),
                field_type: Number(selectInputValue),
                field_name: inputValue.inputName,
                select_values: null,
            }]
        })
        console.log('Form submitted')
    }

    useEffect(() => {
        (sendData &&
            setTimeout(() => {
                axios.post('/api/v1/documents/create', sendData, {
                    headers: {
                        'API-KEY': 'secret-api-key'
                    }
                })
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((reas) => {
                        console.log(reas)
                    })
            }, 2000)
        )
    }, [onFormSubmit]);

    return (
        <div>
            <form className="form"
                  onSubmit={onFormSubmit}
            >
                <label className="form__label"
                       htmlFor="docNameInput">Document name
                </label>
                <input
                    type="text"
                    id="docNameInput"
                    className="form__input"
                    placeholder="Add your text here... :)"
                    value={inputValue.inputDocName}
                    onChange={changeDocNameInput}
                />
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
                <Select selectInputValue={selectInputValue} setSelectInputValue={setSelectInputValue}/>
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
