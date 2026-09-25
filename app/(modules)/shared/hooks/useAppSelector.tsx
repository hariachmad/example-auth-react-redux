import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../context/redux/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
