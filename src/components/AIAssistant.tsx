// src/components/AIAssistant.tsx

import React, { useState } from 'react';
import type { WomanInSportData } from '../types';
import { generateReport } from '../services/geminiService';
import { SparklesIcon, PaperAirplaneIcon } from './icons';
import ReactMarkdown from 'react-markdown';

interface AIAssistantProps {
    participants: WomanInSportData[];
}

const AIAssistant: React.FC<AIAssistantProps> = ({ participants }) => {
    const [prompt, setPrompt] = useState<string>('');
    const [report, setReport] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [showReport, setShowReport] = useState<boolean>(false);

    const handleGenerateReport = async () => {
        if (!prompt.trim()) {
            setError('Por favor, insira uma solicitação.');
            return;
        }
        setIsLoading(true);
        setError('');
        setReport('');
        setShowReport(true);

        try {
            const result = await generateReport(participants, prompt);
            setReport(result);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.';
            setError(`Falha ao gerar relatório: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSuggestionClick = (suggestion: string) => {
        setPrompt(suggestion);
    }

    // Sugestão de prompt sobre escolaridade foi removida
    const suggestionPrompts = [
        "Compare a distribuição de raça entre atletas e gestoras.",
        "Liste as participantes PCD e suas áreas de atuação.",
        "Gere um resumo executivo sobre o perfil das participantes.",
    ];
    
    return (
        <div className="bg-brand-secondary p-6 rounded-lg shadow-lg border border-brand-tertiary flex flex-col">
            <div className="flex items-center mb-4">
                <SparklesIcon className="w-6 h-6 text-brand-accent mr-3" />
                <h2 className="text-xl font-bold text-brand-text">Assistente IA de Relatórios</h2>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="relative mb-4">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ex: 'Qual a distribuição de gênero por área de atuação?'"
                        className="w-full p-3 pr-12 bg-brand-tertiary border border-brand-subtle rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none text-brand-text resize-none"
                        rows={3}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerateReport}
                        disabled={isLoading}
                        className="absolute right-3 top-3 text-brand-subtle hover:text-brand-accent disabled:text-gray-500 disabled:cursor-not-allowed"
                    >
                        <PaperAirplaneIcon className="w-6 h-6" />
                    </button>
                </div>
                 <div className="mb-4">
                    <p className="text-xs text-brand-subtle mb-2">Sugestões:</p>
                    <div className="flex flex-wrap gap-2">
                        {suggestionPrompts.map((s, i) => (
                             <button key={i} onClick={() => handleSuggestionClick(s)} disabled={isLoading} className="text-xs bg-brand-tertiary hover:bg-gray-700 text-brand-subtle px-2 py-1 rounded-md transition-colors">
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-grow bg-brand-primary rounded-md p-4 overflow-y-auto min-h-[200px] text-brand-text">
                    {isLoading && (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent"></div>
                            <p className="ml-3 text-brand-subtle">Gerando relatório...</p>
                        </div>
                    )}
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    
                    {showReport && !isLoading && report && (
                         <ReactMarkdown
                            components={{
                                div: ({ node, ...props }) => (
                                    <div className="prose prose-sm prose-invert max-w-none" {...props} />
                                ),
                            }}
                        >
                            {report}
                        </ReactMarkdown>
                    )}

                     {!showReport && !isLoading && !error && (
                        <div className="text-center text-brand-subtle h-full flex items-center justify-center">
                            <p>Seu relatório gerado por IA aparecerá aqui.</p>
                        </div>
                     )}
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;