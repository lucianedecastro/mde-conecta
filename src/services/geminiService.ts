
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { WomanInSportData } from '../types';


const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
    throw new Error("A variável de ambiente VITE_API_KEY não foi definida. Crie um arquivo .env.local na raiz do projeto e adicione VITE_API_KEY=sua_chave_aqui.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const systemInstruction = `
    Você é um analista de dados sênior, especialista em diversidade e inclusão, atuando no BI do 'Lab Hub Mulheres do Esporte' da MDE Conecta.
    Sua principal tarefa é analisar os dados sobre mulheres profissionais do esporte no Brasil, fornecidos em formato JSON, e gerar relatórios claros, concisos e com insights valiosos, conforme a solicitação do usuário.
    Os dados incluem: idade, região, gênero, orientação sexual, raça/cor, estado civil, se é pessoa com deficiência (PCD), nível de escolaridade, área profissional e tipo de local de trabalho.
    Responda sempre em português do Brasil.
    Seja objetivo e foque nos insights mais importantes, utilizando uma linguagem inclusiva e respeitosa.
    Formate sua resposta usando markdown para garantir a melhor legibilidade (títulos, listas, negrito, etc.).
    Hoje é ${new Date().toLocaleDateString('pt-BR')}.
`;

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction,
});

export const generateReport = async (participants: WomanInSportData[], userPrompt: string): Promise<string> => {
    const fullPrompt = `
        **Dados das Participantes:**
        \`\`\`json
        ${JSON.stringify(participants, null, 2)}
        \`\`\`

        **Solicitação do Usuário:**
        "${userPrompt}"

        **Seu Relatório Analítico:**
    `;

    try {
        const result = await model.generateContent(fullPrompt);
        const response = result.response;
        const text = response.text();
        
        return text;

    } catch (error) {
        console.error("Erro ao gerar relatório com o Gemini:", error);
        if (error instanceof Error) {
            if (error.message.includes('API key not valid')) {
                return "Erro: A chave de API fornecida não é válida. Verifique seu arquivo .env.local.";
            }
            return `Ocorreu um erro ao gerar o relatório: ${error.message}. Verifique o console para mais detalhes.`;
        }
        return "Ocorreu um erro desconhecido ao gerar o relatório.";
    }
};