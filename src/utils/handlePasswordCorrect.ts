import React from 'react';

interface HandlePasswordCorrect {
  event: React.ChangeEvent<HTMLInputElement>;
  setPasswordCorrect: React.Dispatch<React.SetStateAction<string>>;
}

export const handlePasswordCorrect = ({
  event,
  setPasswordCorrect,
}: HandlePasswordCorrect) => {
  setPasswordCorrect(event.target.value);
};
