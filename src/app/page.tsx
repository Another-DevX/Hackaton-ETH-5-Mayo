import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Something protocol</h1>
      <Button asChild>
        <Link href={'/home'}>Empezar ahora!</Link>
      </Button>
    </main>
  );
}
