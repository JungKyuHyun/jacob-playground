import { ViewModel } from 'core/viewModel';

export type HomePageViewModel = ViewModel<typeof useHomePageViewModel>;

export const useHomePageViewModel = () => {
  return {
    a: 'test',
  };
};
