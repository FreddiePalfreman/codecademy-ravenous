import SearchBar from './components/SearchBar';
import BusinessList from './components/Business';
import globalStyles from './bootstrap/bootstrap.min.module.css'
import cx from 'classnames'
import { businesses } from './businesses'

function App() {
  return (
    <div className={cx(globalStyles.container)}>
      <SearchBar />
      <BusinessList data={businesses}/>
    </div>
  );
}

export default App;
