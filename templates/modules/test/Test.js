import React from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementByAmount } from './testSlice';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    onIncrement = () => {
        const { incrementPat } = this.props;
        incrementPat();
    }

    onDecrement = () => {
        const { decrementPat } = this.props;
        decrementPat();
    }

    onIncrementByAmount = () => {
        const { incrementByAmountPat } = this.props;
        incrementByAmountPat(5);
    }

    render() {
        return (
            <section className="test-module">
                <div>value: {JSON.stringify(this.props)}</div>
                <button onClick={this.onIncrement}>increment</button>
                <button onClick={this.onDecrement}>decrement</button>
                <button onClick={this.onIncrementByAmount}>incrementByAmount</button>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.test,
})

const mapDispatchToProps = (dispatch) => ({
    incrementPat: () => {
        dispatch(increment())
    },
    decrementPat: () => {
        dispatch(decrement())
    },
    incrementByAmountPat: (value) => {
        dispatch(incrementByAmount(value))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Test);


