import React from "react";

import Footer from "@/components/Footer";

function LayoutFooter() {
  return (
    <Footer className="shrink-0">
      <div className="container mx-auto px-6 text-center space-y-3">
        <p className="text-sm">
          Star Wars and all related names, images, and characters are copyright
          © Lucasfilm Ltd. This is a fan-made application and is not affiliated
          with or endorsed by Lucasfilm Ltd.
        </p>
        <p className="text-sm">
          Data provided by the{" "}
          <a
            href="https://swapi.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Star Wars API (SWAPI)
          </a>
          .
        </p>
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://github.com/felahgs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Felipe Souza
          </a>
          .
        </p>

        <p className="text-xs mt-4 text-gray-500">
          © {new Date().getFullYear()} Galaxy Wiki. All rights reserved.
        </p>
      </div>
    </Footer>
  );
}

export default LayoutFooter;
