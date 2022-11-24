import { FeedbackStyled } from './Feedback.styled';
import { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistcs';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
        default:
        return;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${
      Math.round((good / countTotalFeedback()) * 100) || 0
    }%`;
  };

    return (
      <FeedbackStyled>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onClickBtn}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedbacks={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </FeedbackStyled>
    );
  }

export default Feedback;
