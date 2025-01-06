const Slide = ({ image}) => {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat min-h-[60vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      
    </div>
  );
};

export default Slide;
