import App from "./App";
import { createRoot } from 'react-dom/client';
import  './styles.css'

const domNode: HTMLElement | null = document.getElementById('root');
if (domNode !== null) {
  const root = createRoot(domNode);
  root.render(<App/>);
} else {
  console.error('Could not find root element');
}
