import { useRef, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as Io5Icons from 'react-icons/io5';
import * as SiIcons from 'react-icons/si';
import { Swiper as SwiperType } from 'swiper';

import { Section } from '../UI';
import HorizontalSlideContent from './HorizontalSlideContent';
import VerticalSlideShow from './VerticalSlideShow';
import { IProject } from './Interface';

const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'TAMK Portfolio',
    field: 'Web Development',
    content:
      'Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly.',
    technologies: [
      { name: 'Nodejs', icon: FaIcons.FaNodeJs, color: '#7ec729' },
      {
        name: 'Tailwindcss',
        icon: SiIcons.SiTailwindcss,
        color: '#12c2b2',
      },
      {
        name: 'JavaScript',
        icon: Io5Icons.IoLogoJavascript,
        color: '#eed91b',
      },
    ],
    img: 'https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-scaled.jpg',
    url: '',
  },
  {
    id: 2,
    title: 'TAMK Portfolio 2',
    field: 'Web Development',
    content:
      'Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly.',
    technologies: [
      { name: 'Nodejs', icon: FaIcons.FaNodeJs, color: '#7ec729' },
      {
        name: 'Tailwindcss',
        icon: SiIcons.SiTailwindcss,
        color: '#12c2b2',
      },
      {
        name: 'JavaScript',
        icon: Io5Icons.IoLogoJavascript,
        color: '#eed91b',
      },
    ],
    img: 'https://wallpaperaccess.com/full/1761712.jpg',
    url: '',
  },
  {
    id: 3,
    title: 'TAMK Portfolio 3',
    field: 'Web Development',
    content:
      'Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly.',
    technologies: [
      { name: 'Nodejs', icon: FaIcons.FaNodeJs, color: '#7ec729' },
      {
        name: 'Tailwindcss',
        icon: SiIcons.SiTailwindcss,
        color: '#12c2b2',
      },
      {
        name: 'JavaScript',
        icon: Io5Icons.IoLogoJavascript,
        color: '#eed91b',
      },
    ],
    img: 'https://wallpapers.com/images/hd/aesthetic-anime-background-uniiofevfptrbv8t.jpg',
    url: '',
  },
  {
    id: 4,
    title: 'TAMK Portfolio 4',
    field: 'Web Development',
    content:
      'Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly.',
    technologies: [
      { name: 'Nodejs', icon: FaIcons.FaNodeJs, color: '#7ec729' },
      {
        name: 'Tailwindcss',
        icon: SiIcons.SiTailwindcss,
        color: '#12c2b2',
      },
      {
        name: 'JavaScript',
        icon: Io5Icons.IoLogoJavascript,
        color: '#eed91b',
      },
    ],
    img: 'https://images.hdqwalls.com/wallpapers/anime-background-city-night-4k-pb.jpg',
    url: '',
  },
  {
    id: 5,
    title: 'TAMK Portfolio 5',
    field: 'Web Development',
    content:
      'Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly.',
    technologies: [
      { name: 'Nodejs', icon: FaIcons.FaNodeJs, color: '#7ec729' },
      {
        name: 'Tailwindcss',
        icon: SiIcons.SiTailwindcss,
        color: '#12c2b2',
      },
      {
        name: 'JavaScript',
        icon: Io5Icons.IoLogoJavascript,
        color: '#eed91b',
      },
    ],
    img: 'https://c4.wallpaperflare.com/wallpaper/585/411/761/anime-landscape-neon-colorful-hd-wallpaper-preview.jpg',
    url: '',
  },
];

function LatestProjectsSection() {
  const contentRef = useRef<SwiperType | null>(null);
  const slideShowRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      contentRef.current?.slideNext();
      slideShowRef.current?.slideNext();
    }, 3000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, []);

  return (
    <Section className="h-[1050px]">
      <div>
        <h6 className="text-lg mb-2 text-brand font-medium">Projects</h6>
        <h1 className="text-2xl font-semibold">Our Outstanding Projects</h1>
      </div>
      <div className="mt-10 flex items-start">
        <HorizontalSlideContent contentRef={contentRef} projects={PROJECTS} />
        <div className="basis-2/3 mx-14 flex items-center justify-center">
          <VerticalSlideShow slideShowRef={slideShowRef} projects={PROJECTS} />
        </div>
      </div>
    </Section>
  );
}

export default LatestProjectsSection;
