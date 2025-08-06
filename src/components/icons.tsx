import Image from 'next/image';
import type { SVGProps } from "react";

export const Icons = {
  logo: (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image 
      src="/chichithedjlogo.png" 
      alt="Chichi The DJ Logo"
      width={props.width ? Number(props.width) : 80}
      height={props.height ? Number(props.height) : 80}
      {...props}
    />
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
