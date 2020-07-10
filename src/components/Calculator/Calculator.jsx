import React from 'react';

function Calculator({ actions, calculator }) {
    React.useEffect(() => {
        actions.fetchCalculatorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            Calculator
        </div>
    );
}

export default Calculator;
