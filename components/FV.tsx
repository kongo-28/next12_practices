import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import styles from "@/styles/Home.module.css";


// const geistSans = localFont({
//   src: "@/pages/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "@/pages/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export function FV(a, b) {
  return (
      <div
        className={`${styles.page} ${a.variable} ${b.variable}`}
      >
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>pages/index.tsx</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
      </div>
  );
}
