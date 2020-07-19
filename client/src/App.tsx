import React, { memo } from 'react';
import RouteWrapper from './routers/RouteWrapper';
import { Footer, Header } from 'components/commonLayout';

const App = () => {
  return <RouteWrapper header={<Header />} footer={<Footer />} />;
};

export default memo(App);
