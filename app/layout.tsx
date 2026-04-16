import { ClarityScript } from "@/components/clarity-script";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Screen Share - Share Your Screen Instantly",
    description: "Share your screen instantly with anyone using a simple room code. No downloads or sign-ups required.",
    keywords: ["screen sharing", "webrtc", "online screen share", "browser screen sharing", "free screen sharing", "share your screen", "share screen", "screen share"],
    other: {
        "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ""
    }
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <main>
                        {children}
                        {/* <footer className="text-muted-foreground px-4 py-8 text-center text-sm">
                        The source code is available on{" "}
                        <Link href="https://github.com/VA5UDEV/screen-sharing" className="underline" target="_blank">
                            Github
                        </Link>
                        .
                    </footer> */}
                    </main>
                    <ClarityScript />
                    <Toaster richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}
