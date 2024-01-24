export const PostItem = (props) => {
    const { title, text, subelement} = props;
    return(
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}