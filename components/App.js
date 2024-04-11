import React from "react"
import data from "../data"
import Header from "./Header"
import TravelContent from "./TravelContent"

export default function App() {
    console.log(data)
    return (
        <div>
            <Header />
            <TravelContent data={data} />
        </div>
    )
}