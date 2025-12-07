'use client';
import { useState } from 'react';
import { InputTagType } from '@/components/input/tag/type/InputTag.type';

export const useTagInput = (initialTags: InputTagType[]) => {
  const [tags, setTags] = useState<InputTagType[]>(initialTags);

  const toggleTag = (id: number) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.id === id ? { ...tag, isAdded: !tag.isAdded } : tag
      )
    );
  };

  const removeTag = (id: number) => {
    setTags((prev) =>
      prev.map((tag) => (tag.id === id ? { ...tag, isAdded: false } : tag))
    );
  };

  const addedTags = tags.filter((t) => t.isAdded);
  const unaddedTags = tags.filter((t) => !t.isAdded);

  return {
    tags,
    addedTags,
    unaddedTags,
    toggleTag,
    removeTag,
  };
};
