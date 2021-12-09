import { useState } from "react";

import Button from "../Commons/Button";
import Select from "../Commons/Select";
import Input from "../Commons/Input";

const NewPerson = (props) => {
    const [data, setData] = useState({
        name: '',
        last_name: '',
        sex: '',
        age: '',
        ci: '',
        country: ''
    });

    const onChangeHanler = (event) => {
        const { value, name } = event.target; // Destructuracion de objetos
        setData({
            ...data,
            [name]: value
        })
    }

    const onClickAcceptHandler = (event) => {
        event.preventDefault();
        props.onClickNewPerson(data);
        setData({
            name: '',
            last_name: '',
            sex: '',
            age: '',
            ci: '',
            country: ''
        })
    }

    const isAllowClick = () => {
        return data.name !== '' && data.last_name !== '' && data.sex !== '' && data.age !== '' && data.ci !== '' && data.country !== '';
    }

    return <>
        <form className="New-Person-Form">
            <div className="Row">
                <Input type="text" name="name" placeholder="Nombre" value={data.name} onChange={onChangeHanler}/>
                <Input type="text" name="last_name" placeholder="Apellido" value={data.last_name} onChange={onChangeHanler}/>
                <Select name="sex" onChange={onChangeHanler}>
                    <option value="F">F</option>
                    <option value="M">M</option>
                </Select>
            </div>
            <div className="Row">
                <Input type="text" name="age" placeholder="Edad" value={data.age} onChange={onChangeHanler}/>
                <Input type="text" name="ci" placeholder="Cedula de Identidad" value={data.ci} onChange={onChangeHanler}/>
                <Select name="country" onChange={onChangeHanler}>
                    <option value="Cuba">Cuba</option>
                    <option value="Uruguay">Uruguay</option>
                </Select>
            </div>
            <div className="Row">
                <Button className="append" disabled={!isAllowClick()} onClick={onClickAcceptHandler}>Aceptar</Button>
            </div>
        </form>
    </>
}

export default NewPerson;
// <></> Es un Fragment es equivalente a  <React.Fragment></React.Fragment>