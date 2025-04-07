
import Nav from "./nav";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props: any) {
    const { children } = props
    return (
        <div>
            <Nav />
            <main className="min-h-dvh antialiased px-[10%] py-8">
                {children}
            </main>
        </div>
    );
}
