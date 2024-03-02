import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf') format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.ttf') format("truetype");
    font-display: swap;
  } 
  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.ttf') format("truetype");
    font-display: swap;
  } 
  @font-face {
    font-family: 'Noto Sans';
    font-weight: 400;
    font-style: normal;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.eot');
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.eot?#iefix') format('embedded-opentype'),
        url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2') format('woff2'),
        url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff') format('woff'),
        url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.ttf') format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans';
    font-weight: 700;
    font-style: normal;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.eot');
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.eot?#iefix') format('embedded-opentype'),
        url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2') format('woff2'),
        url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff') format('woff'),
        url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.ttf') format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: '나눔명조';
    font-weight: 400;
    font-style: normal; 
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.ttf') format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: '나눔명조';
    font-weight: 700;
    font-style: normal; 
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/NanumMyeongjo/NanumMyeongjo.ttf') format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: '나눔손글씨 손편지체';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.eot');
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.ttf') format('truetype');
    font-display: swap;
  }
  :root {
    /* ============COLOR============ */
    /* Purple Palette */
    --purple100: #f8f0ff;
    --purple200: #ecd9ff;
    --purple300: #dcb9ff;
    --purple400: #c894fd;
    --purple500: #ab57ff;
    --purple600: #9935ff;
    --purple700: #861dee;
    --purple800: #6e0ad1;
    --purple900: #5603a7;

    /* Orange Palette */
    --orange100: #fff0d6;
    --orange200: #ffe2ad;
    --orange300: #ffc583;
    --orange400: #ffae65;
    --orange500: #ff8832;

    /* Blue Palette */
    --blue100: #e2f5ff;
    --blue200: #b1e4ff;
    --blue300: #7cd2ff;
    --blue400: #34b9ff;
    --blue500: #00a2fe;

    /* Green Palette */
    --green100: #e4fbdc;
    --green200: #d0f5c3;
    --green300: #9be282;
    --green400: #60cf37;
    --green500: #2ba600;

    /* Gray Palette */
    --gray100: #f6f6f6;
    --gray200: #eeeeee;
    --gray300: #cccccc;
    --gray400: #999999;
    --gray500: #555555;
    --gray600: #4a4a4a;
    --gray700: #3a3a3a;
    --gray800: #2b2b2b;
    --gray900: #181818;

    /* Others */
    --white: #ffffff;
    --black: #000000;
    --error: #dc3a3a;
    --surface: #f6f8ff;

    /* ==========FONT SIZE========== */
    --font28: 2.8rem;
    --font24: 2.4rem;
    --font20: 2.0rem;
    --font18: 1.8rem;
    --font16: 1.6rem;
    --font15: 1.5rem;
    --font14: 1.4rem;
    --font12: 1.2rem;

    /* ==========FONT WEIGHT========== */
    --bold: 700;
    --regular: 400;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
    text-decoration: none;
  }

  html,
  body {
    font-size: 10px;
  }

  button{
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;
  }
`;

export default GlobalStyles;
