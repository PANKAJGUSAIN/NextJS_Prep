"use client";

import React from 'react';
import { useTheme } from '@/components/themeContext';
import { ClientSideFunction } from '@/utils/clientutils';

export default function ClientRoute() {

  const {defaultTheme:theme , setTheme} = useTheme();
  const result = ClientSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <div style={{color:theme.colors.primary}}>
      Client Route Component - {result}
    </div>
  );
}
