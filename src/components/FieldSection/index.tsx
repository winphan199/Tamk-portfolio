import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as Io5Icons from 'react-icons/io5';
import * as SiIcons from 'react-icons/si';

import { IField } from './Interface';
import FieldCard from './FieldCard';
import { Section } from '../UI';

const FIELDS: IField[] = [
  {
    id: 1,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum consequuntur laborum cum consequatur sequi consectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'CSS',
        Icon: DiIcons.DiCss3,
        color: 'text-[#3595cf]',
      },
      {
        name: 'JavaScript',
        Icon: Io5Icons.IoLogoJavascript,
        color: 'text-[#eed91b]',
      },
      {
        name: 'React',
        Icon: FaIcons.FaReact,
        color: 'text-[#5ed3f3]',
      },
      {
        name: 'Tailwind',
        Icon: SiIcons.SiTailwindcss,
        color: 'text-[#12c2b2]',
      },
      {
        name: 'NodeJS',
        Icon: FaIcons.FaNodeJs,
        color: 'text-[#7ec729]',
      },
      {
        name: 'Spring Boot',
        Icon: SiIcons.SiSpringboot,
        color: 'text-[#6aac3c]',
      },
      {
        name: 'MongoDB',
        Icon: DiIcons.DiMongodb,
        color: 'text-[#00e760]',
      },
      {
        name: 'MySQL',
        Icon: SiIcons.SiMysql,
        color: 'text-[#004d5e]',
      },
      {
        name: 'AWS',
        Icon: SiIcons.SiAmazonaws,
        color: 'text-[#f79500]',
      },
    ],
  },
  {
    id: 2,
    name: 'Mobile Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum consequuntur laborum cum consequatur sequi consectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'CSS',
        Icon: DiIcons.DiCss3,
        color: 'text-[#3595cf]',
      },
      {
        name: 'JavaScript',
        Icon: Io5Icons.IoLogoJavascript,
        color: 'text-[#eed91b]',
      },
      {
        name: 'React',
        Icon: FaIcons.FaReact,
        color: 'text-[#5ed3f3]',
      },
      {
        name: 'Tailwind',
        Icon: SiIcons.SiTailwindcss,
        color: 'text-[#12c2b2]',
      },
      {
        name: 'NodeJS',
        Icon: FaIcons.FaNodeJs,
        color: 'text-[#7ec729]',
      },
      {
        name: 'Spring Boot',
        Icon: SiIcons.SiSpringboot,
        color: 'text-[#6aac3c]',
      },
      {
        name: 'MongoDB',
        Icon: DiIcons.DiMongodb,
        color: 'text-[#00e760]',
      },
      {
        name: 'MySQL',
        Icon: SiIcons.SiMysql,
        color: 'text-[#004d5e]',
      },
      {
        name: 'AWS',
        Icon: SiIcons.SiAmazonaws,
        color: 'text-[#f79500]',
      },
    ],
  },
  {
    id: 3,
    name: 'IoT Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum consequuntur laborum cum consequatur sequi consectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'CSS',
        Icon: DiIcons.DiCss3,
        color: 'text-[#3595cf]',
      },
      {
        name: 'JavaScript',
        Icon: Io5Icons.IoLogoJavascript,
        color: 'text-[#eed91b]',
      },
      {
        name: 'React',
        Icon: FaIcons.FaReact,
        color: 'text-[#5ed3f3]',
      },
      {
        name: 'Tailwind',
        Icon: SiIcons.SiTailwindcss,
        color: 'text-[#12c2b2]',
      },
      {
        name: 'NodeJS',
        Icon: FaIcons.FaNodeJs,
        color: 'text-[#7ec729]',
      },
      {
        name: 'Spring Boot',
        Icon: SiIcons.SiSpringboot,
        color: 'text-[#6aac3c]',
      },
      {
        name: 'MongoDB',
        Icon: DiIcons.DiMongodb,
        color: 'text-[#00e760]',
      },
      {
        name: 'MySQL',
        Icon: SiIcons.SiMysql,
        color: 'text-[#004d5e]',
      },
      {
        name: 'AWS',
        Icon: SiIcons.SiAmazonaws,
        color: 'text-[#f79500]',
      },
    ],
  },
  {
    id: 4,
    name: 'Server Development',
    description: 'et, conseconsectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'CSS',
        Icon: DiIcons.DiCss3,
        color: 'text-[#3595cf]',
      },
      {
        name: 'JavaScript',
        Icon: Io5Icons.IoLogoJavascript,
        color: 'text-[#eed91b]',
      },
      {
        name: 'React',
        Icon: FaIcons.FaReact,
        color: 'text-[#5ed3f3]',
      },
      {
        name: 'Tailwind',
        Icon: SiIcons.SiTailwindcss,
        color: 'text-[#12c2b2]',
      },
      {
        name: 'NodeJS',
        Icon: FaIcons.FaNodeJs,
        color: 'text-[#7ec729]',
      },
      {
        name: 'Tailwind',
        Icon: SiIcons.SiTailwindcss,
        color: 'text-[#12c2b2]',
      },
      {
        name: 'NodeJS',
        Icon: FaIcons.FaNodeJs,
        color: 'text-[#7ec729]',
      },
    ],
  },
];

export default function FieldSection() {
  return (
    <Section className="bg-brand/80 w-full">
      <div>
        <h6 className="text-lg mb-2 text-white font-medium">Fields</h6>
        <h1 className="text-2xl text-white font-semibold">What We Are Working On</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {FIELDS.map((field) => (
          <FieldCard key={field.id} name={field.name} description={field.description} techList={field.techList} />
        ))}
      </div>
    </Section>
  );
}
