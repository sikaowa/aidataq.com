<template>
  <NuxtLayout name="blank">
    <header class="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg">
      <div class="container flex h-16 items-center">
        <div class="mr-4 hidden md:flex"><a class="mr-6 flex items-center space-x-2" href="/"><img src="/icon.png"
                                                                                                   alt="Magic UI"
                                                                                                   class="h-6 w-6"><span
            class="hidden font-bold md:inline-block">Magic UI Pro</span>
          <div
              class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Beta
          </div>
        </a>
          <nav class="hidden items-center space-x-6 text-sm font-medium xl:flex"><a
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
              href="/templates">Templates</a><a
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
              href="/sections">Sections</a><a
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
              href="/pricing">Pricing</a><a target="_blank"
                                            class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
                                            href="https://magicui.featurebase.app/roadmap">Roadmap
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="ml-2 size-4">
              <path
                  d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a><a target="_blank"
                 class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
                 href="https://discord.gg/X4BBMBjHNf">Discord
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="ml-2 size-4">
              <path
                  d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a></nav>
        </div>
        <button
            class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R29nhla:"
            data-state="closed">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M9 3v18"></path>
            <path d="m14 9 3 3-3 3"></path>
          </svg>
          <span class="sr-only">Toggle Menu</span></button>
        <div class="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button
                class="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
              <span class="hidden lg:inline-flex">Search documentation...</span><span class="inline-flex lg:hidden">Search...</span><kbd
                class="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span
                class="text-xs">⌘</span>K</kbd></button>
          </div>
          <nav class="flex items-center gap-2">
            <button
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 px-2"
                type="button" aria-label="Toggle theme">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200">
                <path
                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200">
                <path
                    d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
            <a class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-md text-xs px-4"
               href="/login">Login</a><a
              class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3 hidden whitespace-pre md:flex group relative w-full gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              href="/pricing"><span
              class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>Get
            Magic UI Pro
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a></nav>
        </div>
      </div>
      <hr class="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0">
    </header>
    <!--
    <header class="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg">
      <div class="container flex h-16 items-center">
        <div class="mr-4 hidden md:flex"><a class="mr-6 flex items-center space-x-2" href="/">
          <img src="/icon.png"
               alt="Magic UI"
               class="h-6 w-6"><span
            class="hidden font-bold md:inline-block">Magic UI Pro</span>
          <div
              class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Beta
          </div>
        </a>
          <nav class="hidden items-center space-x-6 text-sm font-medium xl:flex"><a
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
              href="/templates">Templates</a><a
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
              href="/sections">Sections</a><a
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
              href="/pricing">Pricing</a><a target="_blank"
                                            class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
                                            href="https://magicui.featurebase.app/roadmap">Roadmap
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="ml-2 size-4">
              <path
                  d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a><a target="_blank"
                 class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
                 href="https://discord.gg/X4BBMBjHNf">Discord
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="ml-2 size-4">
              <path
                  d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a></nav>
        </div>
        <button
            class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r18:" data-state="closed">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M9 3v18"></path>
            <path d="m14 9 3 3-3 3"></path>
          </svg>
          <span class="sr-only">Toggle Menu</span></button>
        <div class="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button
                class="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
              <span class="hidden lg:inline-flex">Search documentation...</span><span class="inline-flex lg:hidden">Search...</span><kbd
                class="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span
                class="text-xs">⌘</span>K</kbd></button>
          </div>
          <nav class="flex items-center gap-2">
            <button
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 px-2"
                type="button" aria-label="Toggle theme">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200">
                <path
                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200">
                <path
                    d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
            <button type="button" id="radix-:r1e:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><span
                class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"><span
                class="flex h-full w-full items-center justify-center rounded-full bg-muted"><span
                class="sr-only"></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path
                d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span></span>
            </button>
          </nav>
        </div>
      </div>
      <hr class="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0">
    </header>
   -->
    <button class="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
      <span>Join now →</span>
      <div class="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
    </button>
    <main class="flex-1">
      <section id="hero">
        <div class="relative h-full overflow-hidden py-14">
          <div class="container z-10 flex flex-col">
            <div class="mt-20 grid grid-cols-1">
              <div class="flex flex-col items-center gap-6 pb-8 text-center">
                <div><a href="/docs/templates/portfolio">
                  <div
                      class="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
                    <div
                        class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                    <div
                        class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
                    🎉
                    <div data-orientation="vertical" role="none" class="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
                    <span
                        class="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">Introducing Portfolio Template</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="ml-1 h-4 w-4 text-gray-500">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </a></div>
                <h1 class="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-7xl">
                  Beautifully designed website templates and sections</h1>
                <p class="max-w-[64rem] text-balance text-lg tracking-tight text-gray-500 md:text-xl">30+ beautiful
                  sections and templates built with <strong>React</strong>, <strong>Typescript</strong>, <strong>Tailwind
                    CSS</strong>, and <strong>Framer Motion</strong>.<br>Save thousands of hours, create a beautiful
                  landing page, and convert your visitors into customers.</p>
                <div class="flex flex-col gap-4 lg:flex-row">
                  <div class="flex flex-col gap-4 md:flex-row"><a
                      class="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter"
                      href="/templates">Browse Templates
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a><a
                      class="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter"
                      href="/pricing">Get Magic UI Pro
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a></div>
                </div>
                <div>
                  <div class="container flex flex-col items-center justify-center gap-2 sm:flex-row">
                    <div class="flex flex-row items-center justify-center -space-x-4"><img
                        src="https://randomuser.me/api/portraits/women/72.jpg"
                        class="h-10 w-10 rounded-full border-2 border-white"><img
                        src="https://randomuser.me/api/portraits/men/94.jpg"
                        class="h-10 w-10 rounded-full border-2 border-white"><img
                        src="https://randomuser.me/api/portraits/women/34.jpg"
                        class="h-10 w-10 rounded-full border-2 border-white"><img
                        src="https://randomuser.me/api/portraits/men/86.jpg"
                        class="h-10 w-10 rounded-full border-2 border-white"><img
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        class="h-10 w-10 rounded-full border-2 border-white"></div>
                    <div class="flex flex-col gap-x-2">
                      <div class="mx-auto flex flex-row items-center justify-start">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="h-4 w-4 text-orange-300">
                          <path
                              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                              fill="currentColor"></path>
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="h-4 w-4 text-orange-300">
                          <path
                              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                              fill="currentColor"></path>
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="h-4 w-4 text-orange-300">
                          <path
                              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                              fill="currentColor"></path>
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="h-4 w-4 text-orange-300">
                          <path
                              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                              fill="currentColor"></path>
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="h-4 w-4 text-orange-300">
                          <path
                              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                              fill="currentColor"></path>
                        </svg>
                        <span class="ml-2 text-base font-bold">5.0</span></div>
                      <span class="inline-block text-center text-xs font-medium leading-snug tracking-tighter"><span
                          class="inline-block tabular-nums text-black dark:text-white font-extrabold">1,000</span>+ developers making beautiful landing pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mx-auto flex w-full max-w-[1000px] items-center justify-center">
              <div class="not-prose flex flex-row gap-2 mx-auto text-foreground">
                <button data-state="closed">
                  <svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="size-8"
                       fill="currentColor"><title>React</title>
                    <path
                        d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z"></path>
                  </svg>
                </button>
                <button data-state="closed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="size-8" fill="currentColor">
                    <path
                        d="m0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z"></path>
                  </svg>
                </button>
                <button data-state="closed">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-8"
                       fill="currentColor"><title>Tailwind CSS</title>
                    <path
                        d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z"></path>
                  </svg>
                </button>
                <button data-state="closed">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none"
                       stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>
                    Framer Motion</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                    <path d="M20 12l-8 8l-4 -4"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hero">
        <div class="relative h-full overflow-hidden py-14">
          <div class="container z-10 flex flex-col">
            <div class="mt-20 grid grid-cols-1">
              <div class="flex flex-col items-center gap-6 pb-8 text-center"><h1
                  class="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
                  style="opacity: 1; transform: none;">Create Magical <br> Landing Pages <br></h1>
                <p class="text-balance text-lg tracking-tight text-gray-400 md:text-xl"
                   style="opacity: 1; transform: none;">Magic UI is a curated collection of React + Tailwind CSS +
                  Framer Motion components</p>
                <div class="flex flex-col gap-4 lg:flex-row" style="opacity: 1; transform: none;"><a href="#"
                                                                                                     class="bg-black text-white shadow hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">Get
                  Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a></div>
              </div>
            </div>
            <div
                class="relative mt-24 h-full w-full rounded-xl after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,#fff_30%,transparent)] dark:after:[background:linear-gradient(to_top,#000000_30%,transparent)]"
                style="opacity: 1; transform: none;">
              <div
                  class="absolute inset-0 bottom-1/2 h-full w-full transform-gpu [filter:blur(120px)] [background-image:linear-gradient(to_bottom,#ffaa40,transparent_30%)] dark:[background-image:linear-gradient(to_bottom,#ffffff,transparent_30%)]"></div>
              <img src="https://pro.magicui.design/dashboard-light.png"
                   class="relative block h-full w-full rounded-xl border dark:hidden"><img
                src="https://pro.magicui.design/dashboard-dark.png"
                class="relative hidden h-full w-full rounded-xl border dark:block">
              <div
                  class="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
                  style="--size: 150; --duration: 15; --anchor: 90; --border-width: 1.5; --color-from: #ffaa40; --color-to: #9c40ff; --delay: -0s;"></div>
              <div
                  class="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
                  style="--size: 150; --duration: 15; --anchor: 90; --border-width: 1.5; --color-from: #ffaa40; --color-to: #9c40ff; --delay: -7s;"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="container py-14"><h2
          class="mb-4 text-center text-5xl font-bold tracking-tight text-foreground">What People Are Saying</h2><h4
          class="mb-8 text-center text-lg font-medium tracking-tight text-foreground/80">Don't just take our word for
        it. Here's what <strong>real people</strong> are saying about Magic UI on Twitter.</h4>
        <div class="relative flex flex-col">
          <div
              class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-screen [--duration:120s]">
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Praveen"
                                                                                      alt="pkp_io" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1693752318800343040/ctW9DQIx_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/pkp_io" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Praveen
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@pkp_io</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/pkp_io/status/1684561895481802753" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This will be the first component I will adopt from the collection! Love these!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/devcagatay" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Cagatay Cali" alt="devcagatay" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1751358196722069504/ZkoUh92__normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/devcagatay" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Cagatay Cali</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/devcagatay"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@devcagatay</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/devcagatay/status/1684573935466328065" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Looks great! Keep building🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/KanishkKhurana_"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Kanishk Khurana ⚡" alt="KanishkKhurana_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1467923681905053696/PnQseNnx_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/KanishkKhurana_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Kanishk Khurana ⚡</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/KanishkKhurana_"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@KanishkKhurana_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/KanishkKhurana_/status/1684613797984800768" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Thank fucking god someone made this.
You're the best💯</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Whop"
                                                                                      alt="WhopIO" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1730652283161952256/YDm9iNOZ_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/WhopIO" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Whop
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@WhopIO</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/WhopIO/status/1722690049374830639" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">you heard right. that looks amazing 🤩</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/steventey" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Steven Tey" alt="steventey" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/steventey" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Steven Tey
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/steventey" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@steventey</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/steventey/status/1722659583464968612" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">bruh this is so good 🤤</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/achera23" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Amritpal Chera" alt="achera23" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1797136007415873537/3xpD2Gfg_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/achera23" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Amritpal Chera
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/achera23" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@achera23</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/achera23/status/1668432554842619906" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This looks crazyy good! Congrats on the launch</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/taishik_" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Taishi 🇯🇵🇨🇦" alt="taishik_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1622714526780243968/Eo_CIblA_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/taishik_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Taishi 🇯🇵🇨🇦
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/taishik_" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@taishik_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/taishik_/status/1668510585926066176" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Congrats Dillion!
Just bought one!
This is fire 🔥</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/SullyOmarr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sully"
                                                                                      alt="SullyOmarr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1550142055854141440/iA_vPg8D_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/SullyOmarr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sully
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/SullyOmarr"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@SullyOmarr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/SullyOmarr/status/1668506160620769280" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Bro these are cleeeaann</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of nim"
                                                                                      alt="sup_nim" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1748299327322345472/o3Rv4J6j_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sup_nim" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">nim
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sup_nim</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sup_nim/status/1668525144409624578" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this guy don't miss, what a shipping machine!

