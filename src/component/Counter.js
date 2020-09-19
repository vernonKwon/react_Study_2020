import React, { Component } from 'react';
import CounterButton from './CounterButton';
import CounterNumber from './CounterNumber';

import { connect } from 'react-redux';

import * as action from '../action';

class Counter extends Component {
    //const [number, setNumber] = useState(3);
    constructor(props) {
        super(props);

		this.setRandomColor = this.setRandomColor.bind(this)
    }
	
	setRandomColor() {
        const color = [
            Math.floor(Math.random() * 55 + 200),
            Math.floor(Math.random() * 55 + 200),
            Math.floor(Math.random() * 55 + 200),
        ];
		
		this.props.handleSetColor(color)
    }

    render() {
		
		const color = this.props.color;
		
		const style = {
			background : `rgb(${color[0]},${color[1]},${color[2]})`
		}
        return (
            <div style = {style}>
                <CounterNumber number={this.props.number} />
                <CounterButton
                    plus={this.props.handleIncrement}
                    minus={this.props.handleDecrement}
					background = {this.setRandomColor}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => {
            dispatch(action.increment());
        },
        handleDecrement: () => {
            dispatch(action.decrement());
        },
        handleSetColor: (color) => {
            dispatch(action.setColor(color));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);