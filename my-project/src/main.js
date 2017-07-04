import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Test from './Test';

document.addEventListener('DOMContentLoaded', function() {
    // ReactDOM.render(
    //     React.createElement(Counter),
    //     document.getElementById('mount')
    // );


    // ReactDOM.render(
    //     React.createElement(Test),
    //     document.getElementById('mount')
    // );

    ReactDOM.render(<div>
        <Counter/>
        <Test/>
    </div>, document.getElementById("mount"));
});