love to see it.</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Jake Duth" alt="JakeDuth" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1615415654013669387/NoBl-jGW_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/JakeDuth" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Jake Duth
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@JakeDuth</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/JakeDuth/status/1668442365625790465" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Okay this is amazing</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Praveen"
                                                                                      alt="pkp_io" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1693752318800343040/ctW9DQIx_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/pkp_io" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Praveen
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@pkp_io</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/pkp_io/status/1684561895481802753" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This will be the first component I will adopt from the collection! Love these!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/devcagatay" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Cagatay Cali" alt="devcagatay" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1751358196722069504/ZkoUh92__normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/devcagatay" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Cagatay Cali</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/devcagatay"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@devcagatay</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/devcagatay/status/1684573935466328065" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Looks great! Keep building🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/KanishkKhurana_"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Kanishk Khurana ⚡" alt="KanishkKhurana_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1467923681905053696/PnQseNnx_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/KanishkKhurana_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Kanishk Khurana ⚡</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/KanishkKhurana_"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@KanishkKhurana_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/KanishkKhurana_/status/1684613797984800768" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Thank fucking god someone made this.
You're the best💯</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Whop"
                                                                                      alt="WhopIO" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1730652283161952256/YDm9iNOZ_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/WhopIO" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Whop
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@WhopIO</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/WhopIO/status/1722690049374830639" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">you heard right. that looks amazing 🤩</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/steventey" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Steven Tey" alt="steventey" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/steventey" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Steven Tey
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/steventey" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@steventey</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/steventey/status/1722659583464968612" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">bruh this is so good 🤤</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/achera23" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Amritpal Chera" alt="achera23" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1797136007415873537/3xpD2Gfg_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/achera23" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Amritpal Chera
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/achera23" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@achera23</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/achera23/status/1668432554842619906" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This looks crazyy good! Congrats on the launch</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/taishik_" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Taishi 🇯🇵🇨🇦" alt="taishik_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1622714526780243968/Eo_CIblA_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/taishik_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Taishi 🇯🇵🇨🇦
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/taishik_" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@taishik_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/taishik_/status/1668510585926066176" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Congrats Dillion!
Just bought one!
This is fire 🔥</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/SullyOmarr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sully"
                                                                                      alt="SullyOmarr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1550142055854141440/iA_vPg8D_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/SullyOmarr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sully
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/SullyOmarr"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@SullyOmarr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/SullyOmarr/status/1668506160620769280" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Bro these are cleeeaann</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of nim"
                                                                                      alt="sup_nim" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1748299327322345472/o3Rv4J6j_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sup_nim" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">nim
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sup_nim</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sup_nim/status/1668525144409624578" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this guy don't miss, what a shipping machine!

