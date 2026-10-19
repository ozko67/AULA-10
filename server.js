// Servidor Express - Projeto #10: Frota de Entregas & Logística
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3010;

app.get('/api/logistica/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 10,
        sistema: "Frota de Entregas & Logística",
        categoria: "Logística & Transporte",
        tabela_conectada: process.env.TABELA_ALVO || "rastreio_cargas",
        parametro_ambiente: process.env.CENTRO_DISTRIBUICAO || "HUB_LOG_SUDESTE",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #10] Frota de Entregas & Logística rodando em http://localhost:${PORT}/api/logistica/status`);
});