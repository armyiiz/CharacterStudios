import { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Step = 1 | 2 | 3;
export type ItemMode = 'with_item' | 'no_item';
export type PromptMode = 'compact' | 'full_debug';
export type PromptTab = 'positive' | 'negative';
export type PoseView = 'recommended' | 'glamour' | 'all' | 'favorites';

export interface HistoryEntry {
  charId: string;
  poseId: string;
  charName: string;
  poseTitle: string;
  styleId: string;
  itemMode: ItemMode;
  positive: string;
  negative: string;
  timestamp: string;
}

export interface StudioState {
  step: Step;
  characterId: string | null;
  poseId: string | null;
  itemMode: ItemMode;
  promptStyle: string;
  promptMode: PromptMode;
  promptTab: PromptTab;
  poseView: PoseView;
  floatingCopyCollapsed: boolean;
}

const STORAGE_KEY = 'characterPromptStudio_v13_react_state';
const HISTORY_KEY = 'characterPromptStudio_v13_react_history';
const FAVORITES_KEY = 'arcadia_v9_favorite_poses';

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  try { return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}

export function useStudioState() {
  const [state, setState] = useState<StudioState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return {
          step: 1, characterId: null, poseId: null,
          itemMode: 'with_item' as ItemMode, promptStyle: 'dark_luxury',
          promptMode: 'compact' as PromptMode, promptTab: 'positive' as PromptTab,
          poseView: 'recommended' as PoseView, floatingCopyCollapsed: false,
          ...JSON.parse(stored)
        };
      }
    } catch {}
    return {
      step: 1 as Step, characterId: null, poseId: null,
      itemMode: 'with_item' as ItemMode, promptStyle: 'dark_luxury',
      promptMode: 'compact' as PromptMode, promptTab: 'positive' as PromptTab,
      poseView: 'recommended' as PoseView, floatingCopyCollapsed: false
    };
  });

  const [history, setHistory] = useState<HistoryEntry[]>(() =>
    safeJsonParse<HistoryEntry[]>(localStorage.getItem(HISTORY_KEY), [])
  );

  const [favorites, setFavorites] = useState<string[]>(() =>
    safeJsonParse<string[]>(localStorage.getItem(FAVORITES_KEY), [])
  );

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 10)));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const setStep = useCallback((step: Step) => setState(s => ({ ...s, step })), []);
  const setCharacterId = useCallback((characterId: string | null) => setState(s => ({ ...s, characterId })), []);
  const setPoseId = useCallback((poseId: string | null) => setState(s => ({ ...s, poseId })), []);
  const setItemMode = useCallback((itemMode: ItemMode) => setState(s => ({ ...s, itemMode, poseId: null })), []);
  const setPromptStyle = useCallback((promptStyle: string) => setState(s => ({ ...s, promptStyle })), []);
  const setPromptMode = useCallback((promptMode: PromptMode) => setState(s => ({ ...s, promptMode })), []);
  const setPromptTab = useCallback((promptTab: PromptTab) => setState(s => ({ ...s, promptTab })), []);
  const setPoseView = useCallback((poseView: PoseView) => setState(s => ({ ...s, poseView })), []);
  const setFloatingCopyCollapsed = useCallback((floatingCopyCollapsed: boolean) => setState(s => ({ ...s, floatingCopyCollapsed })), []);

  const toggleFavorite = useCallback((poseId: string) => {
    setFavorites(prev => {
      if (prev.includes(poseId)) return prev.filter(id => id !== poseId);
      return [...prev, poseId];
    });
  }, []);

  const isFavorite = useCallback((poseId: string) => favorites.includes(poseId), [favorites]);

  const addHistory = useCallback((entry: HistoryEntry) => {
    setHistory(prev => {
      const filtered = prev.filter(h => !(h.charId === entry.charId && h.poseId === entry.poseId && h.itemMode === entry.itemMode));
      return [entry, ...filtered].slice(0, 10);
    });
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 1800);
  }, []);

  return {
    state, history, favorites, toastMessage,
    setStep, setCharacterId, setPoseId, setItemMode,
    setPromptStyle, setPromptMode, setPromptTab,
    setPoseView, setFloatingCopyCollapsed,
    toggleFavorite, isFavorite, addHistory, showToast
  };
}

export const StudioContext = createContext<ReturnType<typeof useStudioState> | null>(null);

export function useStudio() {
  const context = useContext(StudioContext);
  if (!context) throw new Error('useStudio must be used within a StudioProvider');
  return context;
}
