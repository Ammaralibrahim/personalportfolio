import React from "react";
import CV1 from "./cv1.jpg";
import CV2 from "./cv2.jpg";
import Link from "next/link";

export default function CV() {
  return (
    <>
      <div className="flex justify-start items-center ">
        <Link href="/">
          <div className="fixed p-4 bg-gray-500 m-2 animate-bounce">Back</div>
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col gap-4 p-4">
          <div className="w-full flex justify-center items-center">
            <img
              src="https://i.postimg.cc/mg942bWx/Resume-Ammar-Alibrahim-24-08-2023-23-05-35-1-page-0001.jpg"
              alt="CV 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="https://i.postimg.cc/yNXzcvNv/Resume-Ammar-Alibrahim-24-08-2023-23-05-35-1-page-0002.jpg"
              alt="CV 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
