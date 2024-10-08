import { generatePassword } from '@utils/password';
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
    const searchParams = new URL(request.url);
    const quantity = searchParams.searchParams.get('quantity') || '1';
    const length = searchParams.searchParams.get('length') || '16';

    return new Response(
        JSON.stringify(Array.from({ length: parseInt(quantity) }, () => generatePassword(parseInt(length)))),
        {
            headers: {
                'content-type': 'application/json',
            },
        },
    )
}