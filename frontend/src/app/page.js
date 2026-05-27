import { redirect } from 'next/navigation';

export default function Home() {
  // Enforce Login Gate: Redirect all root visitors to the Login Page
  redirect('/login');
}
