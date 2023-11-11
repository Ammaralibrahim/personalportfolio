import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cv1 from "./cv1.jpg"
import Cv2 from "./cv2.jpg"

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
            <Image
              src={Cv1} // Update with your image path
              alt="CV 1"
              width={600} // Adjust width and height according to your image
              height={400}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src={Cv2} // Update with your image path
              alt="CV 2"
              width={600} // Adjust width and height according to your image
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
