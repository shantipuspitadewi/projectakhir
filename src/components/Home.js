import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {newestProd} from '../action/index'
import {newestProdMen} from '../action/index'
import Cookies from 'universal-cookie'










export default connect (mps, {newestProd, newestProdMen}) (Home)