import { useEffect, useState, useRef, RefObject } from 'react';

export default function useIntersectionObserver(
    options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }
): [RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(element); // Trigger only once
            }
        }, options);

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return [ref, isVisible];
}
