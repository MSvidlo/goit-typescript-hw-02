import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field  } from 'formik';
import SearchBar from './components/SearchBar/SearchBar';
import fetchPhotos from './fetchPhotos';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMassage/ErrorMessage';
import Loader from './components/Loader/Loader';
type Photo = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  likes: number;
  user: {
    username: string;
    profile_image: {
      medium: string;
    };
  };

export default function App() {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalFilter, setModalFilter] = useState<string>();

  const contentForModal = photos.find(photo => photo.id === modalFilter);

  useEffect(() => {
    async function searchPictures() {
      if (query === '') {
        return;
      }
      
      setLoading(true); 
      try {
        const apiRequest = await fetchPhotos(query, page);
        setPhotos(prevState => [...prevState, ...apiRequest]);
        setError(false); 
      } catch (error) {
        setLoading(false);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchPictures();
  }, [query, page]);

  function onFormSubmit(searchedWord: string) {
    if (query.toLowerCase() !== searchedWord.toLowerCase()) {
      setPhotos([]);
      setQuery(searchedWord);
    }
    setPage(1);
  }
  
  function handleLoadMoreBtnClick() {
    setPage(prevState => prevState + 1);
    setLoading(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function createModalContent(id: string) {
    setModalFilter(id);
  }

  return (
    <>
      <SearchBar onFormSubmit={onFormSubmit}/>
      <main>
        <ImageGallery
          modalContent={createModalContent}
          openModal={openModal}
          photos={photos}
        />
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {photos.length > 0 && !loading && (
          <LoadMoreBtn handleLoadMoreBtnClick={handleLoadMoreBtnClick} />
        )}
        <ImageModal
          modalContent={contentForModal}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </main>
    </>
  );
};

