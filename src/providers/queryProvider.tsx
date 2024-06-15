"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            // staleTime: 60 * 1000,
          },
        },
      })
  )
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
export default ClientProvider




// "use client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// interface Props {
//   children: any
// }

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // keepPreviousData: false,
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       // cacheTime: Infinity,
//     }
//   }
// });

// const QueryProvider = ({ children }: Props) => (
//   <QueryClientProvider client={ queryClient }>
//     {children}
//     {typeof window !== 'undefined' && <ReactQueryDevtools initialIsOpen={false} />}
//     {/* <ReactQueryDevtools initialIsOpen = { false} /> */}
//   </QueryClientProvider>
// )

// export default QueryProvider
