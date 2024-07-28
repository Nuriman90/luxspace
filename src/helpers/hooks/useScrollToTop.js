import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Posisi Tampilan Hit Pertama Berada Di Posisi Atas
export default function useScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.key]);
}