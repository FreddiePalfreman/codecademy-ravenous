import React from "react";
import globalStyles from '../bootstrap/bootstrap.min.module.css'
import cx from 'classnames'

const SearchBar = () => {
    return (
        <div className={cx(globalStyles.container, globalStyles['mt-5'])}>
            <div className={cx(globalStyles.row, globalStyles.container, globalStyles['text-center'])}>
                <div className={globalStyles['col']}>
                    <button className={globalStyles.btn}>Best Match</button>
                </div>
                <div className={globalStyles['col']}>
                    <button className={globalStyles.btn}>Highest Rated</button>
                </div>
                <div className={globalStyles['col']}>
                    <button className={globalStyles.btn}>Most Reviewed</button>
                </div>
            </div>
            <form className={globalStyles.row}>
                <input className={cx(globalStyles['form-control'], globalStyles.col)} placeholder="Search Businesses" />
                <input className={cx(globalStyles['form-control'], globalStyles.col)} placeholder="Where?" />
                <button type="submit" className={cx(globalStyles.btn, globalStyles['btn-primary'], globalStyles.col)}>Let's Go</button>
            </form>
        </div>
    )
}

export default SearchBar;