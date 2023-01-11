import { useState, useEffect } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification'; 
import { Section } from 'components/Section/Section';


export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addGood = () => {
    setGood(prevState => prevState + 1);
  };

   const addNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

   const addBad = () => {
    setBad(prevState => prevState + 1);
  };

  const onHandleFeedback = evt => {
    switch (evt) {
      case 'good':
        addGood();
        break;
      case 'neutral':
        addNeutral();
        break;
      case 'bad':
        addBad();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    setTotal(total);
  }, [good, neutral, bad])
 

  const countPositivePercentage = () => {
    const positiveFeedback = (good * 100 ) / total;
    return Math.round(positiveFeedback);
  };

    return (
      <div>
        <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={onHandleFeedback} />
        </Section>
      
        <Section title='Statistics'>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()} />
        ) : (<Notification message="There is no feedback" />)}
      </Section>
      </div>
    );
}