love to see it.</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Jake Duth" alt="JakeDuth" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1615415654013669387/NoBl-jGW_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/JakeDuth" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Jake Duth
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@JakeDuth</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/JakeDuth/status/1668442365625790465" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Okay this is amazing</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Praveen"
                                                                                      alt="pkp_io" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1693752318800343040/ctW9DQIx_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/pkp_io" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Praveen
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@pkp_io</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/pkp_io/status/1684561895481802753" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This will be the first component I will adopt from the collection! Love these!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/devcagatay" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Cagatay Cali" alt="devcagatay" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1751358196722069504/ZkoUh92__normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/devcagatay" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Cagatay Cali</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/devcagatay"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@devcagatay</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/devcagatay/status/1684573935466328065" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Looks great! Keep building🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/KanishkKhurana_"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Kanishk Khurana ⚡" alt="KanishkKhurana_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1467923681905053696/PnQseNnx_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/KanishkKhurana_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Kanishk Khurana ⚡</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/KanishkKhurana_"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@KanishkKhurana_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/KanishkKhurana_/status/1684613797984800768" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Thank fucking god someone made this.
You're the best💯</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Whop"
                                                                                      alt="WhopIO" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1730652283161952256/YDm9iNOZ_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/WhopIO" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Whop
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@WhopIO</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/WhopIO/status/1722690049374830639" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">you heard right. that looks amazing 🤩</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/steventey" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Steven Tey" alt="steventey" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/steventey" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Steven Tey
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/steventey" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@steventey</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/steventey/status/1722659583464968612" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">bruh this is so good 🤤</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/achera23" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Amritpal Chera" alt="achera23" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1797136007415873537/3xpD2Gfg_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/achera23" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Amritpal Chera
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/achera23" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@achera23</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/achera23/status/1668432554842619906" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This looks crazyy good! Congrats on the launch</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/taishik_" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Taishi 🇯🇵🇨🇦" alt="taishik_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1622714526780243968/Eo_CIblA_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/taishik_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Taishi 🇯🇵🇨🇦
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/taishik_" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@taishik_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/taishik_/status/1668510585926066176" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Congrats Dillion!
Just bought one!
This is fire 🔥</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/SullyOmarr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sully"
                                                                                      alt="SullyOmarr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1550142055854141440/iA_vPg8D_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/SullyOmarr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sully
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/SullyOmarr"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@SullyOmarr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/SullyOmarr/status/1668506160620769280" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Bro these are cleeeaann</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of nim"
                                                                                      alt="sup_nim" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1748299327322345472/o3Rv4J6j_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sup_nim" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">nim
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sup_nim</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sup_nim/status/1668525144409624578" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this guy don't miss, what a shipping machine!

