const Slider = () => {
  return (
    <>
      <div className="carousel w-full my-7">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="bg-[url('/dist/Images/action1.jpg')] w-full h-96 bg-cover rounded-xl bg-center bg-no-repeat flex flex-col  items-center  justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
            <div className="relative p-3">
              <h1 className="md:text-2xl font-bold mb-3 text-center text-white">
                Discover what gamers are saying about the latest titles!
              </h1>
              <p className="md:text-xl text-center md:w-4/6 mx-auto text-gray-400">
                Top trending games of the week.Detailed user and expert
                reviews.Ratings from a global gaming community
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="bg-[url('/dist/Images/action.jpg')] w-full h-96 bg-cover rounded-xl bg-center bg-no-repeat flex flex-col  items-center  justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-60  rounded-xl"></div>
            <div className="relative p-3">
              <h1 className="md:text-2xl font-bold mb-3 text-center text-white">
                Compare games before you buy!
              </h1>
              <p className="md:text-xl text-center md:w-4/6 mx-auto text-gray-400">
                Side-by-side comparison of features, gameplay, and graphics
                Performance analysis on different platforms (PC, Console,
                Mobile) Price tracking to find the best deals
              </p>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/*  */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="bg-[url('/dist/Images/adventure.jpg')] w-full h-96 bg-cover rounded-xl bg-center bg-no-repeat flex flex-col  items-center  justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
            <div className="relative p-3">
              <h1 className="md:text-2xl font-bold mb-3 text-center text-white">
                Watch. Learn. Play.
              </h1>
              <p className="md:text-xl text-center md:w-4/6 mx-auto text-gray-400">
                Integrated gameplay highlight videos and tutorials Twitch and
                YouTube live streaming support
              </p>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/*  */}
        <div id="slide4" className="carousel-item relative w-full">
          <div className="bg-[url('/dist/Images/racing.webp')] w-full h-96 bg-cover rounded-xl bg-center bg-no-repeat flex flex-col  items-center  justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
            <div className="relative p-3">
              <h1 className="md:text-2xl font-bold mb-3 text-center text-white">
                Connect with fellow gamers!
              </h1>
              <p className="md:text-xl text-center md:w-4/6 mx-auto text-gray-400">
                Forums and discussion boards for specific games Share your
                reviews and gameplay experiences Participate in weekly gaming
                challenges
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
