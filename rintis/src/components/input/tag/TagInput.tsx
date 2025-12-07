'use client';

import React from 'react';
import { InputTagType } from '@/components/input/tag/type/InputTag.type';
import {
  StyledActionButton,
  StyledPlusIcon,
  StyledTagInputPillWraper,
  StyledTagInputWrapperBox,
} from '@/components/input/tag/Tag.styled';

interface TagInputProps {
  addedTags: InputTagType[];
  unaddedTags: InputTagType[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export const TagInput = ({
  addedTags,
  unaddedTags,
  onToggle,
  onRemove,
}: TagInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Unadded Tag Pills */}
      <div className="flex gap-2 flex-wrap">
        {unaddedTags.map((tag) => (
          <StyledTagInputPillWraper key={tag.id}>
            {tag.label}
            <StyledActionButton onClick={() => onToggle(tag.id)}>
              <StyledPlusIcon size={7} $isAdded={false} />
            </StyledActionButton>
          </StyledTagInputPillWraper>
        ))}
      </div>

      {/* Added Tag Box */}
      <StyledTagInputWrapperBox>
        <div className="flex gap-2 flex-wrap">
          {addedTags.map((tag) => (
            <StyledTagInputPillWraper key={tag.id}>
              {tag.label}
              <StyledActionButton onClick={() => onRemove(tag.id)}>
                <StyledPlusIcon size={7} $isAdded={true} />
              </StyledActionButton>
            </StyledTagInputPillWraper>
          ))}
        </div>
      </StyledTagInputWrapperBox>
    </div>
  );
};
