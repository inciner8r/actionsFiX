import React from 'react'
import netsepio from '../assets/netsepio_logo_light.png';

const style = {
  color: '#11D9C5',
};

const background = {
  backgroundColor: '#141a31'
}

const border = {
  borderTop: '1px solid #11D9C5',
  color: 'white',
}

const Footer = () => {
  return (
    <div className="pt-10 pt-3 sm:pt-3 lg:pt-3" style={background}>
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-row items-center pt-6 justify-between max-w-screen-xl mx-auto">
          <nav className="mb-4 flex flex-wrap justify-center md:justify-start">
          <img src={netsepio} alt="netsepio logo" className="h-10 w-10"/>
            <a href="/" className="text-2xl font-bold leading-12 text-white mt-1">NetSepio</a>
          </nav>
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {/* <a href="https://chrome.google.com/webstore/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd" className="transition duration-100 text-white"></a> */}
            <a href="https://github.com/NetSepio" target="_blank" className="transition duration-100 text-white">Collaborate</a>
          </nav>
    
          <div className="flex">

          <a href="https://discordapp.com/invite/5uaFhNpRF6" target="_blank" className="transition duration-100 hover:text-green-400 active:text-green-600" style={style}>
              <svg width="45" height="40" viewBox="0 0 54 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_5999_153)">
                <path d="M31.458 7C31.8427 7 32.3254 7.09488 32.7131 7.18419C34.0648 7.49117 35.6675 7.8721 36.8053 8.67443C37.8644 9.42094 38.6873 10.7228 39.3231 12.0456C40.645 14.8014 41.5645 18.4754 41.8824 21.2689C42.0339 22.5945 42.071 23.9284 41.7992 24.8257C41.6655 25.2666 41.3759 25.5987 41.1724 25.8024C40.5515 26.4205 39.7523 26.8824 38.9621 27.3024L38.57 27.5103C38.3117 27.6453 38.0517 27.7774 37.7902 27.9066L37.0148 28.2833L35.9498 28.7815L35.0927 29.1778C34.7791 29.3253 34.4199 29.3639 34.079 29.2866C33.738 29.2093 33.4371 29.0211 33.2297 28.7553C33.0222 28.4896 32.9216 28.1635 32.9456 27.8347C32.9696 27.506 33.1166 27.1958 33.3608 26.9592L32.7161 25.748C30.8624 26.2772 28.9348 26.5424 26.9974 26.535C24.9624 26.535 23.021 26.2559 21.2787 25.748L20.6355 26.9564C20.8806 27.1926 21.0286 27.5028 21.0533 27.8318C21.078 28.1608 20.9779 28.4874 20.7707 28.7537C20.5634 29.0199 20.2625 29.2086 19.9213 29.2862C19.58 29.3639 19.2205 29.3254 18.9065 29.1778L18.0985 28.801C17.2013 28.3852 16.3042 27.9694 15.4308 27.5103C14.5187 27.0317 13.5518 26.5224 12.8284 25.801C12.5397 25.5269 12.3248 25.192 12.2016 24.8243C11.9282 23.9284 11.9669 22.5959 12.1169 21.2689C12.4348 18.4754 13.3542 14.8014 14.6777 12.0456C15.3119 10.7228 16.1348 9.42094 17.1939 8.67443C18.3317 7.8721 19.9344 7.49117 21.2861 7.18419C21.6738 7.09488 22.1551 7 22.5413 7C22.7549 6.99983 22.966 7.04294 23.1603 7.12641C23.3546 7.20987 23.5274 7.33172 23.667 7.48364C23.8066 7.63555 23.9096 7.81397 23.9691 8.00671C24.0287 8.19944 24.0432 8.40197 24.0118 8.60047C25.0003 8.46308 25.9982 8.39452 26.9974 8.39536C28.0238 8.39536 29.0264 8.46512 29.989 8.60187C29.9573 8.40326 29.9717 8.20058 30.0311 8.00767C30.0905 7.81476 30.1935 7.63617 30.3331 7.48409C30.4727 7.33201 30.6456 7.21003 30.84 7.12649C31.0344 7.04294 31.2442 6.9998 31.458 7ZM33.4692 10.2972C33.2464 10.2302 33.1929 10.2595 33.1127 10.3851L33.0206 10.5414C32.7805 10.928 32.416 11.233 31.9796 11.4126C31.5431 11.5921 31.0573 11.6369 30.592 11.5405C29.4107 11.3023 28.2056 11.1834 26.9974 11.1861C25.7319 11.1861 24.5213 11.3116 23.4028 11.5405C22.9375 11.6369 22.4517 11.5921 22.0152 11.4126C21.5788 11.233 21.2143 10.928 20.9742 10.5414L20.8821 10.3865C20.8034 10.2609 20.7499 10.2316 20.5286 10.2972C19.9998 10.4549 19.4324 10.6237 18.9764 10.907C18.5501 11.207 17.9812 11.9535 17.3855 13.194C16.2477 15.5619 15.3565 19.06 15.0713 21.5661C15.0119 22.0949 14.9807 22.5484 14.9733 22.9224V23.3326C14.9792 23.581 14.9985 23.7777 15.0253 23.9201C15.4025 24.2675 15.869 24.5396 16.3368 24.7894L17.3499 25.3154L18.0124 25.6433L18.553 24.6275C18.2913 24.3984 18.1263 24.0882 18.0886 23.754C18.0508 23.4197 18.1427 23.0839 18.3474 22.8083C18.5521 22.5326 18.8559 22.3356 19.2029 22.2535C19.5498 22.1715 19.9167 22.2098 20.236 22.3615C22.0422 23.214 24.392 23.7443 26.9974 23.7443C29.6013 23.7443 31.9526 23.2112 33.7588 22.3629C34.0645 22.219 34.4136 22.1786 34.7473 22.2485C35.0809 22.3183 35.3787 22.4942 35.5904 22.7463C35.8021 22.9985 35.9148 23.3115 35.9093 23.6326C35.9039 23.9537 35.7807 24.2632 35.5606 24.5089L35.4418 24.6275L35.9824 25.6461C36.4251 25.4312 36.8692 25.2038 37.3148 24.9722C37.8941 24.6708 38.5031 24.354 38.974 23.9215C39.0007 23.7777 39.0186 23.581 39.026 23.3326V22.9224C39.0139 22.4687 38.9812 22.0157 38.9279 21.5647C38.6428 19.06 37.7515 15.5619 36.6137 13.1926C36.0196 11.9535 35.4492 11.207 35.0244 10.907C34.5669 10.6237 33.9995 10.4549 33.4692 10.2972ZM22.1699 16.0698C22.8593 16.0698 23.5205 16.3271 24.008 16.785C24.4955 17.243 24.7693 17.8641 24.7693 18.5117C24.7693 19.1593 24.4955 19.7804 24.008 20.2383C23.5205 20.6963 22.8593 20.9535 22.1699 20.9535C21.4805 20.9535 20.8193 20.6963 20.3319 20.2383C19.8444 19.7804 19.5705 19.1593 19.5705 18.5117C19.5705 17.8641 19.8444 17.243 20.3319 16.785C20.8193 16.3271 21.4805 16.0698 22.1699 16.0698ZM31.8249 16.0698C32.5143 16.0698 33.1755 16.3271 33.6629 16.785C34.1504 17.243 34.4243 17.8641 34.4243 18.5117C34.4243 19.1593 34.1504 19.7804 33.6629 20.2383C33.1755 20.6963 32.5143 20.9535 31.8249 20.9535C31.1355 20.9535 30.4743 20.6963 29.9868 20.2383C29.4993 19.7804 29.2255 19.1593 29.2255 18.5117C29.2255 17.8641 29.4993 17.243 29.9868 16.785C30.4743 16.3271 31.1355 16.0698 31.8249 16.0698Z" fill="#11D9C5"/>
                </g>
                <defs>
                <filter id="filter0_d_5999_153" x="0" y="0" width="54" height="46.3262" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.85098 0 0 0 0 0.772549 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5999_153"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5999_153" result="shape"/>
                </filter>
                </defs>
                </svg>
            </a> 
            
          <a href="https://twitter.com/NetSepio" target="_blank" className="transition duration-100 hover:text-green-400 active:text-green-600" style={style}>
              <svg width="40" height="38" viewBox="0 0 51 49" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_5999_151)">
                <path d="M33.2375 7H37.3725L28.3388 17.325L38.9662 31.375H30.6437L24.1263 22.8537L16.6687 31.375H12.5312L22.1937 20.3313L12 7H20.5312L26.4225 14.7887L33.235 7H33.2375ZM31.7863 28.9H34.0775L19.2875 9.345H16.8287L31.7863 28.9Z" fill="#11D9C5"/>
                </g>
                <defs>
                <filter id="filter0_d_5999_151" x="0" y="0" width="50.9663" height="48.375" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.85098 0 0 0 0 0.772549 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5999_151"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5999_151" result="shape"/>
                </filter>
                </defs>
                </svg>
            </a>

            <a href="https://github.com/NetSepio" target="_blank" className="transition duration-100 hover:text-green-400 active:text-green-600" style={style}>
              <svg width="45" height="38" viewBox="0 0 52 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_5999_152)">
                <path d="M25.75 7C23.9443 7 22.1563 7.35565 20.4881 8.04666C18.8199 8.73766 17.3041 9.75048 16.0273 11.0273C13.4487 13.6059 12 17.1033 12 20.75C12 26.8275 15.9463 31.9837 21.405 33.8125C22.0925 33.9225 22.3125 33.4963 22.3125 33.125V30.8012C18.5037 31.6262 17.6925 28.9587 17.6925 28.9587C17.06 27.3637 16.1663 26.9375 16.1663 26.9375C14.915 26.085 16.2625 26.1125 16.2625 26.1125C17.6375 26.2087 18.3663 27.5288 18.3663 27.5288C19.5625 29.6187 21.5837 29 22.3675 28.67C22.4913 27.7763 22.8488 27.1712 23.2338 26.8275C20.1812 26.4837 16.9775 25.3013 16.9775 20.0625C16.9775 18.5363 17.5 17.3125 18.3938 16.3363C18.2562 15.9925 17.775 14.5625 18.5312 12.7063C18.5312 12.7063 19.6863 12.335 22.3125 14.1088C23.3988 13.8063 24.5813 13.655 25.75 13.655C26.9187 13.655 28.1012 13.8063 29.1875 14.1088C31.8137 12.335 32.9688 12.7063 32.9688 12.7063C33.725 14.5625 33.2437 15.9925 33.1063 16.3363C34 17.3125 34.5225 18.5363 34.5225 20.0625C34.5225 25.315 31.305 26.47 28.2388 26.8137C28.7338 27.24 29.1875 28.0788 29.1875 29.3575V33.125C29.1875 33.4963 29.4075 33.9363 30.1087 33.8125C35.5675 31.97 39.5 26.8275 39.5 20.75C39.5 18.9443 39.1443 17.1563 38.4533 15.4881C37.7623 13.8199 36.7495 12.3041 35.4727 11.0273C34.1959 9.75048 32.6801 8.73766 31.0119 8.04666C29.3437 7.35565 27.5557 7 25.75 7Z" fill="#11D9C5"/>
                </g>
                <defs>
                <filter id="filter0_d_5999_152" x="0" y="0" width="51.5" height="50.834" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.85098 0 0 0 0 0.772549 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5999_152"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5999_152" result="shape"/>
                </filter>
                </defs>
                </svg>
            </a>
  
          </div>
        </div>
    
        <div className="py-5 text-center text-sm" style={border}>© 2023 - NetSepio. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Footer
