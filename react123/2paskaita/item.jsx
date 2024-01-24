const Item = ({title, isSubmittable}) => {

    return (
        <>
        <input type="checkbox" checked={isSubmittable} />
        <p>title</p>
        </>
    )
}