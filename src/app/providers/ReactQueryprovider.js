'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const ReactQueryprovider = ({children}) => {
    const queryClint = new QueryClient();
    return (
        <QueryClientProvider client={queryClint}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryprovider;