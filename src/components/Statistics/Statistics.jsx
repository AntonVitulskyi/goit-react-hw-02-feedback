// import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export default function Statistics({ good, neutral, bad }) {
  let positiveFeedback = 0;
  let totalVotes = good + neutral + bad;
  positiveFeedback = Math.round((good / totalVotes) * 100);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          Good:
          <span className={styles.value}>{good}</span>
        </li>
        <li className={styles.item}>
          Neutral:
          <span className={styles.value}>{neutral}</span>
        </li>
        <li className={styles.item}>
          Bad:
          <span className={styles.value}>{bad}</span>
        </li>
        <li className={styles.item}>
          Total:
          <span className={styles.value}>{totalVotes}</span>
        </li>
        <li className={styles.item}>
          Positive feedback:
          <span className={styles.value}>
            {positiveFeedback ? positiveFeedback : 0}%
          </span>
        </li>
      </ul>
    </section>
  );
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
