import { generateSocialSecurityNumber } from '@utils/ss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
    const searchParams = new URL(request.url);
    const quantity = searchParams.searchParams.get('quantity') || '1';

    return new Response(
        JSON.stringify(Array.from({ length: parseInt(quantity) }, () => generateSocialSecurityNumber())),
        {
            headers: {
                'content-type': 'application/json',
            },
        },
    )
}