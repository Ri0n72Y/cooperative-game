import { HTMLAttributes } from "react";

export const IconBox = (props: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.4199 7.77783L12.9199 12.5001M12.9199 12.5001L4.41989 7.77783M12.9199 12.5001L12.9199 22.0001M21.9199 16.5586V8.44153C21.9199 8.09889 21.9199 7.92757 21.8694 7.77477C21.8248 7.63959 21.7518 7.51551 21.6553 7.41082C21.5462 7.29248 21.3965 7.20928 21.097 7.04288L13.697 2.93177C13.4133 2.77421 13.2715 2.69543 13.1214 2.66454C12.9885 2.63721 12.8514 2.63721 12.7185 2.66454C12.5683 2.69543 12.4265 2.77421 12.1429 2.93177L4.74289 7.04288C4.44337 7.20928 4.29361 7.29248 4.18455 7.41082C4.08808 7.51551 4.01507 7.63959 3.97041 7.77477C3.91992 7.92757 3.91992 8.09889 3.91992 8.44153V16.5586C3.91992 16.9013 3.91992 17.0726 3.97041 17.2254C4.01507 17.3606 4.08808 17.4847 4.18456 17.5893C4.29361 17.7077 4.44337 17.7909 4.74289 17.9573L12.1429 22.0684C12.4265 22.226 12.5683 22.3047 12.7185 22.3356C12.8514 22.363 12.9885 22.363 13.1214 22.3356C13.2715 22.3047 13.4133 22.226 13.697 22.0684L21.097 17.9573C21.3965 17.7909 21.5462 17.7077 21.6553 17.5893C21.7518 17.4847 21.8248 17.3606 21.8694 17.2254C21.9199 17.0726 21.9199 16.9013 21.9199 16.5586Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};