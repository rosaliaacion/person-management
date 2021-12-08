import { useState } from "react";
import styled from "styled-components";

import Button from "../Commons/Button";

// Custom Styled Components
// const Button = styled.button`
//     padding: 10px;
//     border: 1px solid #ddd;
//     color: red;
//     border-radius: 5px;
//     cursor: pointer;

//     &:disabled {
//         color: #ddd;
//         cursor: none;
//     }
// `;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 5px;
`;

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
        const { value, name } = event.target;
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
                <Input type="text" name="sex" placeholder="Sexo" value={data.sex} onChange={onChangeHanler}/>
            </div>
            <div className="Row">
                <Input type="text" name="age" placeholder="Edad" value={data.age} onChange={onChangeHanler}/>
                <Input type="text" name="ci" placeholder="Cedula de Identidad" value={data.ci} onChange={onChangeHanler}/>
                <Input type="text" name="country" placeholder="Pais" value={data.country} onChange={onChangeHanler}/>
            </div>
            <div className="Row">
                <Button className="append" disabled={!isAllowClick()} onClick={onClickAcceptHandler}>Aceptar</Button>
            </div>
        </form>
    </>
}

export default NewPerson;
// <></> Es un Fragment es equivalente a  <React.Fragment></React.Fragment>