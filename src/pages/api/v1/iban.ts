import { generateIBAN } from '@utils/iban';
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
    const searchParams = new URL(request.url);
    const quantity = searchParams.searchParams.get('quantity') || '1';

    return new Response(
        JSON.stringify(Array.from({ length: parseInt(quantity) }, () => generateIBAN("ES"))),
        {
            headers: {
                'content-type': 'application/json',
            },
        },
    )
}