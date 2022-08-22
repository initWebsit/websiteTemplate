import { useRef } from 'react';
export function useInitialized(check) {
    var initializedRef = useRef(check);

    if (check) {
        initializedRef.current = true;
    }

    return initializedRef.current;
}