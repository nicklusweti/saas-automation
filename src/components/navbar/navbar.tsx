import Link from "next/link";
import { NavLinks } from "./nav-links";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0  border-b z-[1] bg-background/50 backdrop-filter-blur">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-xl font-bold">
              <h1 className="flex items-center">
                <span>Auto</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.5 -0.5 16 16"
                  fill="currentColor"
                  id="Flow-Arrow--Streamline-Phosphor"
                  height={16}
                  width={16}
                >
                  <desc>
                    {"Flow Arrow Streamline Icon: https://streamlinehq.com"}
                  </desc>
                  <path
                    d="m14.394140625 4.3558593750000005 -1.875 -1.875a0.46875 0.46875 0 0 0 -0.66328125 0.66328125L12.9310546875 4.21875H12.1875c-2.8904296874999997 0 -3.5771484375 1.64765625 -4.182421874999999 3.1007812500000003 -0.5496093750000001 1.3189453125000001 -0.99140625 2.3783203125 -2.8992187499999997 2.51015625a2.34375 2.34375 0 1 0 0.005859375 0.9375c2.534765625 -0.1552734375 3.183984375 -1.7080078125 3.758203125 -3.0873046874999996C9.4576171875 6.26953125 9.921679687500001 5.15625 12.1875 5.15625h0.7435546875l-1.0751953125 1.074609375a0.46875 0.46875 0 0 0 0.66328125 0.66328125l1.875 -1.875a0.46875 0.46875 0 0 0 0 -0.66328125ZM2.8125 11.71875a1.40625 1.40625 0 1 1 1.40625 -1.40625 1.40625 1.40625 0 0 1 -1.40625 1.40625Z"
                    strokeWidth={1}
                  />
                </svg>
                <span className="text-muted-foreground">Stream.</span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Navigation">
              <ul className="flex items-center gap-6 text-base">
                {NavLinks.map((link, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={link.path}
                      className="hover:text-muted-foreground transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm">{true ? "Dashboard" : "Get Started"}</Button>
            <div className="block md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
