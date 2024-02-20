import React from 'react';
import globalStyles from '../bootstrap/bootstrap.min.module.css'
import cx from 'classnames'

const Business = (props) => {
    return (
        <div className={cx(globalStyles['col-xl'])}>
            <div className={cx(globalStyles.card)}>
                <img src={props.data.image} alt={props.data.name} className={cx(globalStyles['card-img-top'])}/>
                <div className={globalStyles['card-body']}>
                    <h3 className={globalStyles['card-title']}>{props.data.name}</h3>
                    <div className={globalStyles['row']}>
                        <div className={cx(globalStyles['col'], globalStyles['card-text'])}>
                            <p>
                                {props.data.address}<br />
                                {props.data.city}<br />
                                {props.data.state}<br />
                                {props.data.zipcode}
                            </p>
                        </div>
                        <div className={cx(globalStyles['col'], globalStyles['card-text'])}>
                            <h4>{props.data.category}</h4>
                            <p>{props.data.rating} stars</p>
                            <p>{props.data.review_count} reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BusinessList = (props) => {
    return (
        <div className={cx(globalStyles['mt-5'])}>
            <div className={cx(globalStyles.row)}>
                {props.data.map((business) => {
                    return <Business data={business} />
                })}
            </div>
        </div>
    )
}

export default BusinessList;