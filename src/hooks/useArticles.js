import { useState, useEffect, useMemo, useCallback } from 'react';
import { articlesData } from '../data/articles';

export function useArticles() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Jetpack Compose');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setArticles(articlesData);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchSearch = article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const updateCategory = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const updateSearchQuery = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return {
    articles: filteredArticles,
    selectedCategory,
    searchQuery,
    isLoading,
    updateCategory,
    updateSearchQuery,
  };
}
