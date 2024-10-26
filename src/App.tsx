import PDom from 'parallel-dom/react';
import React from 'react';

const Busy = PDom(() => import('./components/Busy'));

export const App = () => {
    const [number, setNumber] = React.useState(0);
    return <div>
        <div>hello</div>
        <Busy number={number} onSelect={(n) => setNumber(n)}>
        </Busy>
    </div>
};

export default App;
