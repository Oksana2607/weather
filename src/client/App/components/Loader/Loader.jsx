import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderMain } from './styledComponents';

const LoaderPage = () => (
  <LoaderMain>
    <Loader type="ThreeDots" color="rgba(240, 207, 117, 0.9)" height={80} width={80} />
  </LoaderMain>
);

export default LoaderPage;
