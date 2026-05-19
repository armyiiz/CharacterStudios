import { createContext, useContext, useState, useEffect } from 'react';

export type Step = 1 | 2 | 3;
export type ItemMode = 'with_item' | 'no_item';
export type PromptMode = 'compact' | 'full_debug';
export type PromptTab = 'positive' | 'negative';

export interface StudioState {
  step: Step;
  characterId: string | null;
  poseId: string | null;
  itemMode: ItemMode;
  promptStyle: string;
  promptMode: PromptMode;
  promptTab: PromptTab;
}

const STORAGE_KEY = 'characterPromptStudio_v13_react_state';

export function useStudioState() {
  const [state, setState] = useState<StudioState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return {
          step: 1, characterId: null, poseId: null,
          itemMode: 'with_item', promptStyle: 'dark_luxury',
          promptMode: 'compact', promptTab: 'positive',
          ...JSON.parse(stored)
        };
      }
    } catch(e) {}

    return {
      step: 1,
      characterId: null,
      poseId: null,
      itemMode: 'with_item',
      promptStyle: 'dark_luxury',
      promptMode: 'compact',
      promptTab: 'positive'
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setStep = (step: Step) => setState(s => ({ ...s, step }));
  const setCharacterId = (characterId: string | null) => setState(s => ({ ...s, characterId }));
  const setPoseId = (poseId: string | null) => setState(s => ({ ...s, poseId }));
  const setItemMode = (itemMode: ItemMode) => setState(s => ({ ...s, itemMode }));
  const setPromptStyle = (promptStyle: string) => setState(s => ({ ...s, promptStyle }));
  const setPromptMode = (promptMode: PromptMode) => setState(s => ({ ...s, promptMode }));
  const setPromptTab = (promptTab: PromptTab) => setState(s => ({ ...s, promptTab }));

  return {
    state,
    setStep,
    setCharacterId,
    setPoseId,
    setItemMode,
    setPromptStyle,
    setPromptMode,
    setPromptTab
  };
}

export const StudioContext = createContext<ReturnType<typeof useStudioState> | null>(null);

export function useStudio() {
  const context = useContext(StudioContext);
  if (!context) throw new Error('useStudio must be used within a StudioProvider');
  return context;
}
