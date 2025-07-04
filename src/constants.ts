
import type { WomanInSportData } from './types';
import { Region, Gender, SexualOrientation, Race, MaritalStatus, EducationLevel, ProfessionalArea, WorkplaceType } from './types';

export const MOCK_WOMEN_IN_SPORT: WomanInSportData[] = [
    { id: 1, name: 'Ana Silva', email: 'ana.silva@example.com', age: 28, region: Region.Sudeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.Heterossexual, race: Race.Branca, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: false, educationLevel: EducationLevel.SuperiorCompleto, professionalArea: ProfessionalArea.Atleta, workplaceType: WorkplaceType.Clube },
    { id: 2, name: 'Beatriz Costa', email: 'beatriz.costa@example.com', age: 35, region: Region.Nordeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.LGBQIA, race: Race.Preta, maritalStatus: MaritalStatus.Casada, isPersonWithDisability: false, educationLevel: EducationLevel.PosGraduacao, professionalArea: ProfessionalArea.Gestora, workplaceType: WorkplaceType.Federacao },
    { id: 3, name: 'Carla Martins', email: 'carla.martins@example.com', age: 42, region: Region.Sul, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.Heterossexual, race: Race.Parda, maritalStatus: MaritalStatus.Divorciada, isPersonWithDisability: false, educationLevel: EducationLevel.Mestrado, professionalArea: ProfessionalArea.Treinadora, workplaceType: WorkplaceType.Clube },
    { id: 4, name: 'Daniela Ferreira', email: 'daniela.ferreira@example.com', age: 25, region: Region.Norte, gender: Gender.MulherTrans, sexualOrientation: SexualOrientation.LGBQIA, race: Race.Indigena, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: false, educationLevel: EducationLevel.SuperiorIncompleto, professionalArea: ProfessionalArea.Atleta, workplaceType: WorkplaceType.ONG },
    { id: 5, name: 'Eduarda Lima', email: 'eduarda.lima@example.com', age: 31, region: Region.CentroOeste, gender: Gender.NaoBinario, sexualOrientation: SexualOrientation.LGBQIA, race: Race.Amarela, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: true, educationLevel: EducationLevel.SuperiorCompleto, professionalArea: ProfessionalArea.Comunicacao, workplaceType: WorkplaceType.Empresa },
    { id: 6, name: 'Fernanda Souza', email: 'fernanda.souza@example.com', age: 45, region: Region.Sudeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.Heterossexual, race: Race.Preta, maritalStatus: MaritalStatus.Casada, isPersonWithDisability: false, educationLevel: EducationLevel.Doutorado, professionalArea: ProfessionalArea.ProfissionalDeSaude, workplaceType: WorkplaceType.Governo },
    { id: 7, name: 'Gabriela Alves', email: 'gabriela.alves@example.com', age: 29, region: Region.Nordeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.Heterossexual, race: Race.Parda, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: false, educationLevel: EducationLevel.SuperiorCompleto, professionalArea: ProfessionalArea.Advogada, workplaceType: WorkplaceType.Autonoma },
    { id: 8, name: 'Heloísa Pereira', email: 'heloisa.pereira@example.com', age: 38, region: Region.Sul, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.LGBQIA, race: Race.Branca, maritalStatus: MaritalStatus.UniaoEstavel, isPersonWithDisability: false, educationLevel: EducationLevel.PosGraduacao, professionalArea: ProfessionalArea.Gestora, workplaceType: WorkplaceType.Empresa },
    { id: 9, name: 'Isabela Barros', email: 'isabela.barros@example.com', age: 22, region: Region.Sudeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.PrefiroNaoDeclarar, race: Race.Branca, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: false, educationLevel: EducationLevel.Medio, professionalArea: ProfessionalArea.Atleta, workplaceType: WorkplaceType.Clube },
    { id: 10, name: 'Juliana Ribeiro', email: 'juliana.ribeiro@example.com', age: 33, region: Region.Nordeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.Heterossexual, race: Race.Preta, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: false, educationLevel: EducationLevel.SuperiorCompleto, professionalArea: ProfessionalArea.Marketing, workplaceType: WorkplaceType.Empresa },
    { id: 11, name: 'Larissa Azevedo', email: 'larissa.azevedo@example.com', age: 39, region: Region.CentroOeste, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.Heterossexual, race: Race.Parda, maritalStatus: MaritalStatus.Casada, isPersonWithDisability: true, educationLevel: EducationLevel.Mestrado, professionalArea: ProfessionalArea.Gestora, workplaceType: WorkplaceType.ONG },
    { id: 12, name: 'Manuela Nogueira', email: 'manuela.nogueira@example.com', age: 26, region: Region.Norte, gender: Gender.MulherCis, sexualOrientation: SexualOrientation.LGBQIA, race: Race.Indigena, maritalStatus: MaritalStatus.Solteira, isPersonWithDisability: false, educationLevel: EducationLevel.SuperiorCompleto, professionalArea: ProfessionalArea.Arbitra, workplaceType: WorkplaceType.Federacao },
];

export const RACE_COLORS: { [key in Race]: string } = {
    [Race.Branca]: '#4B88A2',
    [Race.Preta]: '#D36135',
    [Race.Parda]: '#A44A3F',
    [Race.Amarela]: '#F2B705',
    [Race.Indigena]: '#8C4E3D',
};

export const PROFESSIONAL_AREA_COLORS: { [key in ProfessionalArea]: string } = {
    [ProfessionalArea.Atleta]: '#388BFD',
    [ProfessionalArea.Treinadora]: '#A371F7',
    [ProfessionalArea.Arbitra]: '#E05D97',
    [ProfessionalArea.Gestora]: '#238636',
    [ProfessionalArea.ProfissionalDeSaude]: '#DA3633',
    [ProfessionalArea.Comunicacao]: '#D29922',
    [ProfessionalArea.Marketing]: '#F77823',
    [ProfessionalArea.Advogada]: '#6E7681',
    [ProfessionalArea.Outra]: '#C9D1D9',
};