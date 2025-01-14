import Link from "next/link";

interface NavLinkProps {
  href: string; // The type for the href property
  title: string; // The type for the title property
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};


export default NavLink;
