import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount,
        };

    }
    
    addCount =() => {
        this.setState({
            count: this.state.count +1
        });
    };

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>+1</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    initCount: 0,
};

Counter.propTypes = {
    initCount: PropTypes.number,
};

export default Counter;