import { getGeckoCoinPrice } from './get-price';

export async function GET(request: Request) {
  const parsed = new URL(request.url);
  const token = parsed.searchParams.get('token');

  if (!token) {
    throw new Error('could not get token from url');
  }

  return Response.json(await getGeckoCoinPrice(token));
}


