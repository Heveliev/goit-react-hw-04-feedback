import {useState} from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';


const options = ['Good', 'Neutral','Bad'];


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


 const countPositiveFeedbackPercentage = (evt) =>{
   const btnEvent = evt.target.textContent.toLowerCase();
   switch (btnEvent) {
    case 'good':
       setGood(prevState => prevState + 1)
       break;
     case 'neutral':
      setNeutral(prevState => prevState + 1)
       break;
     case 'bad':
      setBad(prevState => prevState + 1)
      break;
    default:
      break;
   }
 }

  const countTotalFeedback = () =>{
    return good + neutral + bad
  }
  const positivePercentage = () =>{
    return countTotalFeedback() ? Math.round((good / countTotalFeedback()) * 100) : 0;
 }

      return(<>
      <Section  title='Please leave feedback'>
      <FeedbackOptions  
        option={options}
            onLeaveFeedback={countPositiveFeedbackPercentage}
          />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() ? <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
            positivePercentage={positivePercentage}
          /> : <Notification message='There is no feedback' />}
        
      </Section>
      </>)}

export {App};