import React from "react";

const OurChefs = () => {
  return (
    <div className="mt-5 text-center space-y-3.5 px-2">
      <p className="text-4xl font-bold italic roboto ">Our Chefs</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img alt="" src="/chef1.jpg" className="h-56 w-full object-cover" />

          <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Brewing Joy, One Cup at a Time
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              "Welcome to our cozy coffee corner! I'm Mia, your friendly
              neighborhood barista. Every cup I make is more than just
              coffee—it's a moment of comfort, warmth, and connection. I
              carefully brew each drink with fresh beans, perfect timing, and a
              touch of creativity. Whether you're here for your morning boost or
              an afternoon escape, I’m always ready to serve you a cup full of
              care. Let’s make your day a little brighter, one sip at a time."
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img alt="" src="/chef2.jpg" className="h-56 w-full object-cover" />

          <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Where Fire Meets Flavor: The Art of Roasting
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              "I’m Luca, and roasting coffee is my passion and craft. Behind
              every cup we serve is a journey—from selecting high-quality beans
              sourced from sustainable farms to roasting them in small batches
              for the perfect depth and aroma. I believe coffee should tell a
              story, and I pour that philosophy into every roast. Whether you
              love it bold and strong or smooth and mellow, I’ve got just the
              roast for your taste. Come taste the difference dedication makes."
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img alt="" src="/chef3.jpg" className="h-56 w-full object-cover" />

          <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Bold Blends, Unexpected Twists – That’s My Style
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              "Hello there! I’m Aria, your flavor curator and creative explorer.
              I love blending traditional techniques with fresh, exciting ideas
              to bring new flavors to life. From velvety lattes with hints of
              caramel and cinnamon to refreshing cold brews with floral notes, I
              aim to surprise and delight your palate. Coffee is my canvas, and
              you're invited to experience the art in every drink. Try something
              new—you just might discover your next favorite blend!"
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OurChefs;
