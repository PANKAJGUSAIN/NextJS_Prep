"use client";

import React from 'react';
import { useTheme } from '@/components/themeContext';

export default function ClientRoute() {

  const {defaultTheme:theme , setTheme} = useTheme();
  const settings = {
    dots: true,
  };
  return (
    <div style={{color:theme.colors.primary}}>
      Client Route Component
    </div>
  );
}
