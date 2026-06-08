import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await req.json();

  return NextResponse.json({
    reply:
      "Sistem AI sedang disiapkan. Jawaban akan tersedia setelah database RAG terhubung.",
  });
}
