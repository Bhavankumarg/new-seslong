import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <Image
          src="/Products/products-banner-new.png"
          width={1200}
          height={400}
          className="size-full"
          alt="products banner"
        />
      </div>
    </>
  );
};

export default Banner;
