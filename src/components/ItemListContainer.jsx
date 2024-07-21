import PropTypes from 'prop-types';

const ItemListContainer = (props) => {
    return (
        <div className='ItemListContainer'>
            <h2>{props.greeting}</h2>
            {/* Aquí irá la lista de productos */}
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;