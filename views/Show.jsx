    const React = require("react")

    class Show extends React.Component {
    render(){
        const flights = this.props.flights
    
    return(
    <h3>{flights.airline}  <br/>
    {flights.flightNo}<br/>
    {flights.departs.toISOString().slice(0, 16)}<br/>
    

    </h3>


    )
    }
    }

    module.exports = Show