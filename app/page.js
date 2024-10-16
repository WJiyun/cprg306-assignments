import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="http://localhost:3000/week-2">Go to Week-2</Link>
      <p><Link href="http://localhost:3000/week-3">Go to Week-3</Link></p>
      <p><Link href="http://localhost:3000/week-4">Go to Week-4</Link></p>
      <p><Link href="http://localhost:3000/week-5">Go to Week-5</Link></p>
    </div>
  );
}
