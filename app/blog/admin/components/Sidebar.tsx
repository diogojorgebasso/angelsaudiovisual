import Link from "next/link";

export default function Sidebar() {
  const Gauge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );

  const LayoutList = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  );

  const Categories = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 17l4 4-4-4zm-2-5a3 3 0 1 0-3 3 3 3 0 0 0 3-3zm-6 9a3 3 0 1 0-3 3 3 3 0 0 0 3-3z"></path>
      <line x1="5" y1="11" x2="5" y2="11"></line>
      <line x1="11" y1="7" x2="11" y2="7"></line>
      <path d="M13 7h8m0 0v8m0-8l-8 8"></path>
    </svg>
  );

  const User = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0 -4 -4H8a4 4 0 0 0 -4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const link = [{ name: 'Dashboard', href: '/admin', icon: <Gauge /> },
  { name: 'Posts', href: '/admin/posts', icon: <LayoutList /> },
  { name: 'Categories', href: '/admin/categories', icon: <Categories /> },
  { name: 'Authors', href: '/admin/authors', icon: <User /> },
  ];

  return <section>
    <ul>
      {link.map((item, index) => <Link href={item.href}  ><li key={index}>{item.icon}<span>{item.name</span></li></Link>}
    </ul>
  </section>
}