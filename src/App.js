import './App.css';
import { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Section } from './components/Section';
import { Notification } from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const stateArr = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    console.log(totalFeedback);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateArr}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {!totalFeedback ? (
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
  }
}

export default App;
