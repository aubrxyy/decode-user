
export default function NotFound() {
    return (
        <div className="error text-center flex flex-col items-center justify-center h-[600px]">
            <h1 className="text-7xl text-red-700">404</h1>
            <h2 className="text-3xl">Page not found</h2>
            <a href="/" className="text-xl underline "> ← Return to home page</a>
        </div>
    );
}
