import { redirect } from 'next/navigation';

export default function WorkRedirect() {
  // /work lives as a section on the home page.
  redirect('/#work');
}
