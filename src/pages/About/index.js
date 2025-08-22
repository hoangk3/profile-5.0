import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faEarthAsia, faUserGraduate, faSchool } from "@fortawesome/free-solid-svg-icons";
import ChillImg from "../../assets/imgs/images.jpg";
import Img from "../../components/img";

function About() {
  useEffect(() => {
    document.title = "Puppy";
  }, []);

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>About 💤</h2>
      </div>
      <div className='mt-4 font-semibold md:grid grid-cols-2 gap-x-4'>
        <div>
          <div>
            <h3 className='mb-2 text-xl mt-6'>
              <span>⬤</span> Tôi học lập trình như thế nào? 🤔
            </h3>
            <p className='text-slate-800/90 text-pretty'>
              Tôi luôn tò mò về cách các trang web, phần mềm và hệ thống bảo mật vận hành – từ những nguyên tắc cơ bản trong lập trình đến các cơ chế bảo mật nâng cao. 
             Chính vì vậy, mình đã theo đuổi Reverse Engineering & Security Research, khám phá cách phần mềm hoạt động từ bên trong, phân tích lỗ hổng và tìm ra những giải pháp tối ưu.
            </p>
          </div>
          <div>
            <h3 className='mb-2 text-xl mt-6'>
              <span>⬤</span> Trang web này để làm gì? 🍜
            </h3>
            <Img className='drag-none size-40 sm:size-44 md:size-48 lg:size-60 float-right mb-1 ml-2 select-none rounded-md border-4 border-pink-600/50 bg-neutral-800' alt='img' src={ChillImg}></Img>
            <p className='text-slate-800/90 text-pretty'>
              Đây là trang cá nhân nơi mình chia sẻ về hành trình, kỹ năng và những dự án đã thực hiện trong lĩnh vực Reverse Engineering & Security Research, cũng như Data Analysis & Visualization. Tại đây, bạn có thể tìm hiểu về kinh nghiệm, chuyên môn của mình, cũng như cách mình tiếp cận và giải quyết các vấn đề kỹ thuật.
             Ngoài việc giới thiệu bản thân, mình cũng mong muốn tạo ra một không gian để kết nối, trao đổi ý tưởng và học hỏi từ cộng đồng. Nếu bạn quan tâm đến các chủ đề liên quan hoặc tìm kiếm cơ hội hợp tác, đừng ngần ngại liên hệ! 🚀</p>
          </div>
        </div>
        <div>
          <div className='hidden md:block md:pl-12 lg:pl-28 xl:pl-32'>
            <div className='p-4 rounded-lg border-[2px] bg-slate-100 border-slate-200'>
              <div className='flex gap-3 items-center'>
                <div className='text-slate-700'>
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <p>Work</p>
              </div>
              <div className='flex mt-6 gap-3 items-center'>
                <div className='size-10 rounded-full bg-slate-800 text-slate-100 text-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={faEarthAsia} />
                </div>
                <div className='flex-1'>
                  <h5 className='text-sm'>Developer</h5>
                  <div className='flex justify-between text-xs text-slate-700'>
                    <p>Dottie Community</p>
                    <p>2021 - now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 mt-4 rounded-lg border-[2px] bg-slate-100 border-slate-200'>
              <div className='flex gap-3 items-center'>
                <div className='text-slate-700'>
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <p>Education</p>
              </div>
              <div className='flex mt-6 gap-3 items-center'>
                <div className='size-10 rounded-full bg-slate-800 text-slate-100 text-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={faSchool} />
                </div>
                <div className='flex-1'>
                  <h5 className='text-sm'>THPT Tam Dương</h5>
                  <div className='flex justify-between text-xs text-slate-700'>
                    <p>Normal student</p>
                    <p>2024 - 2027</p>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <a href='https://thpttamduong.vinhphuc.edu.vn/home/thpttamduong.html?qi=83_86202472' className='w-full py-2 flex text-sm hover:bg-slate-700 items-center gap-2 justify-center text-slate-100 bg-slate-800 rounded-lg'>
                  <span>
                    <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                  </span>
                  <span>Web trường</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
