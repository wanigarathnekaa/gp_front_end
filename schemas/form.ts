import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


export const formSchema = z.object({
    name: z.string().min(4),
    description: z.string().optional(),
    template: z.boolean().optional(),
  });
  
export type formSchematype = z.infer<typeof formSchema>;