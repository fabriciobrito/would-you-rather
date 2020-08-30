import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return(
    <div className='center-align'>
      <h2>Page Not Found</h2>
      <p>Click <Link to='/'>HERE</Link> to return to the Home Page</p>
    </div>
  )
}

export default NotFound;