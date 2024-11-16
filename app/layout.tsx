'use client'

import '@/app/globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { RootLayoutType } from '@/types/RootLayout.type'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/custom/app-sidebar'
import { Separator } from '@/components/ui/separator'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Toaster } from "@/components/ui/toaster"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutType) {
  const pathname = usePathname();

  const breadcrumbsFlat = (pathname: string) => {
    return pathname.split('/')[1];
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-transparent p-4 backdrop-blur-md z-10">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    {
                      pathname === '/' ?
                        <BreadcrumbPage>Home</BreadcrumbPage>
                        :
                        <Link href="/" className='font-normal text-foreground hover:underline'>
                          Home
                        </Link>
                    }
                  </BreadcrumbItem>
                  {
                    pathname !== '/' &&
                    pathname.split('/').slice(1).slice(0, -1).map((pathString) =>
                      <Fragment key={pathString}>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                          <Link href={"/" + pathString} className='font-normal text-foreground hover:underline capitalize'>
                            {pathString}
                          </Link>
                        </BreadcrumbItem>
                      </Fragment>
                    )
                  }
                  {
                    pathname !== '/' &&
                    <>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage className='capitalize'>{pathname.split('/').pop()}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  }
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div className='p-4'>
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  )
}