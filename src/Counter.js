import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            name: undefined,
        };
    }

    render() {
        const { number, name } = this.state;

        return (
            <div>
                {number % 2 === 0 ? <h2>{number}</h2> : <h2>{number}</h2>}

                <button
                    onClick={() => {
                        this.setState(() => {
                            if (name === undefined) {
                                this.setState({ name: '하면 안돼요.' });
                            } else {
                                this.setState({ name: undefined });
                            }
							console.log(name)
                            return {
                                number: number + 1,
                                name,
                            };
                        });
                    }}
                >
                    +1
                </button>
                {name === undefined ? <h1>{String(name)}</h1> : <h1>{name}</h1>}
            </div>
        );
    }
}
export default Counter;