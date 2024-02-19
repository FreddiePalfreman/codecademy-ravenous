import React from 'react';
import globalStyles from '../bootstrap.min.module.css'
import cx from 'classnames'

const old_bar = {
    'image': 'https://www.luu.org.uk/wp-content/uploads/2020/06/Old-Bar-Pool-Table.jpg',
    'name': 'Old Bar',
    'address': 'Leeds University Union, Lifton Place',
    'city': 'Leeds',
    'state': 'West Yorkshire',
    'zipcode': 'LS2 9JZ',
    'category': 'Bar',
    'rating': 4.5,
    'review_count': 100
}

const Business = () => {
    return (
        <div className={cx(globalStyles.card, globalStyles['col-lg'])}>
            <img src={old_bar.image} alt={old_bar.name} className={cx(globalStyles['card-img-top'], globalStyles['img-fluid'])}/>
            <div className={globalStyles['card-body']}>
                <h3 className={globalStyles['card-title']}>{old_bar.name}</h3>
                <div className={globalStyles['row']}>
                    <div className={cx(globalStyles['col'], globalStyles['card-text'])}>
                        <p>
                            {old_bar.address}<br />
                            {old_bar.city}<br />
                            {old_bar.state}<br />
                            {old_bar.zipcode}
                        </p>
                    </div>
                    <div className={cx(globalStyles['col'], globalStyles['card-text'])}>
                        <h4>{old_bar.category}</h4>
                        <p>{old_bar.rating} stars</p>
                        <p>{old_bar.review_count} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BusinessList = () => {
    return (
        <div className={cx(globalStyles.container, globalStyles.row, globalStyles['m-5'])}>
            <Business />
            <Business />
            <Business />
        </div>
    )
}

export default BusinessList;