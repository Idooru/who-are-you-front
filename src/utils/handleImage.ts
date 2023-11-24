import React from 'react';

interface HandleImage {
  event: React.ChangeEvent<HTMLInputElement>;
  imageRef: React.MutableRefObject<HTMLImageElement | null>;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export const handleImage = ({ event, imageRef, setImage }: HandleImage) => {
  const file = event.target.files?.[0];

  if (file) {
    const blob = new Blob([file], { type: file.type });
    const imageUrl = URL.createObjectURL(blob);

    if (imageRef.current?.src) {
      imageRef.current.src = imageUrl;
    }

    setImage(file || null);
  }
};
