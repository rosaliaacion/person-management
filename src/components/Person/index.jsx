const Person = (props) => {

    const personFullName = () => {
        return `${props.person.name} ${props.person.last_name}`; //`` backtips comillas invertidas para crear string e interpolar valores dinamicos dentro de una cadena
    }

    return <>
            <div className="Person">
                <div>{personFullName()}</div>
                <div>{props.person.age} Años</div>
                <div>Sexo: {props.person.sex}</div>
                <div>{props.person.country}</div>
                <div>{props.person.ci}</div>
                <button>Eliminar</button>
            </div>
        </>
}

export default Person;