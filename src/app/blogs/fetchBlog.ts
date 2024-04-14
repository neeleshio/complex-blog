import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDir = path.join(process.cwd(), '/src/blog-posts');

export async function getBlogBySlug(slug: string) {
    const fileName = slug + '.mdx';
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // const { content } = await compileMDX({
    //     source: fileContent
    //     // options: { parseFrontmatter: true }
    // });

    return fileContent;
}
