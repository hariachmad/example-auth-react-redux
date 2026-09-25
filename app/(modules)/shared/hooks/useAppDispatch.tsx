import { AppDispatch } from '../context/redux/store/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
