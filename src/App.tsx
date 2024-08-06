import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { RouterProvider } from 'react-router-dom';
import router from './infra/router';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
});

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage
});

function App() {
    return (
        <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
        >
            <RouterProvider router={router} />
        </PersistQueryClientProvider>
    );
}

export default App;
