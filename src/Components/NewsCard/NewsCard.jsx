import { Fade } from "react-awesome-reveal";
const NewsCard = ({ news }) => {
  const { image_url, web, author, post_date, title } = news;
  return (
    <>
      <Fade direction="right" triggerOnce="true">
        <div className="card md:card-side  bg-base-100 border-2">
          <figure className="md:w-[30%] p-4">
            <img
              className="rounded-lg w-full h-40"
              src={image_url}
              alt={title}
            />
          </figure>
          <div className="card-body md:w-[70%] space-y-5 md:space-y-3">
            <a
              className="card-title md:text-2xl font-bold hover:text-accent hover:underline"
              href={web}
              target="_blank"
            >
              {title}
            </a>
            <h2></h2>
            <div className="space-y-5 md:space-y-3">
              <h1 className="flex items-center gap-3">
                <span>
                  <div className="avatar border-2 rounded-full p-1">
                    <div className="w-12 rounded-full">
                      <img src={author?.profile_url} />
                    </div>
                  </div>
                </span>
                <span className="text-xl font-semibold font-serif">
                  {author?.name}
                </span>
              </h1>
              <h1 className="font-semibold">
                Date : <span className="text-gray-400"> {post_date}</span>
              </h1>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default NewsCard;
