import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: "50px",
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, handleIntersection]);

  return [ref, isVisible];
};
