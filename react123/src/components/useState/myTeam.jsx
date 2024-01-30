

import { people } from "./studentai"
import { useState } from "react"
export const MyTeam = () => {

    const [myTeam, setMyTeam] = useState([]);

    const addMemeberToMyTeam = (teamMember) => {
        setMyTeam([...myTeam, teamMember])
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
                {myTeam.map(teamMember => <li key={teamMember.Id}>{teamMember.name}{teamMember.age} </li>)}
            </ul>
        </>
    )

}