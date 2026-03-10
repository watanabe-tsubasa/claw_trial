import { NextResponse } from 'next/server';

export async function GET() {
  const messages = [
    "こんにちは！良い一日を！",
    "今日はいい天気ですね",
    " incontournгийの力は素晴らしい",
    "代码は音楽のように美しい",
    "Keep going, you're doing great!"
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return NextResponse.json({ message: randomMessage });
}
