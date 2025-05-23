import PropTypes from 'prop-types'
import './card.css'

function Card(prop) {
    const {
        src = 'https://www.dummyimg.in/placeholder',
        alt = 'empty card',
        title = 'This is a empty card',
        desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, consequatur. Natus vel est assumenda ducimus!'
    } = prop
    return (
        <>
            <div className="card">
                <img src={src} alt={alt} className="card-img" />
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{desc}</p>
            </div>
        </>
    )
};

// Card.defaultProps = {
//     src: '',
//     alt: '',
//     title: '',
//     desc: '',
// };

Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    // if array of objects: array:PropTypes.arratOf(PropTypes.shape({Name:PropTypes.string}))
};

export default Card