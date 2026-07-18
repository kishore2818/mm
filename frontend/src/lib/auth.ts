import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'fallback-secret-key-for-development';
const encodedKey = new TextEncoder().encode(secretKey);

export async function signVerificationToken(alumniId: string) {
  return new SignJWT({ alumniId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(encodedKey);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload as { alumniId: string };
  } catch (error) {
    return null;
  }
}
