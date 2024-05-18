import React from 'react';
 import css from './ImageCard.module.css'
type Props = {
  desc: string;
  link: string;
  openModal: () => void;
  photoId: string;
  modalContent: (id:string) => void;

}
export function ImageCard({ desc, link, openModal, photoId, modalContent }:Props){
  const handleClick=(id:string)=> {
    modalContent(id);
    openModal();
  }

  return (
    <div>
      <img
         onClick={(): void => handleClick(photoId)}
        src={link}
        alt={desc}
      />
    </div>
  );
}
