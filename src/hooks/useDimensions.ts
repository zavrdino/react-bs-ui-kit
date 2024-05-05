import { useState, useEffect, useRef } from 'react';

export const  useDimensions = (initialDimensions = { initialHeight: 0, initialWidth: 0 }) => {
    const ref = useRef<any>()

    const [width, setWidth] = useState(initialDimensions.initialWidth);
    const [height, setHeight] = useState(initialDimensions.initialHeight);

    useEffect(() => {
        const component  = ref?.current

        if (component) {
            const updateDimensions = (e: any) => {
                setWidth(component.clientWidth);
                setHeight(component.clientHeight);
            };

            updateDimensions(null);

            const observer = new ResizeObserver(updateDimensions)

            observer.observe(component)

            return () => {
                observer.disconnect()
            };
        }
    }, [ref]);

    return { width, height, ref };
}
