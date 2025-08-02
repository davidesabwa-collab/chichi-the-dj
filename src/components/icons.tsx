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
        <path d="M16 10H8V14H16V10Z" fill="currentColor"/>
        <path d="M12 4C11.45 4 11 4.45 11 5V8H8C7.45 8 7 8.45 7 9V15C7 15.55 7.45 16 8 16H11V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19V16H16C16.55 16 17 15.55 17 15V9C17 8.45 16.55 8 16 8H13V5C13 4.45 12.55 4 12 4Z" fill="currentColor" fillOpacity="0.5"/>
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
