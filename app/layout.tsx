import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StagewiseToolbar } from '@stagewise/toolbar-next'
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

const stagewiseConfig = {
  plugins: []
};

export const metadata = {
  title: "APEX - Building Israel's AI Fortress",
  description:
    "APEX is designed to secure Israel's leadership in AI by cultivating top talent and creating a self-sustaining cycle of innovation.",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'development' && <StagewiseToolbar config={stagewiseConfig} />}
        </ThemeProvider>
      </body>
    </html>
  )
}