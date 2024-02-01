import { useParams } from 'react=router-dom'

export const VienasStudentas = () => {
    const {id} = useParams();


const VienasStudentas = people.find(person => person.Id.toString() === id);


    return (

        <>
            <div>Vieno studento info {id}</div>
            <div>Vardas: {VienasStudentas.name}</div>
            <div>Pavarde: {VienasStudentas.surname}</div>
        </>
    );
};
