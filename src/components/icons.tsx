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
      <path d="M14.24 15.21C13.43 16.29 12.11 17 10.66 17C8.12 17 6.08 14.81 6.08 12.22C6.08 9.63 8.12 7.44 10.66 7.44C12.11 7.44 13.43 8.15 14.24 9.23L12.53 10.27C12.11 9.68 11.45 9.3 10.66 9.3C9.28 9.3 8.17 10.59 8.17 12.22C8.17 13.85 9.28 15.14 10.66 15.14C11.45 15.14 12.11 14.76 12.53 14.17L14.24 15.21Z" fill="currentColor"/>
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
