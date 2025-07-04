// src/components/ProjectCharts.tsx

import React from 'react';
import type { WomanInSportData } from '../types';
import { Race, ProfessionalArea } from '../types';
import { RACE_COLORS, PROFESSIONAL_AREA_COLORS } from '../constants';
import { 
    PieChart, Pie, Cell, Tooltip, Legend, 
    ResponsiveContainer, BarChart, Bar, XAxis, 
    YAxis, CartesianGrid 
} from 'recharts';

interface DashboardChartsProps {
    participants: WomanInSportData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-tertiary p-2 border border-brand-subtle rounded-md shadow-lg">
          <p className="label text-brand-text">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
};

export const DashboardCharts: React.FC<DashboardChartsProps> = ({ participants }) => {
    // Filtrar dados para remover entradas "Não informado" ou vazias dos gráficos
    const raceData = Object.values(Race)
        .map(race => ({
            name: race,
            value: participants.filter(p => p.race === race).length,
        }))
        .filter(item => item.value > 0);

    const professionalAreaData = Object.values(ProfessionalArea)
        .map(area => ({
            name: area,
            participantes: participants.filter(p => p.professionalArea === area).length,
        }))
        .filter(item => item.participantes > 0);

    const axisAndTextColor = '#8B949E';
    const gridColor = '#21262D';

    const renderNoData = (chartName: string) => (
        <div className="flex items-center justify-center h-full text-brand-subtle text-xs text-center p-4">
            Nenhum dado de "{chartName}" para exibir com o filtro atual.
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 h-[350px]">
            <div className="md:col-span-2 flex flex-col items-center">
                 <h3 className="text-lg font-semibold text-brand-subtle mb-2">Distribuição por Raça/Cor</h3>
                 {raceData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={raceData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value" nameKey="name">
                                {raceData.map((entry) => (
                                    <Cell key={`cell-${entry.name}`} fill={RACE_COLORS[entry.name as Race]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}}/>
                            <Legend wrapperStyle={{ color: axisAndTextColor, fontSize: '12px' }}/>
                        </PieChart>
                    </ResponsiveContainer>
                 ) : renderNoData("Raça/Cor")}
            </div>
            <div className="md:col-span-3 flex flex-col">
                <h3 className="text-lg font-semibold text-brand-subtle mb-4 text-center md:text-left">Participantes por Área de Atuação</h3>
                {professionalAreaData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={professionalAreaData} layout="vertical" margin={{ top: 5, right: 30, left: 5, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                            <XAxis type="number" stroke={axisAndTextColor} tick={{ fill: axisAndTextColor, fontSize: 12 }} allowDecimals={false} />
                            <YAxis type="category" dataKey="name" tick={false} axisLine={false} tickLine={false} width={5} />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: gridColor}}/>
                            <Legend verticalAlign="bottom" wrapperStyle={{ color: axisAndTextColor, fontSize: '12px', paddingTop: '20px' }} />
                            <Bar dataKey="participantes" radius={[0, 4, 4, 0]}>
                                {professionalAreaData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={PROFESSIONAL_AREA_COLORS[entry.name] || '#6E7681'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                ) : renderNoData("Área de Atuação")}
            </div>
        </div>
    );
};