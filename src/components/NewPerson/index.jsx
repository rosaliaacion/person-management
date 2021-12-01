import { useState } from "react";

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
    }

    return <>
        <form className="New-Person-Form">
            <div className="Row">
                <input type="text" name="name" placeholder="Nombre" value={data.name} onChange={onChangeHanler}/>
                <input type="text" name="last_name" placeholder="Apellido" value={data.last_name} onChange={onChangeHanler}/>
                <input type="text" name="sex" placeholder="Sexo" value={data.sex} onChange={onChangeHanler}/>
            </div>
            <div className="Row">
                <input type="text" name="age" placeholder="Edad" value={data.age} onChange={onChangeHanler}/>
                <input type="text" name="ci" placeholder="Cedula de Identidad" value={data.ci} onChange={onChangeHanler}/>
                <input type="text" name="country" placeholder="Pais" value={data.country} onChange={onChangeHanler}/>
            </div>
            <div className="Row">
                <button onClick={onClickAcceptHandler}>Aceptar</button>
            </div>
        </form>
    </>
}

export default NewPerson;
// <></> Es un Fragment es equivalente a  <React.Fragment></React.Fragment>