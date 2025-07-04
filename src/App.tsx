// src/App.tsx

import React, { useState, Suspense, useEffect, useMemo } from 'react';
import type { WomanInSportData } from './types';
// CORREÇÃO: 'EducationLevel' removido da importação pois não é mais usado
import { ProfessionalArea } from './types';
import Header from './components/Header';
import KPICard from './components/KPICard';
import DataTable from './components/ProjectTable';
// CORREÇÃO: 'AcademicCapIcon' removido da importação pois não é mais usado
import { UserGroupIcon, BriefcaseIcon, PresentationChartLineIcon } from './components/icons';

const DashboardCharts = React.lazy(() => import('./components/ProjectCharts').then(module => ({ default: module.DashboardCharts })));
const AIAssistant = React.lazy(() => import('./components/AIAssistant'));

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxpYGv5FAY5ZhY1LRDpceZJKUZ3RQb3hh55L5zixThZsW-1iHhDPEHZ01m7j3JFifVgU_XFv_TpQB3/pub?gid=1264762593&single=true&output=csv';

function parseAge(ageRange: string): number {
    if (!ageRange) return 0;
    const cleanedAge = ageRange.trim();
    if (cleanedAge.includes('60 ou mais')) return 60;
    const numbers = cleanedAge.match(/\d+/g);
    if (!numbers) return 0;
    return Number(numbers[0]); 
}

function parseCSV(csvText: string): WomanInSportData[] {
    const lines = csvText.trim().replace(/\r/g, '').split('\n').slice(1);
    const data: WomanInSportData[] = [];

    const COL_CIDADE = 2, COL_ESTADO = 3, COL_RACA = 5,
          COL_IDADE_RANGE = 6, COL_DEFICIENCIA = 7, COL_AREA_ATUACAO = 8;
    
    for (const [index, line] of lines.entries()) {
        if (!line) continue;
        const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.trim().replace(/^"|"$/g, ''));
        if (values.length < 9) continue;

        const age = parseAge(values[COL_IDADE_RANGE]);
        if (age === 0) continue;

        try {
            const participant: WomanInSportData = {
                id: `participant-${index}`,
                cidade: values[COL_CIDADE] || 'Não informado',
                estado: values[COL_ESTADO] || 'Não informado',
                age: age,
                race: values[COL_RACA] || 'Não informado',
                isPersonWithDisability: values[COL_DEFICIENCIA] === 'Sim',
                professionalArea: values[COL_AREA_ATUACAO] || 'Outra',
                educationLevel: 'Não informado',
            };
            data.push(participant);
        } catch(e) {
            console.error(`Erro ao processar a linha do CSV:`, line, e);
        }
    }
    return data;
}

const ageRanges = [
    { label: 'Todas', value: 'all' },
    { label: '16 a 25 anos', value: '16-25' },
    { label: '26 a 39 anos', 'value': '26-39' },
    { label: '40 a 59 anos', value: '40-59' },
    { label: '60 ou mais', value: '60-Infinity' },
];

const App: React.FC = () => {
    const [participants, setParticipants] = useState<WomanInSportData[]>([]);
    const [activeAgeFilter, setActiveAgeFilter] = useState<string>('all');
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    const [errorData, setErrorData] = useState<string | null>(null);

    useEffect(() => {
        fetch(SHEET_CSV_URL)
            .then(response => { if (!response.ok) throw new Error(`Falha ao buscar dados`); return response.text(); })
            .then(csvText => setParticipants(parseCSV(csvText)))
            .catch(error => { console.error(error); setErrorData(error.message); })
            .finally(() => setIsLoadingData(false));
    }, []);

    const filteredParticipants = useMemo(() => {
        if (activeAgeFilter === 'all') return participants;
        const [minStr, maxStr] = activeAgeFilter.split('-');
        const minAge = parseInt(minStr, 10);
        const maxAge = maxStr === 'Infinity' ? Infinity : parseInt(maxStr, 10);
        return participants.filter(p => p.age >= minAge && (maxAge === Infinity ? true : p.age < maxAge + 1));
    }, [participants, activeAgeFilter]);

    const { total, avgAge, managers } = useMemo(() => {
        const totalParticipants = filteredParticipants.length;
        if (totalParticipants === 0) return { total: 0, avgAge: '0.0', managers: 0 };

        const sumOfAges = filteredParticipants.reduce((sum, p) => sum + p.age, 0);
        const avgAgeValue = (sumOfAges / totalParticipants).toFixed(1);
        
        const managersCount = filteredParticipants.filter(p => p.professionalArea === ProfessionalArea.Gestora).length;

        return { total: totalParticipants, avgAge: avgAgeValue, managers: managersCount };
    }, [filteredParticipants]);

    const LoadingSpinner: React.FC = () => (
        <div className="flex items-center justify-center h-screen bg-brand-primary">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-brand-accent"></div>
        </div>
    );

    if (isLoadingData) return <LoadingSpinner />;

    if (errorData) return (
        <div className="flex flex-col items-center justify-center h-screen bg-brand-primary text-center p-8">
            <h2 className="text-2xl font-bold text-status-red mb-4">Ocorreu um Erro</h2>
            <p className="text-brand-subtle max-w-md">{errorData}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-brand-primary font-sans">
            <Header />
            <main className="p-4 sm:p-6 lg:p-8 space-y-8">
                <section>
                    <div className="flex flex-wrap items-center gap-2 bg-brand-secondary p-3 rounded-lg border border-brand-tertiary">
                        <span className="text-brand-subtle font-medium mr-2">Idade:</span>
                        {ageRanges.map(range => (
                            <button
                                key={range.value}
                                onClick={() => setActiveAgeFilter(range.value)}
                                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${activeAgeFilter === range.value ? 'bg-brand-accent text-white shadow-md' : 'bg-brand-tertiary text-brand-subtle hover:bg-gray-700'}`}
                            >{range.label}</button>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <KPICard title="Total de Participantes" value={total} icon={<UserGroupIcon className="w-8 h-8 text-brand-subtle" />} />
                        <KPICard title="Idade Média" value={avgAge} icon={<PresentationChartLineIcon className="w-8 h-8 text-status-blue" />} />
                        <KPICard title="Total de Gestoras" value={managers} icon={<BriefcaseIcon className="w-8 h-8 text-status-green" />} />
                    </div>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-brand-secondary p-6 rounded-lg shadow-lg border border-brand-tertiary">
                       <h2 className="text-xl font-bold mb-4 text-brand-text">Análise de Dados Visuais</h2>
                       <Suspense fallback={<LoadingSpinner />}>
                           <DashboardCharts participants={filteredParticipants} />
                       </Suspense>
                    </div>
                    <div className="lg:col-span-1">
                        <Suspense fallback={<LoadingSpinner />}>
                            <AIAssistant participants={filteredParticipants} />
                        </Suspense>
                    </div>
                </section>
                <section>
                    <DataTable participants={filteredParticipants} />
                </section>
            </main>
        </div>
    );
};

export default App;