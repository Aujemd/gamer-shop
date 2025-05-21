import type { JSX } from "react";

/**
 * Main page component of the application.
 * @returns The main page component.
 */
export default async function Home(): Promise<JSX.Element> {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold text-4xl text-blue-600">
            Hello, world!
        </main>
    );
}
