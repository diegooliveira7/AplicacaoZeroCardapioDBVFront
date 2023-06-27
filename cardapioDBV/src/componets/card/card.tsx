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
            <img src="https://i2.wp.com/files.agro20.com.br/uploads/2020/03/comidabrasileira3.jpg?resize=600%2C338&ssl=1"/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
            <h3>{type}</h3>
        </div>
    )
}