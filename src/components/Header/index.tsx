import { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import Tippy from '@tippyjs/react/headless';

import { IconBrand, LanguageIcon } from '../Icons';
import Dropdown from './Dropdown';

const HeaderContainer = styled.header.attrs((props) => ({
  className: classNames(
    'fixed w-full z-50 flex justify-between items-center text-base font-medium px-12 h-20 bg-transparent',
    props.className,
  ),
}))`
  &.scroll {
    background-color: white;
  }
`;

const NavLink = styled.li.attrs((props) => ({
  className: classNames(
    `mx-3 text-[#ffffff80] cursor-pointer relative hover:text-white transition-all duration-300`,
    props.className,
  ),
}))`
  &.active::before {
    width: 100%;
    left: 0;
  }

  &.scroll {
    color: var(--color-brand);

    &:before {
      position: absolute;
      content: '';
      right: 0;
      bottom: -0.25rem;
      width: 0;
      height: 2px;
      border-radius: 99999px;
      background-color: var(--color-brand);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover:before {
      width: 100%;
      left: 0;
    }
  }
`;

const LanguageButton = styled.button.attrs((props) => ({
  className: classNames(
    'flex justify-center items-center text-base px-3 py-2 border-2 border-transparent border-solid bg-white text-[#707070] rounded-3xl hover:opacity-80 transition-all duration-300 ',
    props.className,
  ),
}))`
  &.scroll {
    color: var(--color-brand);
    border: 2px solid var(--color-brand);
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &:hover {
      background-color: var(--color-brand);
      color: white;
    }
  }
`;

function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useLayoutEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
  };

  return (
    <HeaderContainer className={classNames({ scroll: isScrollingDown })}>
      {/* logo */}
      <div>
        <IconBrand className={classNames(isScrollingDown ? 'text-brand' : 'text-white')} width="230px" height="40px" />
      </div>
      {/* actions list */}
      <nav>
        <ul className="flex">
          <NavLink className={classNames({ scroll: isScrollingDown })}>
            <Link to="home">Home</Link>
          </NavLink>
          <NavLink className={classNames({ scroll: isScrollingDown })}>
            <Link to="about">About Us</Link>
          </NavLink>
          <NavLink className={classNames({ scroll: isScrollingDown })}>
            <Link to="fields">Fields</Link>
          </NavLink>
          <NavLink className={classNames({ scroll: isScrollingDown })}>
            <Link to="projects">Projects</Link>
          </NavLink>
          <NavLink className={classNames({ scroll: isScrollingDown })}>
            <Link to="review">Review</Link>
          </NavLink>
          <NavLink className={classNames({ scroll: isScrollingDown })}>
            <Link to="contact">Contact</Link>
          </NavLink>
        </ul>
      </nav>

      {/* Right buttons */}
      <div>
        <Tippy
          interactive
          trigger="click"
          placement="bottom-end"
          render={(attrs) => (
            <div tabIndex={-1} {...attrs}>
              <Dropdown isScrollingDown={isScrollingDown} />
            </div>
          )}
        >
          <LanguageButton className={classNames({ scroll: isScrollingDown })}>
            <LanguageIcon width="18px" height="18px" className="relative top-[1px]" />
            <p className="ml-[6px]">Language</p>
          </LanguageButton>
        </Tippy>
      </div>
    </HeaderContainer>
  );
}

export default Header;
