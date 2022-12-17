import PropTypes from 'prop-types';
import { Component } from 'react';


import styles from './Feedback.module.css';
import Statistics from '../Statistics/Statistics';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickChangeValue = (event) => {
    if(event.target.id === "good"){
        this.setState((prevState) => {
            return { good: prevState.good + 1};
          });
    }
    if(event.target.id === "neutral"){
        this.setState((prevState) => {
            return { neutral: prevState.neutral + 1};
          });
    }
    if(event.target.id === "bad"){
        this.setState((prevState) => {
            return { bad: prevState.bad + 1};
          });
    }
 }

  render() {
    return (
      <>
        <section className={styles.section}>
          <h2 className={styles.title}>Please leave feedback</h2>
          <div className={styles.buttonBox} onClick={this.onClickChangeValue}>
            <button className={styles.buttonGood} id="good" >Good</button>
            <button className={styles.buttonNeutral} id="neutral" >Neutral</button>
            <button className={styles.buttonBad} id="bad" >Bad</button>
          </div>
        </section>
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        />
      </>
    );
  }
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };
