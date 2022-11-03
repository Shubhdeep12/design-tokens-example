import React from 'react'
import { useTheme } from '../../containers/ThemeContext';

const DevTo = ({ color, ...props }) => {
  const { isDark } = useTheme();
  return (
    <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.07031 12.3203C8.34375 12.3203 8.61719 12.4342 8.89062 12.6621C9.16406 12.8444 9.30078 13.1178 9.30078 13.4824V18.2676C9.30078 18.6777 9.16406 18.974 8.89062 19.1562C8.61719 19.3385 8.34375 19.4297 8.07031 19.4297H6.9082V12.3203H8.07031ZM28.3047 0.5625C29.125 0.5625 29.8314 0.858724 30.4238 1.45117C31.0163 2.04362 31.3125 2.75 31.3125 3.57031V28.1797C31.3125 29 31.0163 29.7064 30.4238 30.2988C29.8314 30.8913 29.125 31.1875 28.3047 31.1875H3.69531C2.875 31.1875 2.16862 30.8913 1.57617 30.2988C0.983724 29.7064 0.6875 29 0.6875 28.1797V3.57031C0.6875 2.75 0.983724 2.04362 1.57617 1.45117C2.16862 0.858724 2.875 0.5625 3.69531 0.5625H28.3047ZM11.2148 18.2676V13.4141C11.2148 12.6393 10.9414 11.9102 10.3945 11.2266C9.89323 10.543 9.0957 10.2012 8.00195 10.2012H4.7207V21.4805H7.93359C9.07292 21.4805 9.89323 21.1615 10.3945 20.5234C10.9414 19.8398 11.2148 19.0879 11.2148 18.2676ZM18.1191 12.252V10.2012H13.8125C13.4023 10.2012 13.0605 10.3379 12.7871 10.6113C12.5592 10.8848 12.4453 11.2266 12.4453 11.6367V20.1816C12.4453 20.5462 12.582 20.8652 12.8555 21.1387C13.1289 21.4121 13.4707 21.526 13.8809 21.4805H18.1191V19.498H14.4961V16.9004H16.6836V14.8496H14.4961V12.252H18.1191ZM25.2285 20.1133L27.8262 10.2012H25.5703L23.5879 17.9941L21.5371 10.2012H19.3496L21.9473 20.1133C22.3118 20.9792 22.8132 21.4577 23.4512 21.5488C24.1348 21.5944 24.7272 21.1159 25.2285 20.1133Z" fill={isDark ? '#A79AE0' : '#26235C'} />
    </svg>

  )
}

export default DevTo;