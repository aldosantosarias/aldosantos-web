import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const schema = z.object({title:z.string(),description:z.string(),date:z.coerce.date(),category:z.string().optional(),featured:z.boolean().default(false)});
export const collections = {
 publicaciones:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/publicaciones'}),schema}),
 proyectos:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/proyectos'}),schema})
};
