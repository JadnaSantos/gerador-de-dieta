import { z } from "zod";

export const DietPlanRequestSchema = z.object({
  name: z.string().min(2),
  age: z.number().positive(),
  height: z.number().positive(),
  weight: z.number().positive(),
  activityLevel: z.enum([
    "sedentary",
    "two_per_week",
    "three_per_week",
    "four_per_week",
    "five_per_week",
    "six_per_week",
  ]),
  objective: z.enum([
    "lose_weight",
    "gain_muscle",
    "maintain_weight",
    "hypertrophy",
  ]),
  gender: z.enum(["Male", "Female"]),
});

export type DietPlanRequest = z.infer<typeof DietPlanRequestSchema>;
