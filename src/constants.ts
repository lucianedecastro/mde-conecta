// src/constants.ts

import { Race, ProfessionalArea } from './types';

export const RACE_COLORS: { [key in Race]: string } = {
    [Race.Branca]: '#4B88A2',
    [Race.Preta]: '#D36135',
    [Race.Parda]: '#A44A3F',
    [Race.Amarela]: '#F2B705',
    [Race.Indigena]: '#8C4E3D',
};

export const PROFESSIONAL_AREA_COLORS: { [key in ProfessionalArea | string]: string } = {
    [ProfessionalArea.Atleta]: '#388BFD',
    [ProfessionalArea.ExAtleta]: '#A371F7',
    [ProfessionalArea.Comunicacao]: '#E05D97',
    [ProfessionalArea.Saude]: '#238636',
    [ProfessionalArea.Mercado]: '#DA3633',
    [ProfessionalArea.MercadoEducadora]: '#DA33C5',
    [ProfessionalArea.Gestora]: '#D29922',
    [ProfessionalArea.Outra]: '#6E7681',
};