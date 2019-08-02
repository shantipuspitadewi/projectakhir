import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';











export default connect (mapsStateToProps, {onSetTimeOut, onLoginClick})(Login);