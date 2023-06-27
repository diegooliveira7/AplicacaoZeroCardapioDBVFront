import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string,
    type: string
}

export function Card(props : CardProps){
    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p><b>Valor:</b></p>
            <h2></h2>
        </div>
    )
}