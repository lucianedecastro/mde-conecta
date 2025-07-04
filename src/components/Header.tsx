import React from 'react';
import { MdeConectaLogo, PlusCircleIcon } from './icons';

const Header: React.FC = () => {
    return (
        <header className="bg-brand-secondary border-b border-brand-tertiary shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-3">
                       <MdeConectaLogo className="h-10 w-auto text-brand-accent" />
                       <div>
                            <span className="text-2xl font-bold text-brand-text block">MDE Conecta</span>
                            <span className="text-xs font-light text-brand-subtle block -mt-1">Lab Hub Mulheres do Esporte</span>
                       </div>
                    </div>
                    <div className="flex items-center">
                         <a 
                            href="https://docs.google.com/forms/d/1cloX0kfjjnFoEd7oUc9LcslE61O6IlrN8yG4T1hwprs/viewform" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 bg-brand-accent text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300 shadow-sm"
                        >
                            <PlusCircleIcon className="w-5 h-5" />
                            <span className="text-sm font-medium">Adicionar Dados</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;