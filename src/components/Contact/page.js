"use client";

import React, { useEffect } from "react";

const VismeForm = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    // // Append the script to the body
    document.body.appendChild(script);

    // Initialize Visme form
    script.onload = () => {
      if (window.vismeEmbed) {
        window.vismeEmbed.init();
      }
    };

    // // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
   
      <div
        class="visme_d"
        data-title="Untitled Project"
        data-url="ojmdj1ve-untitled-project?fullPage=true"
        data-domain="forms"
        // data-full-page="true"
        data-min-height="100vh"
        data-form-id="85019"
      ></div>
     
   
  );
};

export default VismeForm;
