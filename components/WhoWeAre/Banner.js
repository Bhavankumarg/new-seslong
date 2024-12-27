import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <Image
          src="/who-we-are/who-we-are.png"
          width={1200}
          height={400}
          className="size-full"
          alt="whoweare banner"
        />
      </div>
    </>
  );
};

export default Banner;
