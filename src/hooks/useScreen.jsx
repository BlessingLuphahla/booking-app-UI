import { createContext, useContext, useState, useEffect } from "react";

const MediaQueryBreakPoints = {
  mobile: 768,
  tablet: 1024,
};

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MediaQueryBreakPoints.mobile
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MediaQueryBreakPoints.mobile);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => useContext(ScreenContext);
