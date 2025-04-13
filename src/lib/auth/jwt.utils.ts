import 'server-only';

import { SignJWT, jwtVerify } from 'jose';

type SessionPayload = {
  userId: number;
  expiresAt: Date;
};

const secretKey = process.env.JWT_SESSION_SECRET_KEY;

/**
 * Encode the secretKey string into a Uint8Array (a binary data type)
 * using the TextEncoder class, which is required for the jose
 * library's cryptographic functions.
 */
const key = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key);
};

export const decrypt = async (session = '') => {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (_error) {
    return null;
  }
};
