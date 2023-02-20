import { List,Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good,neutral,bad,total,positivePercentage}) =>{
    return(
        <List >
        <Item ><p>Good:{good}</p></Item>
        <Item ><p>Neutral:{neutral}</p></Item>
        <Item ><p>Bad:{bad}</p></Item>
        <Item ><p>Total:{total}</p></Item>
        <Item ><p>Positive feedback:{positivePercentage}%</p></Item>
      </List>
    )
}



Statistics.protoType = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.func.isRequired,
  positivePercentage:PropTypes.func.isRequired
}