love to see it.</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Jake Duth" alt="JakeDuth" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1615415654013669387/NoBl-jGW_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/JakeDuth" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Jake Duth
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@JakeDuth</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/JakeDuth/status/1668442365625790465" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Okay this is amazing</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Praveen"
                                                                                      alt="pkp_io" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1693752318800343040/ctW9DQIx_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/pkp_io" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Praveen
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/pkp_io" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@pkp_io</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/pkp_io/status/1684561895481802753" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This will be the first component I will adopt from the collection! Love these!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/devcagatay" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Cagatay Cali" alt="devcagatay" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1751358196722069504/ZkoUh92__normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/devcagatay" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Cagatay Cali</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/devcagatay"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@devcagatay</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/devcagatay/status/1684573935466328065" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Looks great! Keep building🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/KanishkKhurana_"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Kanishk Khurana ⚡" alt="KanishkKhurana_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1467923681905053696/PnQseNnx_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/KanishkKhurana_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Kanishk Khurana ⚡</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/KanishkKhurana_"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@KanishkKhurana_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/KanishkKhurana_/status/1684613797984800768" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Thank fucking god someone made this.
You're the best💯</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Whop"
                                                                                      alt="WhopIO" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1730652283161952256/YDm9iNOZ_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/WhopIO" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Whop
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/WhopIO" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@WhopIO</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/WhopIO/status/1722690049374830639" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">you heard right. that looks amazing 🤩</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/steventey" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Steven Tey" alt="steventey" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/steventey" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Steven Tey
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/steventey" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@steventey</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/steventey/status/1722659583464968612" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">bruh this is so good 🤤</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/achera23" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Amritpal Chera" alt="achera23" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1797136007415873537/3xpD2Gfg_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/achera23" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Amritpal Chera
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/achera23" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@achera23</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/achera23/status/1668432554842619906" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This looks crazyy good! Congrats on the launch</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/taishik_" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Taishi 🇯🇵🇨🇦" alt="taishik_" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1622714526780243968/Eo_CIblA_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/taishik_" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Taishi 🇯🇵🇨🇦
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/taishik_" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@taishik_</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/taishik_/status/1668510585926066176" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Congrats Dillion!
Just bought one!
This is fire 🔥</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/SullyOmarr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sully"
                                                                                      alt="SullyOmarr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1550142055854141440/iA_vPg8D_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/SullyOmarr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sully
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/SullyOmarr"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@SullyOmarr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/SullyOmarr/status/1668506160620769280" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Bro these are cleeeaann</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of nim"
                                                                                      alt="sup_nim" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1748299327322345472/o3Rv4J6j_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sup_nim" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">nim
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sup_nim" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sup_nim</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sup_nim/status/1668525144409624578" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this guy don't miss, what a shipping machine!

