import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Link {
  name: string;
  href: string;
}

interface TopbarMobileSheetProps {
  links: Link[];
}

export function TopbarMobileSheet({ links }: TopbarMobileSheetProps) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden underline">menu</SheetTrigger>
      <SheetContent>
        <div className="flex flex-col p-8 text-2xl">
          <a className="underline hover:text-emerald-400" key="home" href="/">
            home
          </a>
          {links.map((link) => (
            <a
              className="underline hover:text-emerald-400"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
