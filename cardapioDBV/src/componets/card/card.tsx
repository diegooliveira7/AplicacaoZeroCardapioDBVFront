import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string,
    type: string
}

export function Card({price, image, title, type} : CardProps){
    return(
        <div className="card">
            <img/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
            <h3>{type}</h3>
        </div>
    )
}