love to see it.</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Jake Duth" alt="JakeDuth" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1615415654013669387/NoBl-jGW_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/JakeDuth" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Jake Duth
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/JakeDuth" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@JakeDuth</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/JakeDuth/status/1668442365625790465" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Okay this is amazing</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div
              class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-screen [--duration:120s]">
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Raduan Al-Shedivat" alt="0xRaduan" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1733396051673894912/j7R1e9LV_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/0xRaduan" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Raduan Al-Shedivat
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@0xRaduan</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/0xRaduan/status/1668557577985179648" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">just bought one, love it.</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center">
                    <div class="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                      <img src="https://pbs.twimg.com/media/FyfoQqcacAEoXXR.jpg" title="Photo by Raduan Al-Shedivat"
                           alt="@dillionverma @linear @wopehq @reflectnotes @reactjs @tailwindcss @buildspace just bought one, love it. https://t.co/ZtHQXuwVQU"
                           class="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Yazin 🇵🇸" alt="yazinsai" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1214506674913976325/GhfomojM_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/yazinsai" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Yazin 🇵🇸
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@yazinsai</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/yazinsai/status/1668617800934641672" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Ordered, can't wait to try this out </span><a
                      href="https://twitter.com/dillionverma" target="_blank" rel="noopener noreferrer"
                      class="text-sm font-normal text-gray-500"><span>@dillionverma</span></a><span
                      class="text-sm font-normal">!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Weston Walker" alt="wes_walke" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1665933128437833728/HGkqsK8B_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/wes_walke" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Weston Walker
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@wes_walke</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/wes_walke/status/1668612106696941570" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Beautiful. Well done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Gonçalo Margalho" alt="DevAlien" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1668547806095605761/TvKAzN7A_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DevAlien" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Gonçalo Margalho
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DevAlien</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DevAlien/status/1668618017528479745" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Just bought it, keep delivering! looking forward to test it out</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/fredmaiaarantes"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Fred Maia ☄️" alt="fredmaiaarantes" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1650603603684368417/yqzF1r6M_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/fredmaiaarantes" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Fred Maia ☄️
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/fredmaiaarantes"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@fredmaiaarantes</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/fredmaiaarantes/status/1684676668445622272" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">I was looking for something like that yesterday. Well done and tks for sharing!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DesignSumu" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sumu"
                                                                                      alt="DesignSumu" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658198629923057664/RgfjYkM5_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DesignSumu" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sumu
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DesignSumu"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DesignSumu</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DesignSumu/status/1668559314272022528" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Pre-ordered, Excited to see what you ship!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/commandodev" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Ford" alt="commandodev" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1799005070719438848/uPjn_A_9_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/commandodev" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Ford</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/commandodev"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@commandodev</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/commandodev/status/1668640878225764354" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span
                      class="text-sm font-normal">Insta buy!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/FoundersMentor"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Masoud" alt="FoundersMentor" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1695152425500356608/p2UTrhBC_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/FoundersMentor" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Masoud</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/FoundersMentor"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@FoundersMentor</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/FoundersMentor/status/1668570645741948930" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this is beautiful man</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sand"
                                                                                      alt="sxndrao" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1599355664111128576/oU75F7DK_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sxndrao" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sand</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sxndrao</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sxndrao/status/1668634137547399168" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Copped one! Designs look sleek 🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/jordienr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of jordi"
                                                                                      alt="jordienr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658894614638493696/doBuLsxY_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/jordienr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">jordi
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/jordienr" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@jordienr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/jordienr/status/1681389309037772820" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This is awesome 👏</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/beneverman" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Everman" alt="beneverman" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1698075851076546560/pIufVEAF_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/beneverman" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Everman</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/beneverman"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@beneverman</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/beneverman/status/1681477151042797568" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Sick dude. Can’t wait to build with these once they’re all done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Raduan Al-Shedivat" alt="0xRaduan" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1733396051673894912/j7R1e9LV_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/0xRaduan" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Raduan Al-Shedivat
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@0xRaduan</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/0xRaduan/status/1668557577985179648" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">just bought one, love it.</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center">
                    <div class="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                      <img src="https://pbs.twimg.com/media/FyfoQqcacAEoXXR.jpg" title="Photo by Raduan Al-Shedivat"
                           alt="@dillionverma @linear @wopehq @reflectnotes @reactjs @tailwindcss @buildspace just bought one, love it. https://t.co/ZtHQXuwVQU"
                           class="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Yazin 🇵🇸" alt="yazinsai" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1214506674913976325/GhfomojM_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/yazinsai" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Yazin 🇵🇸
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@yazinsai</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/yazinsai/status/1668617800934641672" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Ordered, can't wait to try this out </span><a
                      href="https://twitter.com/dillionverma" target="_blank" rel="noopener noreferrer"
                      class="text-sm font-normal text-gray-500"><span>@dillionverma</span></a><span
                      class="text-sm font-normal">!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Weston Walker" alt="wes_walke" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1665933128437833728/HGkqsK8B_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/wes_walke" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Weston Walker
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@wes_walke</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/wes_walke/status/1668612106696941570" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Beautiful. Well done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Gonçalo Margalho" alt="DevAlien" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1668547806095605761/TvKAzN7A_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DevAlien" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Gonçalo Margalho
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DevAlien</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DevAlien/status/1668618017528479745" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Just bought it, keep delivering! looking forward to test it out</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/fredmaiaarantes"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Fred Maia ☄️" alt="fredmaiaarantes" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1650603603684368417/yqzF1r6M_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/fredmaiaarantes" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Fred Maia ☄️
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/fredmaiaarantes"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@fredmaiaarantes</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/fredmaiaarantes/status/1684676668445622272" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">I was looking for something like that yesterday. Well done and tks for sharing!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 1; transform: none;">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DesignSumu" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sumu"
                                                                                      alt="DesignSumu" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658198629923057664/RgfjYkM5_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DesignSumu" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sumu
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DesignSumu"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DesignSumu</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DesignSumu/status/1668559314272022528" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Pre-ordered, Excited to see what you ship!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/commandodev" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Ford" alt="commandodev" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1799005070719438848/uPjn_A_9_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/commandodev" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Ford</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/commandodev"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@commandodev</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/commandodev/status/1668640878225764354" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span
                      class="text-sm font-normal">Insta buy!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/FoundersMentor"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Masoud" alt="FoundersMentor" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1695152425500356608/p2UTrhBC_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/FoundersMentor" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Masoud</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/FoundersMentor"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@FoundersMentor</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/FoundersMentor/status/1668570645741948930" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this is beautiful man</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sand"
                                                                                      alt="sxndrao" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1599355664111128576/oU75F7DK_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sxndrao" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sand</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sxndrao</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sxndrao/status/1668634137547399168" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Copped one! Designs look sleek 🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/jordienr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of jordi"
                                                                                      alt="jordienr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658894614638493696/doBuLsxY_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/jordienr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">jordi
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/jordienr" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@jordienr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/jordienr/status/1681389309037772820" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This is awesome 👏</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/beneverman" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Everman" alt="beneverman" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1698075851076546560/pIufVEAF_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/beneverman" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Everman</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/beneverman"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@beneverman</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/beneverman/status/1681477151042797568" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Sick dude. Can’t wait to build with these once they’re all done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Raduan Al-Shedivat" alt="0xRaduan" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1733396051673894912/j7R1e9LV_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/0xRaduan" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Raduan Al-Shedivat
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@0xRaduan</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/0xRaduan/status/1668557577985179648" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">just bought one, love it.</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center">
                    <div class="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                      <img src="https://pbs.twimg.com/media/FyfoQqcacAEoXXR.jpg" title="Photo by Raduan Al-Shedivat"
                           alt="@dillionverma @linear @wopehq @reflectnotes @reactjs @tailwindcss @buildspace just bought one, love it. https://t.co/ZtHQXuwVQU"
                           class="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Yazin 🇵🇸" alt="yazinsai" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1214506674913976325/GhfomojM_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/yazinsai" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Yazin 🇵🇸
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@yazinsai</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/yazinsai/status/1668617800934641672" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Ordered, can't wait to try this out </span><a
                      href="https://twitter.com/dillionverma" target="_blank" rel="noopener noreferrer"
                      class="text-sm font-normal text-gray-500"><span>@dillionverma</span></a><span
                      class="text-sm font-normal">!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Weston Walker" alt="wes_walke" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1665933128437833728/HGkqsK8B_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/wes_walke" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Weston Walker
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@wes_walke</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/wes_walke/status/1668612106696941570" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Beautiful. Well done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Gonçalo Margalho" alt="DevAlien" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1668547806095605761/TvKAzN7A_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DevAlien" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Gonçalo Margalho
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DevAlien</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DevAlien/status/1668618017528479745" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Just bought it, keep delivering! looking forward to test it out</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/fredmaiaarantes"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Fred Maia ☄️" alt="fredmaiaarantes" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1650603603684368417/yqzF1r6M_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/fredmaiaarantes" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Fred Maia ☄️
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/fredmaiaarantes"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@fredmaiaarantes</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/fredmaiaarantes/status/1684676668445622272" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">I was looking for something like that yesterday. Well done and tks for sharing!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DesignSumu" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sumu"
                                                                                      alt="DesignSumu" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658198629923057664/RgfjYkM5_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DesignSumu" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sumu
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DesignSumu"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DesignSumu</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DesignSumu/status/1668559314272022528" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Pre-ordered, Excited to see what you ship!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/commandodev" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Ford" alt="commandodev" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1799005070719438848/uPjn_A_9_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/commandodev" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Ford</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/commandodev"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@commandodev</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/commandodev/status/1668640878225764354" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span
                      class="text-sm font-normal">Insta buy!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/FoundersMentor"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Masoud" alt="FoundersMentor" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1695152425500356608/p2UTrhBC_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/FoundersMentor" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Masoud</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/FoundersMentor"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@FoundersMentor</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/FoundersMentor/status/1668570645741948930" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this is beautiful man</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sand"
                                                                                      alt="sxndrao" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1599355664111128576/oU75F7DK_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sxndrao" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sand</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sxndrao</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sxndrao/status/1668634137547399168" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Copped one! Designs look sleek 🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/jordienr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of jordi"
                                                                                      alt="jordienr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658894614638493696/doBuLsxY_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/jordienr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">jordi
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/jordienr" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@jordienr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/jordienr/status/1681389309037772820" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This is awesome 👏</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/beneverman" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Everman" alt="beneverman" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1698075851076546560/pIufVEAF_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/beneverman" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Everman</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/beneverman"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@beneverman</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/beneverman/status/1681477151042797568" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Sick dude. Can’t wait to build with these once they’re all done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div
                class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Raduan Al-Shedivat" alt="0xRaduan" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1733396051673894912/j7R1e9LV_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/0xRaduan" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Raduan Al-Shedivat
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/0xRaduan" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@0xRaduan</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/0xRaduan/status/1668557577985179648" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">just bought one, love it.</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center">
                    <div class="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                      <img src="https://pbs.twimg.com/media/FyfoQqcacAEoXXR.jpg" title="Photo by Raduan Al-Shedivat"
                           alt="@dillionverma @linear @wopehq @reflectnotes @reactjs @tailwindcss @buildspace just bought one, love it. https://t.co/ZtHQXuwVQU"
                           class="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm">
                      <div class="shrink-0 snap-center sm:w-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Yazin 🇵🇸" alt="yazinsai" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1214506674913976325/GhfomojM_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/yazinsai" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Yazin 🇵🇸
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/yazinsai" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@yazinsai</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/yazinsai/status/1668617800934641672" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Ordered, can't wait to try this out </span><a
                      href="https://twitter.com/dillionverma" target="_blank" rel="noopener noreferrer"
                      class="text-sm font-normal text-gray-500"><span>@dillionverma</span></a><span
                      class="text-sm font-normal">!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Weston Walker" alt="wes_walke" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1665933128437833728/HGkqsK8B_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/wes_walke" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Weston Walker
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/wes_walke" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@wes_walke</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/wes_walke/status/1668612106696941570" target="_blank" rel="noreferrer"><span
                        class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Beautiful. Well done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Gonçalo Margalho" alt="DevAlien" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1668547806095605761/TvKAzN7A_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DevAlien" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Gonçalo Margalho
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DevAlien" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DevAlien</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DevAlien/status/1668618017528479745" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Just bought it, keep delivering! looking forward to test it out</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/fredmaiaarantes"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Fred Maia ☄️" alt="fredmaiaarantes" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1650603603684368417/yqzF1r6M_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/fredmaiaarantes" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Fred Maia ☄️
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/fredmaiaarantes"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@fredmaiaarantes</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/fredmaiaarantes/status/1684676668445622272" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">I was looking for something like that yesterday. Well done and tks for sharing!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/DesignSumu" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sumu"
                                                                                      alt="DesignSumu" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658198629923057664/RgfjYkM5_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/DesignSumu" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sumu
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/DesignSumu"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@DesignSumu</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/DesignSumu/status/1668559314272022528" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Pre-ordered, Excited to see what you ship!</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/commandodev" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Ford" alt="commandodev" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1799005070719438848/uPjn_A_9_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/commandodev" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Ford</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/commandodev"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@commandodev</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/commandodev/status/1668640878225764354" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span
                      class="text-sm font-normal">Insta buy!</span></div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/FoundersMentor"
                                                                target="_blank" rel="noreferrer"><img
                        title="Profile picture of Masoud" alt="FoundersMentor" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1695152425500356608/p2UTrhBC_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/FoundersMentor" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Masoud</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/FoundersMentor"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@FoundersMentor</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/FoundersMentor/status/1668570645741948930" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">this is beautiful man</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of Sand"
                                                                                      alt="sxndrao" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1599355664111128576/oU75F7DK_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/sxndrao" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Sand</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/sxndrao" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@sxndrao</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/sxndrao/status/1668634137547399168" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Copped one! Designs look sleek 🔥</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/jordienr" target="_blank"
                                                                rel="noreferrer"><img title="Profile picture of jordi"
                                                                                      alt="jordienr" height="48"
                                                                                      width="48"
                                                                                      src="https://pbs.twimg.com/profile_images/1658894614638493696/doBuLsxY_normal.jpg"
                                                                                      class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/jordienr" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">jordi
                        <svg aria-label="Verified Account" viewBox="0 0 24 24"
                             class="ml-1 inline h-4 w-4 text-blue-500">
                          <g fill="currentColor">
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/jordienr" target="_blank"
                                                                    rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@jordienr</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/jordienr/status/1681389309037772820" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">This is awesome 👏</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
              <div style="opacity: 0; transform: translateY(24px) translateZ(0px);">
                <div
                    class="relative flex h-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md max-h-32 w-72 min-w-[18rem] bg-background/60">
                  <div class="flex flex-row justify-between tracking-tight">
                    <div class="flex items-center space-x-2"><a href="https://twitter.com/beneverman" target="_blank"
                                                                rel="noreferrer"><img
                        title="Profile picture of Ben Everman" alt="beneverman" height="48" width="48"
                        src="https://pbs.twimg.com/profile_images/1698075851076546560/pIufVEAF_normal.jpg"
                        class="overflow-hidden rounded-full border border-transparent"></a>
                      <div><a href="https://twitter.com/beneverman" target="_blank" rel="noreferrer"
                              class="flex items-center whitespace-nowrap font-semibold">Ben Everman</a>
                        <div class="flex items-center space-x-1"><a href="https://twitter.com/beneverman"
                                                                    target="_blank" rel="noreferrer"
                                                                    class="text-sm text-gray-500 transition-all duration-75">@beneverman</a>
                        </div>
                      </div>
                    </div>
                    <a href="https://twitter.com/beneverman/status/1681477151042797568" target="_blank"
                       rel="noreferrer"><span class="sr-only">Link to tweet</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                           width="1em" xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </a></div>
                  <div class="break-words leading-normal tracking-tighter"><span class="text-sm font-normal">Sick dude. Can’t wait to build with these once they’re all done</span>
                  </div>
                  <div class="flex flex-1 items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
          <div
              class="pointer-events-none absolute inset-y-0 right-0 h-full  w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>

      <section class="container flex w-full flex-col items-center justify-center p-4">
        <div
            class="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
          <div class="absolute rotate-[35deg]">
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
            </div>
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
            </div>
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
            </div>
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
            </div>
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jack">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jack</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jack</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I've never seen anything like this before. It's amazing. I love it.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jill">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jill</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jill</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I don't know what to say. I'm speechless. This is amazing.
                  </blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/john">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">John</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@john</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
            </div>
            <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
              <div
                  class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jane">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jane</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jane</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/jenny">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">Jenny</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@jenny</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
                <figure
                    class="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                  <div class="flex flex-row items-center gap-2"><img class="rounded-full" width="32" height="32" alt=""
                                                                     src="https://avatar.vercel.sh/james">
                    <div class="flex flex-col">
                      <figcaption class="text-sm font-medium dark:text-white">James</figcaption>
                      <p class="text-xs font-medium dark:text-white/40">@james</p></div>
                  </div>
                  <blockquote class="mt-2 text-sm">I'm at a loss for words. This is amazing. I love it.</blockquote>
                </figure>
              </div>
            </div>
          </div>
          <div
              class="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="mx-auto size-16 text-black dark:text-white lg:size-24">
              <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              <path
                  d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
              <path d="m18 15-2-2"></path>
              <path d="m15 18-2-2"></path>
            </svg>
          </div>
          <div class="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white"><h1
              class="text-3xl font-bold lg:text-4xl">Stop wasting time on design.</h1>
            <p class="mt-2">Start your 7-day free trial. No credit card required.</p><a href="/"
                                                                                        class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6">Get
              Started
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a></div>
          <div
              class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black"></div>
        </div>

      </section>
    </main>


    <a class="bg-black text-white" @click="paymentQrCode">Qrcode</a>

    <div class="container h-screen w-100 bg-white  text-black">

      <!--      {{code_url}}-->
      <qr-code
          v-if="resData && resData.data.code_url"
          :value="resData.data.code_url"
          :options="{ width: 200 }"></qr-code>
      <!---->
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const resData = ref(null)
const code_url = ref(null)

async function paymentQrCode() {
  // console.log('---')
  const {data} = await useFetch('http://localhost:5005/wepay', {
    method: 'POST',
  })
  resData.value = JSON.parse(JSON.stringify(data.value))
  // const { data } = data.value
  if (data.value && data.value?.status === '200') {
    code_url.value = data.value?.data?.code_url
  }
  // console.log(data.value.status)
  // const res = await this.$axios.post('http://localhost:5000/wepay', {})
  // console.log(res)
  // resData.value = res
  // const ip = await this.$axios.$get('http://icanhazip.com')
  // this.ip = ip
}
</script>