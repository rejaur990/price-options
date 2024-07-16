
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';



const PriceOption = ({option}) => {
    const {name,  price, features} = option;


    return (
        <div className='bg-blue-600 rounded-md p-4 flex flex-col text-white'>
        <h2 className='text-center'>
            <span className='text-7xl font-extrabold'>{price }</span>
            <span>/mon</span>

        </h2>

          <h4 className='text- 5xl text-center my-5'>{name}</h4>
          <div className='pl-6 flex-grow'>
          {
            features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
          }
          </div>
          <button className='mt-12 bg-purple-600 w-full py-4 font-bold rounded-lg hover:bg-blue-200 '>Buy Now</button>
          
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;