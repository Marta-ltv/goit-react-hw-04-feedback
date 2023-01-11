import React from "react";
import PropTypes from 'prop-types';
import { MessageInfo } from "./Notification.styled";


export const Notification = ({ message }) =>
    <MessageInfo>{message}</MessageInfo>;

    
Notification.propTypes = {
    message: PropTypes.string.isRequired,
};