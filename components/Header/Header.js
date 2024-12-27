// import React from "react";
// import Image from "next/image";
// import MainMenu from "../Header/Slider";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <div className="flex h-[10vh] items-center bg-[#000]">
//       <div className="container mx-auto grid w-10/12 grid-cols-2">
//         <div className="flex items-center justify-start">
//           <Link href="/">
//             <Image
//               src="/seslong-logo.svg"
//               width={400}
//               height={400}
//               className="w-[200px]"
//               alt="seslong logo"
//             />
//           </Link>
//         </div>
//         <div className="flex items-center justify-end">
//           <MainMenu />
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-5 my-10 items-center justify-center">
        <li><Link className="text-orange-500" href="/">Home </Link></li>
        <li><Link className="text-orange-500" href="/who-we-are">Who We Are </Link></li>
        <li><Link className="text-orange-500" href="/what-we-do">What We Do </Link></li>
        <li><Link className="text-orange-500" href="/products">Products </Link></li>
        <li><Link className="text-orange-500" href="/contact-us">Contact Us </Link></li>
      </ul>
    </div>
  );
};

export default Header;
