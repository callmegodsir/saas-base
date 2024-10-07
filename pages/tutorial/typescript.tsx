import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex max-w-3xl mx-auto min-h-screen flex-col gap-16 p-8 mb-24`}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4">Typescript — Ship Fast ⚡️</h1>

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/tutorial" className="items-center flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                  />
                </svg>
                Tutorial
              </Link>
            </li>
            <li>Typescript</li>
          </ul>
        </div>
      </section>

      <section className="leading-relaxed space-y-5">
        <p className="text-md opacity-80 mb-6">
          This template comes with Typescript support out of the box. You can
          use it in your pages, components, API routes, and even in your config
          file.
        </p>

        <h2 className="font-bold text-xl">Defining types</h2>
        <p className="text-base-content/80">
          You can define types in the{" "}
          <code className="text-primary">types/</code> folder. For example{" "}
          <code>types/FAQ.ts</code> with:
          <pre className="whitespace-pre-wrap select-all p-4 rounded-lg bg-base-300 text-sm text-base-content my-2">
            {`import type { JSX } from 'react';

export interface FAQItem {
  question: string;
  answer: JSX.Element;
}
`}
          </pre>
          Then import it at <code className="text-primary">type/index.ts</code>{" "}
          as:
          <pre className="whitespace-pre-wrap select-all p-4 rounded-lg bg-base-300 text-sm text-base-content my-2">
            {`export * from './FAQ';`}
          </pre>
          And use it in your components as:
          <pre className="whitespace-pre-wrap select-all p-4 rounded-lg bg-base-300 text-sm text-base-content my-2">
            {`import type { FAQItem } from '@/types';`}
          </pre>
        </p>
      </section>
    </main>
  );
}
