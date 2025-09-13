import React from 'react';
import styled from 'styled-components';

const SearchButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="currentColor"
            />
          </svg>
        search
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #000;
    color: #fff;
    font-size: 13px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
    height: 65px;
    padding: 12px;
    border-radius: 15px 15px 12px 12px;
    cursor: pointer;
    position: relative;
    will-change: transform;
    transition: all .1s ease-in-out 0s;
    user-select: none;
    /* Add gradient shading to each side */
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    background-position: bottom right, bottom right;
    background-size: 100% 100%, 100% 100%;
    background-repeat: no-repeat;
    box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),
      inset -4px -8px 0px rgba(0, 0, 0, 0.3),
      0px 2px 1px rgba(0, 0, 0, 0.3),
      0px 2px 1px rgba(255, 255, 255, 0.1);
    transform: perspective(70px) rotateX(5deg) rotateY(0deg);
  }

  .button::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5));
    z-index: -1;
    border-radius: 15px;
    box-shadow: inset 4px 0px 0px rgba(255, 255, 255, 0.1),
      inset 4px -8px 0px rgba(0, 0, 0, 0.3);
    transition: all .1s ease-in-out 0s;
  }

  .button::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    background-position: bottom right, bottom right;
    background-size: 100% 100%, 100% 100%;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: 15px;
    transition: all .1s ease-in-out 0s;
  }

  .button:active {
    will-change: transform;
    transform: perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px) scale(0.96);
    height: 64px;
    border: 0.25px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset -4px -8px 0px rgba(255, 255, 255, 0.2),
      inset -4px -6px 0px rgba(0, 0, 0, 0.8),
      0px 1px 0px rgba(0, 0, 0, 0.9),
      0px 1px 0px rgba(255, 255, 255, 0.2);
    transition: all .1s ease-in-out 0s;
  }

  .button::after:active {
    background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2));
  }

  .button:active::before {
    content: "";
    display: block;
    position: absolute;
    top: 5%;
    left: 20%;
    width: 50%;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.1);
    animation: overlay 0.1s ease-in-out 0s;
    pointer-events: none;
  }

  .button svg {
    width: 15px;
    height: 15px;
  }

  @keyframes overlay {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .button:focus {
    outline: none;
  }`;

export default SearchButton;
