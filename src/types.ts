// src/types.ts

// Tipos harmonizados com os dados reais do seu CSV.

export const Race = {
    Branca: 'Branca',
    Preta: 'Preta',
    Parda: 'Parda',
    Amarela: 'Amarela',
    Indigena: 'Indígena',
} as const;
export type Race = typeof Race[keyof typeof Race];

export const EducationLevel = {
    Medio: 'Ensino médio/técnico',
    Graduacao: 'Graduação',
    PosGraduacao: 'Pós-graduação (Mestrado/Doutorado)',
} as const;
export type EducationLevel = typeof EducationLevel[keyof typeof EducationLevel];

export const ProfessionalArea = {
    Atleta: 'Atleta (ativa)',
    ExAtleta: 'Ex-Atleta (aposentada)',
    Comunicacao: 'Profissional de Comunicação (jornalista esportivo, social media, radialista, etc.)',
    Saude: 'Profissional da Saúde (médicas, fisioterapeutas, psicólogas, etc.)',
    // O CSV tem duas versões para "Mercado", precisamos de ambas
    Mercado: 'Profissional de Mercado (dona de empresas do mercado esportivo, venda de produtos e acessórios esportivos)',
    MercadoEducadora: 'Profissional de Mercado (dona de empresas do mercado esportivo, venda de produtos e acessórios esportivos, educadora, etc.)',
    Gestora: 'Gestora',
    Outra: 'Outra',
} as const;
export type ProfessionalArea = typeof ProfessionalArea[keyof typeof ProfessionalArea];

// Interface principal ATUALIZADA para refletir o CSV real
export interface WomanInSportData {
    id: string; 
    cidade: string;
    estado: string;
    age: number;
    race: Race | string;
    isPersonWithDisability: boolean;
    educationLevel: EducationLevel | string;
    professionalArea: ProfessionalArea | string;
    // Removidos campos que não estão na planilha final para simplificar
}