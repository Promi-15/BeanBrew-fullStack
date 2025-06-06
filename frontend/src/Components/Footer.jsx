import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <hr />
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 ">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-s lg:border-b-0 lg:py-10 lg:ps-16 dark:border-gray-800">
             

              <div className="mt-8 space-y-2 lg:mt-0">
                <span className="hidden h-1 w-10 rounded-sm bg-teal-500 lg:block"></span>

                <div>
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                    Request a Demo
                  </h2>

                  <p className="mt-4 max-w-lg text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, harum deserunt nesciunt praesentium, repellendus
                    eum perspiciatis ratione pariatur a aperiam eius numquam
                    doloribus asperiores sunt.
                  </p>
                </div>

                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="rounded-md border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white"
                    />

                    <button className="mt-1 w-full rounded-sm bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="py-8 lg:pe-16">
              <div className="hidden  lg:block">
               <img src="/coffeecup.png" alt="" />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Services
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        1on1 Coaching
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Company Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        HR Consulting
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Company
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Helpful Links
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 items-center border-t border-gray-100 dark:border-gray-80 flex">
                <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
                  &copy; 2022. Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
