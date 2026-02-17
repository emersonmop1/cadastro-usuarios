import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// APP - Componente
//createRoot -> Criar ali o que vai ser mostrado na tela
// renderizar na tela

createRoot(document.getElementById('root')).render(
    <App />
)
