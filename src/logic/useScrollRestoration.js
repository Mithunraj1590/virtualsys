import { useEffect } from "react";
import Router from "next/router";

function saveScrollPos(url) {
  const scrollPos = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
}

function restoreScrollPos(url) {
  const scrollPos = JSON.parse(sessionStorage.getItem(url));
  if (scrollPos) {
    window.scrollTo(scrollPos.x, scrollPos.y);
    // Remove the item from session storage after restoring scroll position
    sessionStorage.removeItem(url);
  }
}

export default function useScrollRestoration(router) {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      // console.log(window.history, router, "check this////");
      let shouldScrollRestore = false;
      window.history.scrollRestoration = "manual";
      restoreScrollPos(router.asPath);

      const onRouteChangeStart = (url) => {
        // Check if the navigation is a refresh
        const isRefresh = url === router.asPath;

        if (!isRefresh) {
          saveScrollPos(router.asPath);
        } else {
          // If it's a refresh, clear the scroll position
          sessionStorage.removeItem(router.asPath);
        }
      };

      const onRouteChangeComplete = (url) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPos(url);
        }
      };

      Router.events.on("routeChangeStart", onRouteChangeStart);
      Router.events.on("routeChangeComplete", onRouteChangeComplete);
      Router.beforePopState(() => {
        shouldScrollRestore = true;
        return true;
      });

      return () => {
        Router.events.off("routeChangeStart", onRouteChangeStart);
        Router.events.off("routeChangeComplete", onRouteChangeComplete);
        Router.beforePopState(() => true);
      };
    }
  }, []);
}
