"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef, useTransition } from "react"
import {useDebouncedCallback} from "use-debounce";



export default function Search() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [, startTransition] = useTransition()
    const inputRef = useRef<HTMLInputElement>(null)

    const q = searchParams.get("query")?.toString()

    const handleSearch = useDebouncedCallback((query: string) => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams)
            if (query) {
                params.set("query", query)
                params.set("page", "1")
            } else {
                params.delete("query")
            }
            replace(`${pathname}?${params.toString()}`)
        })
    }, 200)

    return (
        <div className="relative flex h-8 items-center  text-zinc-600">
            <input
                className="h-8 w-[200px] pl-8 lg:w-[250px]"
                placeholder="Search..."
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                defaultValue={q}
                onKeyDown={(e) => {
                    if (e.key === "Escape") {
                        inputRef?.current?.blur()
                    }
                }}
                ref={inputRef}
            />
        </div>
    )
}
