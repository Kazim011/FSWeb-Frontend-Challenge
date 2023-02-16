import { hakkımda } from "../data/profilData";
import { aboutMe } from "../data/profilData";
import profil from "../foto/profil.png";

export default function Profil() {
  return (
    <div className="profil  lg:mx-auto  sm:mx-auto bg-indigo-700 lg:py-16 sm:py-12 max-sm:py-10 max-sm:w-full max-sm:mx-auto  ">
      <h2 className="baslik lg:w-9/12 lg:mx-auto lg:mb-8 lg:text-5xl sm:w-9/12 sm:mx-auto  sm:mb-6  text-lime-400 font-medium max-sm:text-3xl max-sm:w-9/12 max-sm:m-auto max-sm:mb-5 max-sm:text-center max-lg:text-6xl max-lg:text-center   ">
        Profile
      </h2>
      <div className="profil-content lg:w-9/12 flex lg:flex-row  lg:justify-center lg:items-stretch lg:mx-auto sm:flex-col sm:w-9/12 sm:mx-auto  max-sm:flex-col max-sm:items-center ">
        {hakkımda.map((item) => (
          <div className="basic-info max-sm:pl-4 ">
            <h3 className="lg:mb-2 lg:text-4xl sm:mb-2  text-white font-medium max-sm:pb-2 max-lg:text-3xl max-lg:text-center">
              Basic Information
            </h3>
            <div className="profil-detay flex max-lg:w-[300px] lg:h-[222px] max-sm:mb-3 max-sm:pl-3 sm:mb-3 max-lg:mx-auto ">
              <div className=" lg:w-[150px]  max-sm:text-lg pr-5 sm:text-lg  lg:text-xl h-full text-black font-medium  sm:m-0 ">
                <p className=" pb-2">Doğum tarihi</p>
                <p className=" pb-2">İkamet Şehri</p>
                <p className=" pb-2">Eğitim Durumu</p>
                <p className=" pb-2">Tercih Ettiği Rol</p>
              </div>
              <div className="lg:w-[170px] max-sm:w-[170px] sm:w-[170px] max-sm:text-lg sm:text-lg lg:text-xl h-full lg:m-auto sm:m-0 text-white   ">
                <p className=" pb-2">{item.dogumTrh}</p>
                <p className=" pb-2">{item.ikametgah}</p>
                <p className=" pb-2">{item.egitim}</p>
                <p className=" pb-2">{item.rolTercihi}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="image lg:w-1/3  max-sm:w-9/12 sm:mx-auto max-sm:pb-4 max-lg:pb-3  ">
          <img
            className="lg:w-full max-sm:w-9/12 sm:w-9/12  max-sm:m-auto h-full"
            src={profil}
            alt=""
          />
        </div>
        <div className="about-box lg:w-1/3 sm:w-9/12 max-sm:w-9/12 max-lg:px-4  max-sm:m-auto  max-sm:px-4   max-sm:mt-5 sm:mx-auto  ">
          <h3 className="mb-2 lg:text-4xl text-white font-medium max-lg:text-3xl max-lg:text-center">
            About Me
          </h3>
          <div className="hakkımda-detay text-white lg:text-xl sm:text-lg max-lg:px-5  ">
            <p className="lg:pb-3 max-sm:pb-3 sm:pb-3">{aboutMe[0].about}</p>
            <p className="">{aboutMe[1].about1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
