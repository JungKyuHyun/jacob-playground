import React, { memo, StrictMode } from 'react';
import { HomeViewController } from './ViewController/HomeViewController';
import { useHomePageViewModel } from './ViewController/ViewModel/useHomePageViewModel';

const HomePage = memo(() => {
  const viewModel = useHomePageViewModel();

  return (
    <StrictMode>
      <HomeViewController viewModel={viewModel} />
    </StrictMode>
  );
});

export default HomePage;
