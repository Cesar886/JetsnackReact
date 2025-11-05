import { useMemo } from 'react';
import { SnackRepository } from '../data/snacks';

export function useSnackRepository() {
  const getSnacks = useMemo(() => {
    return () => SnackRepository.getSnacks();
  }, []);

  const getSnack = useMemo(() => {
    return (snackId) => SnackRepository.getSnack(snackId);
  }, []);

  const getRelated = useMemo(() => {
    return () => SnackRepository.getRelated();
  }, []);

  const getFilters = useMemo(() => {
    return () => SnackRepository.getFilters();
  }, []);

  const getPriceFilters = useMemo(() => {
    return () => SnackRepository.getPriceFilters();
  }, []);

  const getCategoryFilters = useMemo(() => {
    return () => SnackRepository.getCategoryFilters();
  }, []);

  return {
    getSnacks,
    getSnack,
    getRelated,
    getFilters,
    getPriceFilters,
    getCategoryFilters,
  };
}

export default useSnackRepository;
