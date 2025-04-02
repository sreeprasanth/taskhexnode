// src/components/Footer.jsx
import React from "react";
const footerNavItems = [
  {
    href: "https://www.hexnode.com/legal/terms-of-use/",
    name: "Terms of Use"
  },
  {
    href: "https://www.hexnode.com/legal/privacy-policy/",
    name: "Privacy"
  },
  {
    href: "https://www.hexnode.com/legal/cookies-policy/",
    name: "Cookies"
  }
]
const Footer = () => {

  return (

    <footer>
      <nav>
        <div className="bg-[#f2f2f2] p-[30px_0] sm:p-[20px_0]">
          <div className="w-[88%] mx-auto md:max-w-[1300px]">
            <div className="flex flex-col flex-wrap justify-center items-center w-full sm:flex-row sm:justify-between">
              <div className="flex flex-col sm:flex-row">
                <div className="m-[0_0_20px] order-1 sm:m-0 sm:order-2">
                  <ul className="flex flex-row flex-wrap p-0 m-0 ">
                    {footerNavItems?.map((items) => {
                      return (
                        <li class='inline-block leading-1 list-none after:content-["-"] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden  '>
                          <a
                            class="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]"
                            role="link"
                            target="_self"
                            href={items?.href}
                          >
                            {items.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex order-3">
                <p class="text-[12px] leading-[24px] text-text-default font-medium m-0">Copyright © 2025 Mitsogo Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
