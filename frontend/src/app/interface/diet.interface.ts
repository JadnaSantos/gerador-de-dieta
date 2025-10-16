export interface DietData {
  name: string;
  age: number;
  height: number;
  weight: number;
  gender: 'Male' | 'Female';
  activityLevel:
    | 'sedentary'
    | 'two_per_week'
    | 'three_per_week'
    | 'four_per_week'
    | 'five_per_week'
    | 'six_per_week';
  objective: 'lose_weight' | 'gain_muscle' | 'maintain_weight' | 'hypertrophy';
}
