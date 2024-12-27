import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <Image
          src="/home-page-banner.png"
          width={1200}
          height={400}
          className="size-full"
          alt="homepage banner"
        />
      </div>
    </>
  );
};

export default Banner;
