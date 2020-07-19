import React, { memo } from 'react';
import { HomePageViewModel } from './ViewModel/useHomePageViewModel';
import { ViewController } from 'core/viewController';

export const HomeViewController: ViewController<HomePageViewModel> = memo(({ viewModel }) => {
  return <>홈페이지할끄야</>;
});
