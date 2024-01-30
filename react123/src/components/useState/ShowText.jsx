import { useState } from "react"

export const ShowText = () => {

    const [showText, setShowText] = useState(false);

    const handleOnClick = () => {
       setShowText(!showText)
        // if (showText) {
        //     setShowText(false);
        // } else {
        //     setShowText(true)
        // }
    }
    return (
    <>
    <button onClick={handleOnClick}>Ream {showText ? "Read more" :"Read less"}</button>
{showText && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quo necessitatibus ab animi quisquam suscipit, quaerat natus? Vel fugit ut temporibus laborum nam eius, soluta et doloremque, nisi sint ratione.</p>}
    </>
    )
}

export default ShowText