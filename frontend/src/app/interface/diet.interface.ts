export interface DietData {
  name: string;
  age: number;
  height: number;
  weight: number;
  gender: 'masculino' | 'feminino';
  activityLevel:
    | 'Sedentário'
    | '2x por semana'
    | '3x por semana'
    | '5x por semana';
  objective:
    | 'perda_de_peso'
    | 'hipertrofia'
    | 'ganhar_massa_muscular'
    | 'manter_peso';
}
