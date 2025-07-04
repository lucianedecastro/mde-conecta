

import React, { useState, Suspense, useEffect, useMemo } from 'react';
import type { WomanInSportData } from './types';
import { ProfessionalArea, EducationLevel } from './types';
import Header from './components/Header';
import KPICard from './components/KPICard';
import DataTable from './components/ProjectTable';
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon, PresentationChartLineIcon } from './components/icons';
import { MOCK_WOMEN_IN_SPORT } from './constants';


const DashboardCharts = React.lazy(() => import('./components/ProjectCharts').then(module => ({ default: module.DashboardCharts })));
const AIAssistant = React.lazy(() => import('./components/AIAssistant'));

const App: React.FC = () => {
    const [participants, setParticipants] = useState<WomanInSportData[]>([]);

    useEffect(() => {
        
        setParticipants(MOCK_WOMEN_IN_SPORT);
    }, []);

    
    const { total, avgAge, higherEducation, managers } = useMemo(() => {
        const totalParticipants = participants.length;

        if (totalParticipants === 0) {
            return { total: 0, avgAge: '0.0', higherEducation: 0, managers: 0 };
        }

        const sumOfAges = participants.reduce((sum, p) => sum + p.age, 0);
        const avgAgeValue = (sumOfAges / totalParticipants).toFixed(1);
        
        
        const higherEducationLevels: EducationLevel[] = [
            EducationLevel.SuperiorCompleto, 
            EducationLevel.PosGraduacao, 
            EducationLevel.Mestrado, 
            EducationLevel.Doutorado
        ];
        
        const higherEducationCount = participants.filter(p => 
            higherEducationLevels.includes(p.educationLevel)
        ).length;

        const managersCount = participants.filter(p => p.professionalArea === ProfessionalArea.Gestora).length;

        return { 
            total: totalParticipants, 
            avgAge: avgAgeValue, 
            higherEducation: higherEducationCount, 
            managers: managersCount 
        };
    }, [participants]);

    const higherEducationPercentage = useMemo(() => {
        if (total === 0) {
            return '0';
        }
        return ((higherEducation / total) * 100).toFixed(0);
    }, [higherEducation, total]);

    
    const LoadingSpinner: React.FC = () => (
        <div className="flex items-center justify-center h-full min-h-[350px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-brand-primary font-sans">
            <Header />
            <main className="p-4 sm:p-6 lg:p-8 space-y-8">
                {/* KPI Section */}
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <KPICard title="Total de Participantes" value={total} icon={<UserGroupIcon className="w-8 h-8 text-brand-subtle" />} />
                        <KPICard title="Idade Média" value={avgAge} icon={<PresentationChartLineIcon className="w-8 h-8 text-status-blue" />} />
                        <KPICard title="% com Ensino Superior" value={`${higherEducationPercentage}%`} icon={<AcademicCapIcon className="w-8 h-8 text-status-purple" />} />
                        <KPICard title="Total de Gestoras" value={managers} icon={<BriefcaseIcon className="w-8 h-8 text-status-green" />} />
                    </div>
                </section>

                {/* Main Dashboard Area: Charts and AI */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-brand-secondary p-6 rounded-lg shadow-lg border border-brand-tertiary">
                       <h2 className="text-xl font-bold mb-4 text-brand-text">Análise de Dados Visuais</h2>
                       <Suspense fallback={<LoadingSpinner />}>
                           <DashboardCharts participants={participants} />
                       </Suspense>
                    </div>
                    <div className="lg:col-span-1">
                        <Suspense fallback={<LoadingSpinner />}>
                            <AIAssistant participants={participants} />
                        </Suspense>
                    </div>
                </section>
                
                {/* Data Details Table Section */}
                <section>
                    <DataTable participants={participants} />
                </section>
            </main>
        </div>
    );
};

export default App;