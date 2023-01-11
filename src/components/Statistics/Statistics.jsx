import React from "react";
import PropTypes from 'prop-types';
import { StatList, StatItem, StatSpan } from "./Statistics.styled";


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatList>
        <StatItem>Good:<StatSpan>{good}</StatSpan></StatItem>
        <StatItem>Neutral:<StatSpan>{neutral}</StatSpan></StatItem>
        <StatItem>Bad:<StatSpan>{bad}</StatSpan></StatItem>
        <StatItem>Total:<StatSpan>{total}</StatSpan></StatItem>
        <StatItem>Positive feedback:<StatSpan>{positivePercentage}%</StatSpan></StatItem>
    </StatList>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};