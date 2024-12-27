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
          alt="contact banner"
        />
      </div>
    </>
  );
};

export default Banner;
