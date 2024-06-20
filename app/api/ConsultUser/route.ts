import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/app/config/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return NextResponse.json({ message: 'Inicio de sesión exitoso', user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al iniciar sesión. Verifique sus credenciales.' }, { status: 400 });
  }
}