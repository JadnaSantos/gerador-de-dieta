import { z } from "zod";

export const DietPlanRequestSchema = z.object({
  name: z.string().min(2),
  age: z.number().positive(),
  height: z.number().positive(),
  weight: z.number().positive(),
  activityLevel: z.enum([
    "sedentary",
    "two times a week",
    "three times a week",
    "for times a week",
    "five times a week",
    "six time a week",
  ]),
  objective: z.enum([
    "lose weight",
    "gain muscle mass",
    "maintain weight",
    "hypertrophy",
  ]),
  gender: z.enum(["Male", "Female"]),
});

export type DietPlanRequest = z.infer<typeof DietPlanRequestSchema>;
