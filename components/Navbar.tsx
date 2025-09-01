// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "./Button"

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//             {link.label}
//           </Link>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   )
// }

// export default Navbar

// "use client";

// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";
// import { useState } from "react";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <li
//             key={link.key}
//             className="relative group"
//             onMouseEnter={() => setOpenDropdown(link.key)}
//             onMouseLeave={() => setOpenDropdown(null)}>
//             {link.children ? (
//               <>
//                 <span className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                   {link.label}
//                 </span>
//                 {/* Dropdown */}
//                 {openDropdown === link.key && (
//                   <ul className="absolute left-0 top-full mt-1 bg-white text-black shadow-lg rounded-lg w-40">
//                     {link.children.map((child) => (
//                       <li key={child.key}>
//                         <Link
//                           href={child.href}
//                           className="block px-4 py-2 hover:bg-gray-100">
//                           {child.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             ) : (
//               <Link
//                 href={link.href}
//                 className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                 {link.label}
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(link.key)}
            onMouseLeave={() => setOpenDropdown(null)}>
            {link.children ? (
              <>
                <span className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${
                      openDropdown === link.key ? "rotate-180" : ""
                    }`}
                  />
                </span>
                {/* Dropdown */}
                {openDropdown === link.key && (
                  <ul className="absolute left-0 top-full  bg-white text-black shadow-lg rounded-lg w-80">
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 hover:bg-gray-100">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter flex gap-8 hidden">
        {/* <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        /> */}
        <Link href="/">
          <Image src="/spu-logo.png" alt="logo" width={74} height={29} />
        </Link>
        {/* <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        /> */}
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
