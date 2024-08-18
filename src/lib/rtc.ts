import { RFCAdapter } from '@/types';

export function rfc(fn: keyof RFCAdapter, payload: any) {
  const url = `http://localhost:${process.env.PORT}/api/rfc`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RFC-SECRET': process.env.RFC_SECRET || '',
    },
    body: JSON.stringify({ fn, payload }),
  }).then(async (res) => {
    if (res.ok) {
      const payload = await res.json();
      switch (fn) {
        case 'createSession':
          payload.expires = new Date(payload.expires);
          return payload;
        case 'getSessionAndUser': {
          payload.session.expires = new Date(payload.session.expires);
          return payload;
        }
        default:
          return payload;
      }
    }

    const { errors } = await res.json();
    throw new Error(JSON.stringify(errors));
  }) as Promise<any>;
}
