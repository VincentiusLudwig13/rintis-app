import React, { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTagInput } from '@/components/input/tag/hooks/useTagInput';
import { TagInput } from '@/components/input/tag/TagInput';
import { InputTagsData } from '@/app/(main)/(landing-page)/mulai/data/InputTag.data';
import { InputTagType } from '@/components/input/tag/type/InputTag.type';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';

interface InputTagProps {
  name: keyof IGetBusinessRecommendationPayload;
  form: UseFormReturn<IGetBusinessRecommendationPayload>;
}

function InputTag({ name, form }: Readonly<InputTagProps>) {
  const { setValue } = form;

  const { addedTags, unaddedTags, toggleTag, removeTag } =
    useTagInput(InputTagsData);

  // Sync addedTags → RHF
  useEffect(() => {
    const combined = addedTags.map((t: InputTagType) => t.label).join(', ');
    setValue(name, combined as any);
  }, [addedTags, name, setValue]);

  return (
    <TagInput
      addedTags={addedTags}
      unaddedTags={unaddedTags}
      onToggle={toggleTag}
      onRemove={removeTag}
    />
  );
}

export default InputTag;
