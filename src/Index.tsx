import App from "./App";
import { createRoot } from 'react-dom/client';
import './styles.css'

const domNode: HTMLElement = document.getElementById('root')!;
const root = createRoot(domNode);
root.render(<App />);