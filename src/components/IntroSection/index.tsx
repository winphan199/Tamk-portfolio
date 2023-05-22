import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import classNames from 'classnames';

const IntroBackGround = styled.div.attrs((props) => ({
  className: classNames('h-full', props.className),
}))`
  position: relative;
  padding-top: 720px;
  background: url('https://www.opiskelijantampere.fi/uploaded/section_images/sok/tampereen_opiskelumahdollisuudet/opiskelijan-tampere-opiskelumahdollisuudet-tamk.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
`;

const GradientBackground = styled.div.attrs((props) => ({
  className: classNames(
    'absolute top-0 left-0 right-0 bottom-0 pt-[720px]  bg-gradient-to-r from-zinc-800 to-transparent',
    props.className,
  ),
}))``;

const ScrollDownBtn = styled.div.attrs((props) => ({
  className: classNames(
    'absolute left-1/2 -translate-x-1/2 bottom-4 p-2 hover:cursor-pointer text-white text-3xl animate-bounce',
    props.className,
  ),
}))``;

function IntroSection() {
  return (
    <section className="relative h-screen">
      {/* background */}
      <IntroBackGround className="">
        {/* gradient layer */}
        <GradientBackground />
        {/* content */}
        <div className="absolute bottom-[20%] left-0 w-[45%] text-white ml-12">
          <h1 className="text-7xl mb-5">Practical Training Program</h1>
          <p className="text-xl text-[#bebebe] font-light">
            Welcome to one of the best trainee program for the best starter-kit to real-life experience in ICT field.
          </p>
          <button
            type="button"
            className="px-6 py-3 bg-transparent border-2 border-solid border-white  rounded-lg text-lg font-semibold mt-12 hover:bg-brand hover:text-white transition-colors hover:border-transparent"
          >
            Join us !
          </button>
        </div>
        <ScrollDownBtn className="">
          <BsIcons.BsChevronDoubleDown />
        </ScrollDownBtn>
      </IntroBackGround>
    </section>
  );
}

export default IntroSection;
