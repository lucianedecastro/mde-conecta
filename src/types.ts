

export const Region = {
    Norte: 'Norte',
    Nordeste: 'Nordeste',
    Sul: 'Sul',
    Sudeste: 'Sudeste',
    CentroOeste: 'Centro-Oeste',
} as const;
export type Region = typeof Region[keyof typeof Region];

export const Gender = {
    MulherCis: 'Mulher Cis',
    MulherTrans: 'Mulher Trans',
    NaoBinario: 'Não-binário',
    Outro: 'Outro',
} as const;
export type Gender = typeof Gender[keyof typeof Gender];

export const SexualOrientation = {
    Heterossexual: 'Heterossexual',
    LGBQIA: 'Lésbica, Gay, Bissexual, Queer, Intersexo, Assexual+',
    PrefiroNaoDeclarar: 'Prefiro não declarar',
} as const;
export type SexualOrientation = typeof SexualOrientation[keyof typeof SexualOrientation];

export const Race = {
    Branca: 'Branca',
    Preta: 'Preta',
    Parda: 'Parda',
    Amarela: 'Amarela',
    Indigena: 'Indígena',
} as const;
export type Race = typeof Race[keyof typeof Race];

export const MaritalStatus = {
    Solteira: 'Solteira',
    Casada: 'Casada',
    Divorciada: 'Divorciada',
    Viuva: 'Viúva',
    UniaoEstavel: 'União Estável',
} as const;
export type MaritalStatus = typeof MaritalStatus[keyof typeof MaritalStatus];

export const EducationLevel = {
    Fundamental: 'Ensino Fundamental',
    Medio: 'Ensino Médio',
    SuperiorIncompleto: 'Superior Incompleto',
    SuperiorCompleto: 'Superior Completo',
    PosGraduacao: 'Pós-graduação',
    Mestrado: 'Mestrado',
    Doutorado: 'Doutorado',
} as const;
export type EducationLevel = typeof EducationLevel[keyof typeof EducationLevel];

export const ProfessionalArea = {
    Atleta: 'Atleta',
    Treinadora: 'Treinadora',
    Arbitra: 'Árbitra',
    Gestora: 'Gestora',
    ProfissionalDeSaude: 'Profissional de Saúde',
    Comunicacao: 'Comunicação',
    Marketing: 'Marketing',
    Advogada: 'Advogada',
    Outra: 'Outra',
} as const;
export type ProfessionalArea = typeof ProfessionalArea[keyof typeof ProfessionalArea];

export const WorkplaceType = {
    Clube: 'Clube',
    Federacao: 'Federação / Confederação',
    Empresa: 'Empresa Privada',
    Governo: 'Governo',
    ONG: 'ONG',
    Autonoma: 'Autônoma',
    Outro: 'Outro',
} as const;
export type WorkplaceType = typeof WorkplaceType[keyof typeof WorkplaceType];



export interface WomanInSportData {
    id: number;
    name: string;
    email: string;
    age: number;
    region: Region;
    gender: Gender;
    sexualOrientation: SexualOrientation;
    race: Race;
    maritalStatus: MaritalStatus;
    isPersonWithDisability: boolean;
    educationLevel: EducationLevel;
    professionalArea: ProfessionalArea;
    workplaceType: WorkplaceType;
}