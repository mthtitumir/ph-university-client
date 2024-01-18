import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element: ReactNode,
}

export type TSidebarRoute = {
    key: string,
    label: ReactNode,
    children?: TSidebarRoute[]
}

export type TUserPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TUserPath[]
}
