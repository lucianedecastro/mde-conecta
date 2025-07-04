

import React from 'react';
import type { WomanInSportData } from '../types';
import { Race, ProfessionalArea } from '../types';
import { RACE_COLORS, PROFESSIONAL_AREA_COLORS } from '../constants';
import { 
    PieChart, 
    Pie, 
    Cell, 
    Tooltip, 
    Legend, 
    ResponsiveContainer, 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid 
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
    const raceData = Object.values(Race).map(race => ({
        name: race,
        value: participants.filter(p => p.race === race).length,
    })).filter(item => item.value > 0);

    const professionalAreaData = Object.values(ProfessionalArea).map(area => ({
        name: area,
        participantes: participants.filter(p => p.professionalArea === area).length,
    })).filter(item => item.participantes > 0);

    
    const axisAndTextColor = '#8B949E'; 
    const gridColor = '#21262D'; 

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 h-[350px]">
            <div className="md:col-span-2 flex flex-col items-center">
                 <h3 className="text-lg font-semibold text-brand-subtle mb-2">Distribuição por Raça/Cor</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={raceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8" 
                            dataKey="value"
                            nameKey="name"
                        >
                            {raceData.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={RACE_COLORS[entry.name as Race]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}}/>
                        <Legend 
                            wrapperStyle={{ color: axisAndTextColor, fontSize: '12px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="md:col-span-3 flex flex-col">
                <h3 className="text-lg font-semibold text-brand-subtle mb-4 text-center md:text-left">Participantes por Área de Atuação</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={professionalAreaData} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis 
                            type="number" 
                            stroke={axisAndTextColor} 
                            tick={{ fill: axisAndTextColor, fontSize: 12 }} 
                            allowDecimals={false} 
                        />
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            stroke={axisAndTextColor} 
                            width={100} 
                            tick={{ fill: axisAndTextColor, fontSize: 12 }} 
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: gridColor}}/>
                        <Bar dataKey="participantes" name="Participantes">
                            {professionalAreaData.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={PROFESSIONAL_AREA_COLORS[entry.name as ProfessionalArea]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};