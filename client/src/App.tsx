import React, { memo } from 'react';
import Routers from './routers/Routers';
import { Footer, Header } from 'components/commonLayout';

const App = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default memo(App);
