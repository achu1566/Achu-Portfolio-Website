import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook that tracks page asset loading.
 * It waits for:
 *  1. The document to be fully loaded (images, fonts, etc.)
 *  2. A minimum display time so the loader doesn't flash too quickly
 *
 * @param {number} minDisplayMs - Minimum time to show loader (default: 800ms)
 * @returns {boolean} isLoading - Whether assets are still loading
 */
const usePageLoader = (minDisplayMs = 800) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let minimumTimePassed = false;
    let assetsLoaded = false;

    const tryFinish = () => {
      if (minimumTimePassed && assetsLoaded) {
        setIsLoading(false);
      }
    };

    // Minimum display timer
    const timer = setTimeout(() => {
      minimumTimePassed = true;
      tryFinish();
    }, minDisplayMs);

    // Check if document is already fully loaded
    if (document.readyState === "complete") {
      // Additional check: wait for all images on the page to load
      const images = Array.from(document.querySelectorAll("img"));
      const unloadedImages = images.filter((img) => !img.complete);

      if (unloadedImages.length === 0) {
        assetsLoaded = true;
        tryFinish();
      } else {
        let loadedCount = 0;
        const onImageLoad = () => {
          loadedCount++;
          if (loadedCount >= unloadedImages.length) {
            assetsLoaded = true;
            tryFinish();
          }
        };
        unloadedImages.forEach((img) => {
          img.addEventListener("load", onImageLoad);
          img.addEventListener("error", onImageLoad); // Don't block on failed images
        });
      }
    } else {
      // Wait for window load event
      const onLoad = () => {
        // After window load, also wait for any remaining images
        const images = Array.from(document.querySelectorAll("img"));
        const unloadedImages = images.filter((img) => !img.complete);

        if (unloadedImages.length === 0) {
          assetsLoaded = true;
          tryFinish();
        } else {
          let loadedCount = 0;
          const onImageLoad = () => {
            loadedCount++;
            if (loadedCount >= unloadedImages.length) {
              assetsLoaded = true;
              tryFinish();
            }
          };
          unloadedImages.forEach((img) => {
            img.addEventListener("load", onImageLoad);
            img.addEventListener("error", onImageLoad);
          });
        }
      };

      window.addEventListener("load", onLoad);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", onLoad);
      };
    }

    return () => clearTimeout(timer);
  }, [minDisplayMs]);

  return isLoading;
};

export default usePageLoader;
