import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css'

const colors = ["#4fc4f6", "#a33cf2", "#e64c65", "#21b8c6", "#21c67e",]



const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title.toUpperCase()}</h2>

      <ul className={style.list}>
        {stats.map((stat, index) => {
          return (
            <li className={style.item} key={stat.id} style={{ backgroundColor: colors[index] }}>
              <span className={style.label}>{stat.label}</span>
              <span className={style.percentage}>{stat.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Statistics;