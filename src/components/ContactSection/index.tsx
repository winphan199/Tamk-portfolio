import { Section } from '../UI';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export default function ContactSection() {
  return (
    <Section className="bg-brand/80">
      <div>
        <h6 className="text-lg mb-2 text-white font-medium">Contact Us</h6>
        <h1 className="text-2xl font-semibold text-yellow-300">Keep in touch with us</h1>
      </div>
      <div className="flex flex-col mt-28">
        <div className="w-full grid grid-cols-3 gap-4  ">
          <div className="col-span-1 relative top-0 hover:-top-1  shadow-lg hover:shadow-xl flex min-h-[272px] bg-white py-8 px-8 rounded-sm transition-all">
            <div className="absolute w-3/4 -top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <img
                className=" block  w-3/5 rounded-full border-8 border-solid border-white shadow-md"
                src="https://pt2-portfolio-tamk.s3.amazonaws.com/petteri_jekunen.jpeg"
                alt="Petteri Jekunen"
              />
              <div className="w-full flex flex-col items-center mt-4 ">
                <h3 className="w-full text-xl text-brand font-semibold text-center">Petteri Jekunen</h3>
                <h3 className="w-full text-base text-black/70 text-center">Supervising teacher</h3>
                <div className="mt-3">
                  <div className="flex ">
                    <MdIcons.MdEmail className="text-xl mr-3 text-brand" />
                    <h3 className="text-sm text-black/70">petteri.jekunen@tuni.fi</h3>
                  </div>
                  <div className="flex mt-1">
                    <MdIcons.MdContactPhone className="text-xl mr-3 text-brand" />
                    <h3 className="text-sm text-black/70">+358505876777</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative top-0 hover:-top-1  shadow-lg hover:shadow-xl flex min-h-[272px] bg-white py-8 px-8 rounded-sm transition-all">
            <div className="absolute w-3/4 -top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <img
                className=" block  w-3/5 rounded-full border-8 border-solid border-white shadow-md"
                src="https://pt2-portfolio-tamk.s3.amazonaws.com/esa_parkkila.jpeg"
                alt="Esa Parkkila"
              />
              <div className="w-full flex flex-col items-center mt-4 ">
                <h3 className="w-full text-xl text-brand font-semibold text-center">Esa Parkkila</h3>
                <h3 className="w-full text-base text-black/70 text-center">Training supervisor</h3>
                <div className="mt-3">
                  <div className="flex ">
                    <MdIcons.MdEmail className="text-xl mr-3 text-brand" />
                    <h3 className="text-sm text-black/70">esa.parkkila@tuni.fi</h3>
                  </div>
                  <div className="flex mt-1">
                    <MdIcons.MdContactPhone className="text-xl mr-3 text-brand" />
                    <h3 className="text-sm text-black/70">+358406578868</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative top-0 hover:-top-1  shadow-lg hover:shadow-xl flex min-h-[272px] bg-white py-8 px-8 rounded-sm transition-all">
            <div className="absolute w-3/4 -top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <img
                className=" block  w-3/5 rounded-full border-8 border-solid border-white shadow-md"
                src="https://pt2-portfolio-tamk.s3.amazonaws.com/petteri_jekunen.jpeg"
                alt="Petteri Jekunen"
              />
              <div className="w-full flex flex-col items-center mt-4 ">
                <h3 className="w-full text-xl text-brand font-semibold text-center">Petteri Jekunen</h3>
                <h3 className="w-full text-base text-black/70 text-center">Senior Lecturer</h3>
                <div className="mt-3">
                  <div className="flex ">
                    <MdIcons.MdEmail className="text-xl mr-3 text-brand" />
                    <h3 className="text-sm text-black/70">petteri.jekunen@tuni.fi</h3>
                  </div>
                  <div className="flex mt-1">
                    <MdIcons.MdContactPhone className="text-xl mr-3 text-brand" />
                    <h3 className="text-sm text-black/70">(+358) 12345678</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
