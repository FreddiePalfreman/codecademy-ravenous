import SearchBar from './components/SearchBar';
import BusinessList from './components/Business';
import globalStyles from './bootstrap/bootstrap.min.module.css'
import cx from 'classnames'
import { useState } from 'react'
import getBusinesses from './utils/yelp'

function App() {
  const [businesses, setBusinesses] = useState([])

  const businessesHandler = async (term, location, sortBy) => {
    const businesses = await getBusinesses(term, location, sortBy)
    setBusinesses(businesses)
  }

  return (
    <div className={cx(globalStyles.container)}>
      <SearchBar onSubmit={businessesHandler}/>
      <BusinessList data={businesses}/>
    </div>
  );
}

export default App;
