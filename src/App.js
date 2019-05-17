import React, { useState } from 'react';

// Counter
// const App = () => {

//   const [count, setCount] = useState(0)

//   const handleIncrease = () => setCount(count + 1)
//   const handleDecrease = () => setCount(count - 1)
//   const handleReset = () => setCount(0)

//   return (
//     <div>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button>
//       <button onClick={handleReset}>Reset</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }

const App = () => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleCityChange = (event) => setCity(event.target.value)
  const handleCountryChange = (event) => setCountry(event.target.value)

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>

      <div>
        You live in {`${city}, ${country}` }
      </div>
    </form>
  )
}

export default App;
