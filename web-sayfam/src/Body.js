import body from "./data/skills";

export default function Body() {
  return (
    <div className="skills w-9/12  h-[430px] mx-auto flex flex-row items-start py-20 bg-white">
      <div className="baslik w-1/4 ml-60 text-5xl text-indigo-700 font-medium">
        <h2>Skills</h2>
      </div>
      <div className="skillsBoks h-full  flex flex-col flex-wrap w-3/4 gap-y-3 gap justify-between">
        {body.map((item) => (
          <div className="flex  items-center gap-x-4  ">
            <img className="w-[120px]" src={item.url} alt="" />
            <span>{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
