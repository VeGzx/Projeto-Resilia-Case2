import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Funcionalidades from '../pages/Funcionalidades'
import AdminFuncionalidades from '../pages/admin/AdminFuncionalidades'
import AdminSobre from '../pages/Admin/AdminSobre'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/funcionalidades" element={<Funcionalidades />} />
            <Route path="/admin/" element={<AdminFuncionalidades />} />
            <Route path="/admin/sobre" element={<AdminSobre />} />
        </Routes>
    )
}

export default Rotas