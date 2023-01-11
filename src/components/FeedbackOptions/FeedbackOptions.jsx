import React from "react";
import PropTypes from 'prop-types';
import { ButtonContainer, Button } from "./Feedback.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer className='Feedback__list'>
    {options.map((option, index) => (
      <Button key={index} type="button" className='Feedback__btn' onClick={() => onLeaveFeedback(option)}>{option}</Button>
      ))}
    </ButtonContainer>    
);


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};