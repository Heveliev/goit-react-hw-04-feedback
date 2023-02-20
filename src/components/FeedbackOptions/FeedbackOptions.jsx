import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({option,onLeaveFeedback})=>{
    return (<>
        {option.map(opt=><Button 
            type='button' 
            key={opt}
            onClick={onLeaveFeedback}
        >{opt}</Button>)}</>
        
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}