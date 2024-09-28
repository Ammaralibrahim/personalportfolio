import React from "react";
import Link from "next/link";

export default function CV() {
  return (
    <>
      <div className="flex justify-start items-center">
        <Link href="/">
          <div className="fixed p-4 bg-gray-500 m-2 animate-bounce">Back</div>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 p-4">
          <iframe
            src="https://pdflink.to/ammaralibrahimcv/embed/"
            frameBorder="0"
            style={{
              border: "none",
              height: "1000px",
              width: "1000px",
              maxWidth: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
