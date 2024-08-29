// import grass from '../img/grass.jpg';

import { PropsWithChildren } from "react";

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center">
      {children}
    </div>
  )
}
