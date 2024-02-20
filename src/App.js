import './App.css';
import SearchBar from './components/SearchBar';
import BusinessList from './components/Business';
import globalStyles from './bootstrap/bootstrap.min.module.css'
import cx from 'classnames'

function App() {
  return (
    <div className={cx(globalStyles.container)}>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
