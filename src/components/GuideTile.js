import React from 'react'
import {Link} from 'react-router-dom'

const GuideTile = (props) => {
    let guide = props;
    return (
        <div className="guideD">
            <p>
                <Link className="guide_tile" to={`guide/${guide.id}`} title={guide.name}> {guide.name}</Link>
            </p>
        </div>
    )
}

export default GuideTile