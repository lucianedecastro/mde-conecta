// src/components/ProjectTable.tsx

import React from 'react';
import type { WomanInSportData } from '../types';
import { Race, ProfessionalArea } from '../types';
import { RACE_COLORS, PROFESSIONAL_AREA_COLORS } from '../constants';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface DataTableProps {
    participants: WomanInSportData[];
}

const ColorBadge: React.FC<{ value: string, color: string }> = ({ value, color }) => (
    <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: `${color}20`, color: color }}>
        {value}
    </span>
);

const DataTable: React.FC<DataTableProps> = ({ participants }) => {
    return (
        <div className="bg-brand-secondary rounded-lg shadow-lg border border-brand-tertiary overflow-hidden">
             <div className="p-6">
                <h2 className="text-xl font-bold text-brand-text">Detalhamento das Participantes</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-brand-tertiary">
                    <thead className="bg-brand-secondary">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-subtle uppercase tracking-wider">Raça/Cor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-subtle uppercase tracking-wider">Área de Atuação</th>
                            {/* Coluna de Escolaridade foi removida da visualização */}
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-brand-subtle uppercase tracking-wider">PCD</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-subtle uppercase tracking-wider">Localização</th>
                        </tr>
                    </thead>
                    <tbody className="bg-brand-secondary divide-y divide-brand-tertiary">
                        {participants.map((data) => (
                            <tr key={data.id} className="hover:bg-brand-tertiary transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {data.race && data.race !== 'Não informado' ? (
                                        <ColorBadge value={data.race} color={RACE_COLORS[data.race as Race] || '#6E7681'} />
                                    ) : (
                                        <span className="text-brand-subtle text-xs">Não informado</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <ColorBadge value={data.professionalArea} color={PROFESSIONAL_AREA_COLORS[data.professionalArea as ProfessionalArea] || '#6E7681'} />
                                </td>
                                {/* Célula de Escolaridade foi removida da visualização */}
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    {data.isPersonWithDisability
                                        ? <CheckCircleIcon className="w-6 h-6 text-status-green mx-auto" title="Sim" /> 
                                        : <XCircleIcon className="w-6 h-6 text-status-red mx-auto" title="Não" />
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-subtle">{`${data.cidade} - ${data.estado}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;