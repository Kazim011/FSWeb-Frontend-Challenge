import { p1, p2 } from "../data/projectData";
import reduxfilm from "../foto/p3image.png";
import shopping from "../foto/p4image.png";

export default function Project() {
  return (
    <div className="project  max-sm:w-full mx-auto pb-8 bg-lime-300 lg:py-20 max-sm:py-10 sm:py-14">
      <h1 className="baslik sm:text-center sm:text-5xl mx-auto mb-7 lg:text-5xl max-sm:text-3xl max-sm:text-center font-semibold  text-indigo-700 ">
        Projects
      </h1>
      <div className="box-1 mb-9">
        {p1.map((item) => (
          <div className="p1 flex lg:w-9/12  max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white  rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3">
              <img
                className=" lg:w-[360px] lg:h-[360px] rounded-lg"
                src={item.image1}
                alt=""
              />
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4">
                  Gratitude Journal
                </h2>
                <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500">
                  {item.aciklama}
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                <img src={item.react} alt="" />
                <img src={item.redux} alt="" />
                <img src={item.vercel} alt="" />
              </div>
              <div className="link flex gap-3 	text-decoration-line: underline max-sm:pb-3">
                <a
                  href="https://fsweb-s10-challenge-cyan.vercel.app"
                  target="_blank"
                >
                  Wiew Site
                </a>
                <a
                  href="https://github.com/Kazim011/fsweb-s10-challenge"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box-2 mb-9">
        {p2.map((item) => (
          <div className="p1 flex lg:w-9/12  max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white  rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-sm:w-full max-sm:mb-3">
              <img
                className="lg:w-[360px] lg:h-[360px] max-lg:w-[756px] max-lg:h-[472px] rounded-lg"
                src={item.image2}
                alt=""
              />
            </div>
            <div className="p-text w-full max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-4 sm:pb-4 sm:text-2xl text-indigo-700 lg:text-3xl max-sm:text-2xl font-semibold">
                  Pizza Order
                </h2>
                <p className="p1-aciklama lg:pb-6 max-lg:pb-4  lg:text-xl text-slate-500">
                  {item.aciklama}
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4  gap-3  flex-wrap">
                <img src={item.react} alt="" />
                <img src={item.redux} alt="" />
                <img src={item.vercel} alt="" />
              </div>
              <div className="link flex gap-3 	text-decoration-line: underline max-sm:pb-3 ">
                <a href="https://cliff-cafe.netlify.app" target="_blank">
                  Wiew Site
                </a>
                <a
                  href="https://github.com/Kazim011/FSWeb-S7-Challenge"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box-3 mb-9">
        {p1.map((item) => (
          <div className="p1 flex lg:w-9/12  max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white  rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3">
              <img
                className=" lg:w-[360px] lg:h-[360px] rounded-lg"
                src={reduxfilm}
                alt=""
              />
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4">
                  Redux Film
                </h2>
                <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500">
                  {item.aciklama}
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                <img src={item.react} alt="" />
                <img src={item.redux} alt="" />
                <img src={item.vercel} alt="" />
              </div>
              <div className="link flex gap-3 	text-decoration-line: underline max-sm:pb-3">
                <a
                  href="https://fsweb-s10g2-redux-filmler-5rze1st37-kazim011.vercel.app/movies"
                  target="_blank"
                >
                  Wiew Site
                </a>
                <a
                  href="https://github.com/Kazim011/fsweb-s10g2-redux-filmler"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box-4 mb-9">
        {p1.map((item) => (
          <div className="p1 flex lg:w-9/12  max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white  rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3">
              <img
                className=" lg:w-[360px] lg:h-[360px] rounded-lg"
                src={shopping}
                alt=""
              />
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4">
                  Shopping Cart
                </h2>
                <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500">
                  {item.aciklama}
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                <img src={item.react} alt="" />
                <img src={item.redux} alt="" />
                <img src={item.vercel} alt="" />
              </div>
              <div className="link flex gap-3 	text-decoration-line: underline max-sm:pb-3">
                <a
                  href="https://fsweb-s10g2-redux-filmler-p1pw-jiuxnstrg-kazim011.vercel.app/"
                  target="_blank"
                >
                  Wiew Site
                </a>
                <a
                  href="https://github.com/Kazim011/fsweb-s11g1-shopping-cart"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
