import { generateCIF } from '@utils/cif';
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
    const searchParams = new URL(request.url);
    const count = searchParams.searchParams.get('count') || '1';

    const data = [];
    for (let i = 0; i < parseInt(count); i++) {
        data.push(generateCIF());
    }

    return new Response(
        JSON.stringify(data),
        {
            headers: {
                'content-type': 'application/json',
            },
        },
    )
}