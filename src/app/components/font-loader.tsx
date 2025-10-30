"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    
    const fontStyles = `
      @font-face {
        font-family: 'Airbnb Cereal';
        src: url('${basePath}/fonts/AirbnbCereal_W_Lt.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Airbnb Cereal';
        src: url('${basePath}/fonts/AirbnbCereal_W_Bk.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Airbnb Cereal';
        src: url('${basePath}/fonts/AirbnbCereal_W_Md.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Airbnb Cereal';
        src: url('${basePath}/fonts/AirbnbCereal_W_Bd.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Airbnb Cereal';
        src: url('${basePath}/fonts/AirbnbCereal_W_XBd.otf') format('opentype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Airbnb Cereal';
        src: url('${basePath}/fonts/AirbnbCereal_W_Blk.otf') format('opentype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = fontStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return null;
}
