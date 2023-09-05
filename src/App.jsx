import React, {useState} from "react"

function App() {

  const [count, setCount] = useState(0)


  return (
    
    <main id="principal">
        <section id="container">
            <section id="count-container">
              <h1>Counter</h1>
              <span id="value">{count}</span>
            </section>
            <section className="button-div">
                <button className="btn decrease" onClick={() => setCount(count - 1)}>DECREASE</button>
                <button className="btn reset" onClick={() => setCount(0)}>RESET</button>
                <button className="btn increase" onClick={() => setCount(count+ 1)}>INCREASE</button>
            </section>
        </section>
    </main>

  )
}

export default App
