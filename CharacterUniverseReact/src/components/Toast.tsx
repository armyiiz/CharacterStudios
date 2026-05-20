import { useStudio } from '../state/StudioStore';

export default function Toast() {
  const { toastMessage } = useStudio();
  return (
    <div className={`toast ${toastMessage ? 'show' : ''}`}>
      {toastMessage || ''}
    </div>
  );
}
