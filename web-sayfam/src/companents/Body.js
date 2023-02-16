import body from "../data/skills";

export default function Body() {
  return (
    <div className="skills flex sm:w-full max-sm:w-full sm:mx-auto  max-sm:mx-auto  lg:flex-row sm:flex-col sm:items-center lg:items-start  sm:py-10 max-sm:py-8 bg-white max-sm:flex-col max-sm:items-center">
      <div className="baslik w-1/4 ml-60 lg:text-5xl sm:text-4xl sm:w-1/2 sm:mb-5  text-indigo-700 font-medium max-sm:m-0 max-sm:text-2xl max-sm:mb-3">
        <h2>Skills</h2>
      </div>
      <div className="skillsBoks h-full  flex flex-wrap lg:w-3/4 sm:w-3/4 max-sm:w-3/4  lg:gap-y-3 sm:gap-y-3 lg:gap-x-3 lg:mr-32  gap justify-between max-sm:gap-y-6 ">
        {body.map((item) => (
          <div className="flex  items-center lg:gap-x-4 lg:w-[40%]  sm:w-[40%] sm:gap-x-3  max-sm:w-[35%]    max-sm:gap-x-2">
            <img
              className="lg:w-[85px] sm:w-[100px] max-sm:w-[40px]"
              src={item.url}
              alt=""
            />
            <span className=" max-sm:text-xs">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
