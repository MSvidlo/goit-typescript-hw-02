import React from 'react';
import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

type Photo = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
};

type Props = {
  photos: Photo[];
  openModal: () => void;
  modalContent: (id: string) => void;
};

const ImageGallery: React.FC<Props> = ({ photos, openModal, modalContent }) => {
  return (
    <ul className={css.galleryList}>
      {photos.map((photo) => (
        <li className={css.galleryListItem} key={photo.id}>
          <ImageCard
            openModal={openModal}
            photoId={photo.id}
            modalContent={modalContent}
            desc={photo.alt_description}
            link={photo.urls.small}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;