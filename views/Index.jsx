    const React = require('react')

    class Index extends React.Component {
        render(){
            const {flights} = this.props 
            return(
                <ul>
                {flights.map((flight, i) => {
                    return(
                    <li key={i}>
                    <h3>{flight.airline}</h3> 
                        <a href={`/flights/${flight._id}`}>             
                        Detail</a>
                        
                    
                    </li> 
                    )
                })
                }

                </ul>
            )
        }
    }

    module.exports = Index