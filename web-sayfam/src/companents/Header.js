import headerData from "../data/headerData";
import "../App.css";

export default function Header() {
  const render = headerData.map((item) => {
    return (
      <>
        <div className="bg-indigo-900 w-full p-5 bg-gradient-to-r  to-green-400 from-indigo-900  mt-3">
          <h3 className=" text-lime-400 lg:text-4xl lg:w-9/12 lg:m-auto font-medium sm:text-3xl sm:w-9/12 sm:pb-3 sm:mx-auto max-sm:text-2xl max-sm:w-9/12 max-sm:mx-auto max-sm:m-auto max-sm:pb-3">
            {item.baslik}
          </h3>
          <div className="flex lg:flex-row lg:items-end lg:mb-36  lg:m-auto max-sm:w-9/12 sm:w-9/12  max-sm:m-auto sm:m-auto max-sm:flex-col sm:flex-col  ">
            <div className=" pr-5  flex-1">
              <h2 className=" aciklama text-lime-400    mb-9 font-medium max-sm:text-3xl  ">
                {item.aciklama1}
              </h2>
              <p className="text-gray-300 mb-2 text-2xl pr-3 ">
                {item.aciklama2}
              </p>
              <div className="flex lg:mt-3 gap-2 max-sm:my-5  max-sm:w-9/12 sm:mt-3 max-lg:mb-3">
                <a href="">
                  <img src={item.github} alt="" />
                </a>
                <a href="">
                  <img src={item.linkedin} alt="" />
                </a>
              </div>
            </div>
            <div>
              <img
                className=" max-sm:w-9/12 max-lg:w-9/12"
                src={item.heroRigth}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div className=" max-sm:w-full m-auto">{render}</div>;
}
