
import React from 'react';

interface KPICardProps {
    title: string;
    value: number | string;
    icon: React.ReactNode;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon }) => {
    return (
        <div className="bg-brand-secondary p-5 rounded-lg shadow-lg border border-brand-tertiary flex items-center space-x-4 transition-transform transform hover:scale-105">
            <div className="flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-brand-subtle">{title}</p>
                <p className="text-2xl font-bold text-brand-text">{value}</p>
            </div>
        </div>
    );
};

export default KPICard;