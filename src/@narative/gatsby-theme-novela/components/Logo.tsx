import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
      <svg
        width="50"
        height="90"
        version="1.1"
        viewBox="0 0 242.03 32.448"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="Logo__Desktop"
      >
        <path
          d="M190.318 91.214c-4.826 1.575-10.015 2.059-15.056 2.942-1.372.24-2.82.026-4.205.218-10.753 1.492-14.816 5.799-16.335 17.249-.808 6.095-2.412 11.888-5.91 17.074-5.91 8.759-17.391 12.734-27.217 9.312-10.518-3.663-16.89-13.25-16.04-24.135.766-9.807 8.512-18.471 19.39-20.989 5.094-1.179 10.379-1.64 15.605-2.116 9.755-.887 14.064-5.164 15.689-14.756.935-5.519.102-10.726-1.122-15.932-1.87-7.957-7.663-11.654-17.39-12.362-5.308-.387-10.708-1.157-15.787-2.683-10.692-3.215-16.917-12.497-16.424-23.386.432-9.535 8.197-18.819 17.524-20.951 11.05-2.527 22.05 1.892 26.75 11.733 2.466 5.164 3.82 11.014 4.786 16.705 1.729 10.204 5.783 14.163 15.96 15.269 6.583.716 13.29 1.532 19.567 3.496 9.532 2.983 15.258 11.866 15.256 21.738-.001 9.657-5.911 18.595-15.041 21.574z"
          fill="#62DAFB"
        />

        <path
          d="M78.072 92.782c-12.778.002-23.21-10.427-23.212-23.203-.002-12.777 10.427-23.21 23.203-23.212 12.777-.002 23.209 10.427 23.211 23.203.002 12.777-10.427 23.21-23.202 23.212zM23.13 139.2C10.363 139.168-.032 128.703 0 115.915c.032-12.767 10.496-23.162 23.284-23.129 12.767.031 23.162 10.496 23.13 23.284-.032 12.767-10.496 23.162-23.284 23.13zM232.962 139.2c-12.8.073-23.309-10.28-23.382-23.033-.073-12.799 10.28-23.309 23.033-23.381 12.8-.074 23.308 10.278 23.382 23.032.073 12.799-10.28 23.309-23.033 23.382z"
          fill="#424242"
        />
      </svg>

      <svg
        version="1.1"
        width="18"
        height="25"
        viewBox="0 0 32.447 32.448"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="Logo__Mobile"
      >
        <defs>
          <clipPath id="clipPath168">
            <path d="M 0,700.73 H 590 V 0 H 0 Z" />
          </clipPath>
        </defs>
        <g fill={fill} transform="matrix(1.3333 0 0 -1.3333 -332.9 53.293)">
          <g clipPath="url(#clipPath168)">
            <g transform="translate(269.18,17.976)">
              <path d="m0 0c-0.46 8e-3 -0.841 0.11-1.242 0.335-0.781 0.477-1.231 1.247-1.255 2.162 0.024 0.916 0.474 1.685 1.255 2.163 0.401 0.223 0.782 0.326 1.242 0.334 0.639 0.011 1.17 0.525 1.17 1.17 0 0.631-0.531 1.182-1.17 1.172-0.803-0.014-1.564-0.209-2.271-0.575-0.051-0.024-0.103-0.049-0.153-0.08-1.491-0.913-2.368-2.437-2.414-4.184v-5e-3c-0.037-1.39-1.101-2.455-2.492-2.492-1.389 0.037-2.454 1.102-2.491 2.492v5e-3c0.013 0.503-0.239 0.834-0.58 1.001-0.175 0.106-0.376 0.17-0.591 0.17-0.237 0-0.459-0.074-0.645-0.199-0.31-0.174-0.531-0.493-0.524-0.959 0-4e-3 -1e-3 -9e-3 -1e-3 -0.013-0.038-1.393-1.105-2.459-2.498-2.497-1.393 0.038-2.459 1.104-2.497 2.497v14.659c0.038 1.395 1.104 2.46 2.497 2.498h14.66c1.394-0.038 2.46-1.104 2.497-2.498v-14.659c-0.037-1.393-1.103-2.459-2.497-2.497m0 21.995h-14.66c-2.683-0.072-4.766-2.155-4.838-4.839v-14.659c0.07-2.594 2.018-4.618 4.571-4.817 0.083-0.017 0.172-0.023 0.267-0.021 0.096-2e-3 0.185 4e-3 0.268 0.021 1.375 0.106 2.574 0.742 3.398 1.713 0.824-0.971 2.022-1.607 3.396-1.713 0.083-0.017 0.173-0.023 0.268-0.021 0.096-2e-3 0.186 4e-3 0.269 0.021 1.37 0.105 2.563 0.738 3.386 1.704 0.348-0.411 0.767-0.775 1.251-1.07 0.05-0.033 0.102-0.057 0.153-0.081 0.707-0.366 1.468-0.56 2.271-0.574 2.685 0.073 4.766 2.156 4.838 4.838v14.659c-0.072 2.684-2.153 4.767-4.838 4.839" />
            </g>
            <g transform="translate(267.41,33)">
              <path d="m0 0c-1.509 0-1.509-2.341 0-2.341 1.51 0 1.51 2.341 0 2.341" />
            </g>
          </g>
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }
  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    .Logo__Mobile{
      display: block;
    }
  `}
`;