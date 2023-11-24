import React from 'react';

export type ImageState = [
  File | null,
  React.Dispatch<React.SetStateAction<File | null>>,
];

export type NicknameState = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export type EmailState = [string, React.Dispatch<React.SetStateAction<string>>];

export type PasswordState = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export type PasswordCorrectState = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export type IsValidNicknameState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

export type IsValidEmailState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

export type IsValidPasswordState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

export type IsValidPasswordCorrectState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

export type NotAllowState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];
