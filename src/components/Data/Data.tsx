import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Button} from "../Button/Button";
import './Data.css'
import {useNavigate} from "react-router-dom";
import {DataValues} from "../Interface/Interface";

axios.defaults.baseURL = 'https://dev2.esynergy.lv/'

export const Data = () => {

    const [dataValues, setDataValues] = useState<DataValues[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get<DataValues[]>('/api/v1/documents', {
            headers: {
                'API-KEY': 'secret-api-key'
            }
        })
            .then((res) => {
                console.log(res)
                const dataValues = res.data
                setDataValues(dataValues)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="container">
            <Button
                name="Izveidot jaunu dokumenta formu"
                onClick={() => navigate('/form')}
            />
            {dataValues.map((data) => (
                <table key={data.id} className="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Dokumenta nosaukums</th>
                        <th scope="col">Izveidosanas datums</th>
                        <th scope="col">Dokumenta lielums</th>
                        <th scope="col">Papildus info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{data.document_name}</td>
                        <td>{new Date(data.created_at).toISOString().substring(0, 19).replace("T", " ")}</td>
                        <td>{data.field_count}</td>
                        <td>Atvert priekskatu</td>
                    </tr>
                    </tbody>
                </table>
            ))}
        </div>
    )
}
