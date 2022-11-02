import { ReactElement } from "react";

const Card = ({children}: {children: ReactElement}) => {
    return <div className="card">{children}</div>
}

export default Card;