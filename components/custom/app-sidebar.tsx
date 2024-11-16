'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BarChartIcon, ContainerIcon, ExclamationTriangleIcon, FileTextIcon, GearIcon, LayersIcon, Link2Icon, ListBulletIcon, LockOpen1Icon, MixerHorizontalIcon, PaddingIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function AppSidebar() {

    const nav = [
        {
            title: 'Code',
            items: [
                {
                    icon: MixerHorizontalIcon,
                    title: 'Branches',
                    url: '/branches',
                    isActive: true,
                },
                {
                    icon: FileTextIcon,
                    title: 'Static analysis',
                    url: '#',
                }
            ]
        },
        {
            title: 'Building',
            items: [
                {
                    icon: GearIcon,
                    title: 'Builds',
                    url: '#'
                },
                {
                    icon: Link2Icon,
                    title: 'Tests',
                    url: '#'
                },
                {
                    icon: BarChartIcon,
                    title: 'Performance',
                    url: '/performance'
                }
            ]
        },
        {
            title: 'Security',
            items: [
                {
                    icon: ListBulletIcon,
                    title: 'Vulnerabilities',
                    url: '#'
                },
                {
                    icon: PaddingIcon,
                    title: 'Fuzzing',
                    url: '#'
                },
            ]
        },
        {
            title: 'Deployment',
            items: [
                {
                    icon: RocketIcon,
                    title: 'Releases',
                    url: '#'
                },
                {
                    icon: LockOpen1Icon,
                    title: 'Provisioning',
                    url: '#'
                },
            ]
        },
        {
            title: 'Monitoring',
            items: [
                {
                    icon: ExclamationTriangleIcon,
                    title: 'Crashes',
                    url: '#'
                },
                {
                    icon: ContainerIcon,
                    title: 'Telemetry',
                    url: '#'
                },
            ]
        }
    ];

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <Link href='/' className="flex flex-row">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <LayersIcon className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                        <span className="truncate font-semibold self-center">
                            source.dev
                        </span>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                {
                    nav.map((item) =>
                        <SidebarGroup key={item.title}>
                            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild tooltip={item.title}>
                                                <Link className="block flex flex-row" href={item.url}>
                                                    <item.icon className="size-4" />
                                                    <span className="inline-block w-full">{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>

                    )
                }
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}