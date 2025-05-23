import Card from "./card"
import React from "react"
import data from './cards'

function CardContainer () {
    
    const val = data.map((dat) => {
        return (
          <Card
            src={dat.src}
            alt={dat.alt}
            title={dat.title}
            desc={dat.desc}
          />
        )
      })
    
      return (
        <>
          <div className="container">
            {val}
            <Card />
          </div>
    
        </>
      )
}

export default CardContainer