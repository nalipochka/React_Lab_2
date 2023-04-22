import React from "react"

export default class RGB extends React.Component {
    constructor(props) {
        super(props);
        this.state = { red: 0, green: 0, blue: 0 }
    }
    redPlusClickHendler = () => {
        this.setState({ red: this.state.red + 1 });
    }
    redMinusClickHendler = () => {
        this.setState({ red: this.state.red - 1 });
    }
    greenPlusClickHendler = () => {
        this.setState({ green: this.state.green + 1 });
    }
    greenMinusClickHendler = () => {
        this.setState({ green: this.state.green - 1 });
    }
    bluePlusClickHendler = () => {
        this.setState({ blue: this.state.blue + 1 });
    }
    blueMinusClickHendler = () => {
        this.setState({ blue: this.state.blue - 1 });
    }
    render() {
        return <>
            <div>
                <span>Red:</span>
                <button onClick={this.redPlusClickHendler}>+1</button>
                <button onClick={this.redMinusClickHendler}>-1</button>
                <span>{this.state.red}</span>
            </div>

            <div>
                <span>Green:</span>
                <button onClick={this.greenPlusClickHendler}>+1</button>
                <button onClick={this.greenMinusClickHendler}>-1</button>
                <span>{this.state.green}</span>
            </div>

            <div>
                <span>Blue:</span>
                <button onClick={this.bluePlusClickHendler}>+1</button>
                <button onClick={this.blueMinusClickHendler}>-1</button>
                <span>{this.state.blue}</span>
            </div>

            <div className="color" style={{ backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue} )` }}>Test for RGB</div>
        </>
    }
}