import React from 'react'
import {Link,useRouteError} from 'react-router-dom'
const Error = () => {

    // const error = useRouteError(); // To detect Diffrent type of error 
    // console.log(error)
  return (
    <h1>
      Error Page...

      <Link to="/">Back Home</Link>
    </h1>
  )
}

export default Error
