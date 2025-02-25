import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`
        w-[1440px] max-w-full min-h-screen 
        absolute left-1/4 md:left-1/2  // Move left on medium screens
        transform -translate-x-1/2     // Ensure it centers dynamically
        overflow-hidden ${className}   
      `}
    >
      {children}
    </div>
  );
};

export default Container;
