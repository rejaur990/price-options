import PropTypes from 'prop-types';
//import { IconName } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className='ml-10'>
           <p className='text-center flex items-center '> <AiFillCaretRight className='text-lime-400 mr-4'></AiFillCaretRight> {feature}</p>
            
        </div>
    );
};
 Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;
