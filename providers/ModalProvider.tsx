'use client';

import { useEffect, useRef } from "react";
import { useAppContext } from "./ContextProvider";


const ModalProvider = () => {
  const { showSmallModal, modalContent, setShowSmallModal } = useAppContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (ele: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(ele.target as Node)) {
        setShowSmallModal(_ => false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [])

  useEffect(() => {
    if (showSmallModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showSmallModal])


  return (
    <section
      className={`bg-black/80 transition-all duration-150 p-8 justify-center items-center fixed top-0 left-0 w-full h-full ${showSmallModal ? 'flex' : 'hidden'} z-10`}
    >
      <div
        ref={modalRef}
        className="p-6 bg-white rounded max-w-[500px] flex-1 overflow-auto max-h-[calc(100%_-_32px)]"
      >
        {modalContent}
      </div>
    </section>
  )
}

export default ModalProvider;