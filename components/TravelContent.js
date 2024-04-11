import React from "react"

export default function TravelContent({data}) {
    
    const cardEl = data.map(item => {
        return (
            <section className="card--section">
                <img className="card--img" src={item.imageUrl} alt="location Image" />
                <div>
                    <div className="card-top-section">
                        <p className="card--location">📍{item.location} </p>
                        <a href={item.googleMapsUrl}>View on Google Maps </a>
                    </div>
                    <h2 className="card--title">{item.title}</h2>
                    <p className="card--date">{item.startDate} - {item.endDate}</p>
                    <p className="card--description">{item.description}</p>
                </div>
            </section>
        )
    })
    return (
        <main>
            {cardEl}
        </main>
    )
}