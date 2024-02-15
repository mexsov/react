import { useState } from "react"
import { InputField } from "./InputField";
  
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
                    <option value="opt3">opt3 </option>
                    <option value="opt2">opt2</option>
                    <option value="opt1">opt1</option>
                </select>
            </label>
        </form>
        <p>   Sios savaites pirkiniai  {dropdownValue}</p>
        </>
    )
}