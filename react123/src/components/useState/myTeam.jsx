
import { useNavigate } from "react-router-dom";
import { people } from "./studentai"
import { useState } from "react"
export const MyTeam = () => {

    const [MyTeam, setMyTeam] = useState([]);
const navigate = useNavigate();
    const addMemeberToMyTeam = (teamMember) => {
        setMyTeam([...MyTeam, teamMember])
    }

    return (
        <>
            {people.map(person => {
                return (
                    <button onClick={() => addMemeberToMyTeam(person)} key={person.Id}> add {person.name}</button>)
            }
            )}
            <div>Mano komanda</div>
            <ul>
                {MyTeam.map(teamMember => <li key={teamMember.Id}>{teamMember.name}{teamMember.age} </li>)}
            </ul>
        </>
    )

}