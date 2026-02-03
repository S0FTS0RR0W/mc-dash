import Link from "next/link";

export default function NavigationBar() {
    return (
      <nav className="flex-auto justify-center space-x-4 absolute left-4">
        <Link href="/" className="">Home</Link>
        <Link href="/console">Console</Link>
      </nav>
    )
}