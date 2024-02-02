
import HomePage from './pages/home.page';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <HomePage />
    </PaperProvider>
  );
}
