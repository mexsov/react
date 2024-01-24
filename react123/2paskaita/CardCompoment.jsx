export const CarComponent = (props) => {

    const { subtitle, header, link, picture } = props;

    return (
        <div>
            <h1>{header}</h1>
            <p>{subtitle}</p>
            <a href={link}>link to my page</a>
            <img src={picture} />
        </div>
    )
}