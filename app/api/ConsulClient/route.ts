import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/config/FirebaseConfig';

export async function POST(req: NextRequest) {
  const { nombre, correo, telefono, empresa, tipo } = await req.json();

  try {
    const docRef = await db.collection('Clientes').add({
      nombre,
      correo,
      telefono,
      empresa,
      tipo,
      createdAt: new Date(),
    });
    return NextResponse.json({ id: docRef.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar el cliente' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (id) {
    try {
      const doc = await db.collection('Clientes').doc(id).get();
      if (!doc.exists) {
        return NextResponse.json({ error: 'Cliente no encontrado' }, { status: 404 });
      }
      const cliente = { id: doc.id, ...doc.data() };
      return NextResponse.json(cliente, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener el cliente' }, { status: 500 });
    }
  } else {
    try {
      const snapshot = await db.collection('Clientes').get();
      const clients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return NextResponse.json(clients, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener los clientes' }, { status: 500 });
    }
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    await db.collection('Clientes').doc(id).delete();
    return NextResponse.json({ message: 'Cliente eliminado con éxito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar el cliente' }, { status: 500 });
  }
}