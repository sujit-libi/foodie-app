import './global.css';
import Navigation from './navigation';

import { store } from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
