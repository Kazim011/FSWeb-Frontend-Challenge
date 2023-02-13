import headerData from "./data/headerData";

export default function Header() {
  const render = headerData.map((item) => {
    return (
      <>
        <div className="bg-indigo-900 w-full p-5 bg-gradient-to-r  to-green-400 from-indigo-900  mt-3">
          <h3 className=" text-lime-400 text-lg w-9/12 m-auto font-medium">
            {item.baslik}
          </h3>
          <div className="flex flex-row items-end mb-36 w-9/12 m-auto ">
            <div className=" pr-5  flex-1 ">
              <h2 className="text-lime-400 text-5xl  mb-9 font-medium">
                {item.aciklama1}
              </h2>
              <p className="text-gray-300 mb-2 ">{item.aciklama2}</p>
              <div className="flex mt-3 gap-2">
                <a href="">
                  <img className="" src={item.github} alt="" />
                </a>
                <a href="">
                  <img className="" src={item.linkedin} alt="" />
                </a>
              </div>
            </div>
            <div>
              <img src={item.heroRigth} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div className=" w-9/12 m-auto">{render}</div>;
}
