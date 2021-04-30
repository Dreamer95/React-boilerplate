import { Counter } from './module/components/Counter'

export const App = () => {
  const dong = 'trang'
  return (
    <>
          <h1>
          Hello edited hihi Everyone - {process.env.NODE_ENV} - {process.env.name}
          </h1>

          <Counter />
    </>
  )
}
