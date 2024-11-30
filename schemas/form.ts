import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


export const formSchema = z.object({
    name: z.string().min(4),
    description: z.string().optional(),
    template: z.boolean().optional(),
    isRelatedToCourse: z.boolean().optional(),
    course: z.string().optional(),
  });
  
export const templateFormSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
  template: z.boolean().optional(),
  content: z.string().optional(),
});

export type templateFormSchemaType = z.infer<typeof templateFormSchema>;
export type formSchematype = z.infer<typeof formSchema>;