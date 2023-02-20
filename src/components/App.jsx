import React from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';


const options = ['Good', 'Neutral','Bad'];


class App extends React.Component{

state = {
  good: 0,
  neutral: 0,
  bad: 0
};


countPositiveFeedbackPercentage = (evt)=>{
 const btnEvent = evt.target.textContent.toLowerCase();
 this.setState(prevState=>{
  return {[btnEvent]: prevState[btnEvent] + 1}

 })
}
countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad
 }
 positivePercentage= () =>{
  return this.countTotalFeedback() ? Math.round((this.state.good / this.countTotalFeedback()) * 100) : 0
 }

render(){
  const {good,neutral,bad} = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.positivePercentage();

    return(<>
      <Section  title='Please leave feedback'>
      <FeedbackOptions  
        option={options}
        onLeaveFeedback={this.countPositiveFeedbackPercentage}/>
      </Section>
      <Section title='Statistics'>
        {total ? <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}/> : <Notification message='There is no feedback'/>}
        
      </Section>
      </>)}
    };

export {App};