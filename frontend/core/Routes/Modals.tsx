import React from 'react';
import { useLocation } from 'react-router-dom';

import { Element } from './types';

type Props = {
  modalRoutes: Record<string, Element>;
};

export default function Modals({ modalRoutes }: Props) {
  const current = useLocation().state?.modal;
  const Modal = modalRoutes[current] || React.Fragment;
  return <Modal />;
}
