import {Counter} from './module/components/Counter'

export const App = () => {
    return (
        <>
            <h1>Hello edited hihi Everyone - {process.env.NODE_ENV} - {process.env.name}</h1>
            <Counter/>
        </>
    )
}
