import './App.css';
import { useState, useEffect } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Section } from './components/Section';
import { Notification } from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedbackPercentage, setPercentage] = useState(0);

  const onButtonClick = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTotalFeedback(good + bad + neutral);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage(Math.round((good * 100) / totalFeedback));
  }, [totalFeedback]);

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
