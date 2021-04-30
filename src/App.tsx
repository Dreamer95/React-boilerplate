import Counter from 'Modules/components/Counter';

const App = () => {
    return (
        <>
            <h1>
                Hello edited hihi Everyone - {process.env.NODE_ENV} -{' '}
                {process.env.name}
            </h1>

            <Counter />
        </>
    );
};

export default App;
