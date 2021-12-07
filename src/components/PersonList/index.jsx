import Person from "../Person";

const PersonList = (props) => {
    return <>
            <div className="PersonList">
                {props.persons.length > 0 && 
                    <>
                        {props.persons.map((person, index) => {
                            return <Person key={index} person={person} onDelete={() => props.onDelete(index)}/>
                        })}
                    </>
                }
                {props.persons.length === 0 && <>No persons here yet.</>}
            </div>
        </>
}

export default PersonList;