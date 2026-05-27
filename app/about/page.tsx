import { redirect } from 'next/navigation';

export default function AboutRedirect() {
  // /about lives as a section on the home page.
  redirect('/#about');
}
