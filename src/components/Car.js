import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
//import cars from '../cars.json' // remove this

const Car = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const cars = cars.find(c=> c.id === Number (id))

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{Car.Name}</h2>
                {
                    Object.keys(Car).map((key, idx) => {
                        return <Chip label={`${key}: ${Car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car