import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
        <path d="M12 6C11.45 6 11 6.45 11 7V11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13H11V17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11H13V7C13 6.45 12.55 6 12 6Z" fill="currentColor"/>
    </svg>
  ),
  footerLogo: (props: SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 203 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2.264 25.2V1H11.544C15.024 1 17.544 1.74 19.104 3.22C20.664 4.66 21.444 6.7 21.444 9.34C21.444 11.98 20.664 14.02 19.104 15.46C17.544 16.9 15.024 17.62 11.544 17.62H6.984V25.2H2.264ZM6.984 14.08H10.664C12.864 14.08 14.444 13.56 15.404 12.52C16.404 11.48 16.904 10.02 16.904 8.14C16.904 6.26 16.404 4.82 15.404 3.82C14.444 2.78 12.864 2.26 10.664 2.26H6.984V14.08Z" fill="currentColor"/>
      <path d="M38.8031 25.2V1H43.5231V25.2H38.8031Z" fill="currentColor"/>
      <path d="M51.9059 25.2V1H61.1859C64.6659 1 67.1859 1.74 68.7459 3.22C70.3059 4.66 71.0859 6.7 71.0859 9.34C71.0859 11.98 70.3059 14.02 68.7459 15.46C67.1859 16.9 64.6659 17.62 61.1859 17.62H56.6259V25.2H51.9059ZM56.6259 14.08H60.3059C62.5059 14.08 64.0859 13.56 65.0459 12.52C66.0459 11.48 66.5459 10.02 66.5459 8.14C66.5459 6.26 66.0459 4.82 65.0459 3.82C64.0859 2.78 62.5059 2.26 60.3059 2.26H56.6259V14.08Z" fill="currentColor"/>
      <path d="M78.6826 25.2L73.1426 1H78.2226L81.2226 15.54L84.2226 1H89.3026L83.7626 25.2H78.6826Z" fill="currentColor"/>
      <path d="M103.543 17.5H91.123V25.2H86.403V1H103.423V4.54H91.123V13.96H103.543V17.5Z" fill="currentColor"/>
      <path d="M117.801 25.2V1H122.521V25.2H117.801Z" fill="currentColor"/>
      <path d="M136.223 25.2L130.683 1H135.763L138.763 15.54L141.763 1H146.843L141.303 25.2H136.223Z" fill="currentColor"/>
      <path d="M161.423 25.2V1H175.783V4.54H166.143V10.2H174.583V13.74H166.143V21.66H176.143V25.2H161.423Z" fill="currentColor"/>
      <path d="M180.121 25.2V1H184.841V25.2H180.121Z" fill="currentColor"/>
      <path d="M190.526 25.2L184.986 1H190.066L193.066 15.54L196.066 1H201.146L195.606 25.2H190.526Z" fill="currentColor"/>
    </svg>
  ),
  close: (props: SVGProps<SVGSVGElement>) => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};
