import DropdownMenu from "../ui/dropdown-menu"

export default function Nav() {
    return (
        <>
            <nav
                role="navigation"
                className="relative flex justify-between items-center py-8 px-[7%]"
            >
                <h1>this is menu</h1>

                {/* Mobile Menu */}
                <DropdownMenu />
            </nav>
        </>
    );
}
