import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {

    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
            <CounterControl label="Add 5" clicked={props.onAdditionCounter} />
            <CounterControl label="Subtract 5" clicked={props.onSubtractCounter} />
            <hr />
            <button onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
            <ul style={{ padding: '0', listStyle: 'none' }}>
                {
                    props.results.map((result, index) => (
                        <li key={result.id}>
                            <span>{index + 1}) Result   {result.value}</span>
                            <button style={{ margin: '5px 0px 0px 10px' }} onClick={() => { props.onDeleteResult(result.id) }}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div >
    );

}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAdditionCounter: () => dispatch(actionCreators.addition({ val: 5 })),
        onSubtractCounter: () => dispatch(actionCreators.subtraction({ val: 5 })),
        onStoreResult: (result) => dispatch(actionCreators.storeResult({ result: result })),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult({ id: id }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
