import { ViewModel } from './viewModel';

export type ViewController<T extends ViewModel<any>> = React.FC<{ viewModel: T }>;
