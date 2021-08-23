import React from "react";

class ClassCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.inc = this.inc().bind(this);
        this.dec = this.dec().bind(this);

    }

    inc() {
        this.setState({counter: this.state.counter +1})
    }
    dec() {
        this.setState({counter: this.state.counter -1})
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.inc}>Incr</button>
                <button onClick={this.dec}>Dec</button>
            </div>
        )
    }
}

export default ClassCounter;