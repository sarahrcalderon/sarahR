import React, { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: object, element: string): void;
          InlineLayout: {
            SIMPLE: string;
          };
        };
      };
    };
  }
}

export default function Tradutor() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
}
