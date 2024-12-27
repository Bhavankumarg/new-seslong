import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <Image
          src="/contact.png"
          width={1200}
          height={400}
          className="size-full"
        />
      </div>
    </>
  );
};

export default Banner;
