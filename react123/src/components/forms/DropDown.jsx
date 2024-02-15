import { useState } from "react"


export const Dropdown = () => {

const [dropdownValue, setDropdownValue] = useState('Option2');

const changeDropdownValue = (e) => {
    setDropdownValue(e.target.value)
}
    return (
        <>
        <form>
            <label >
                Dropdown
                <select value={dropdownValue} onChange={changeDropdownValue}>
                    <option value="option1">Option 1 </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
        </form>
        <p>as vaziuosi i</p>
        </>
    )
}