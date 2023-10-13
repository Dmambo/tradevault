import Link from "next/link";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";

const Mainnav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const routes = [
    {
      name: "About",
      href: "/about",
    },
  
    {
      name: "Community",
      href: "/community",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const { userId } = auth();

  if (userId) {
    routes.push({
      name: "Dashboard",
      href: "/dashboard",
    });
  }

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default Mainnav;
