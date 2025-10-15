export type ActivityLevel =
  | 'sedentary'
  | 'two_per_week'
  | 'three_per_week'
  | 'five_per_week'
  | 'six_per_week';

export type Objective =
  | 'lose_weight'
  | 'gain_muscle'
  | 'maintain_weight'
  | 'hypertrophy';

export interface SelectOption<T> {
  value: T;
  label: string;
}
