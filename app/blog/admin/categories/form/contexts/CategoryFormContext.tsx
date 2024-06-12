import { createContext, useContext, useState, ReactNode } from 'react';
import { createNewCategory } from '@/firebase/firestore/category/write';

interface CategoryFormContextProviderProps {
  children: ReactNode;
}

interface ContextValue {
  data: Record<string, undefined>;
  isLoading: boolean;
  error: string | null;
  isDone: boolean;
  image: File | null;
  setImage: (image: File) => void;
  handleData: (key: string, value: unknown) => void;
  handleCreate: () => Promise<void>;
}

const CategoryFormContext = createContext<ContextValue | undefined>(undefined);

export default function CategoryFormContextProvider(
  { children }: CategoryFormContextProviderProps) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleData = (key: string, value: unknown) => {
    setIsDone(false);
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleCreate = async () => {
    setError(null);
    setIsLoading(true);
    setIsDone(false);
    try {
      await createNewCategory({ data, image });
      setIsDone(true);
    } catch (errorMessage) {
      if (errorMessage instanceof Error) {
        setError(errorMessage.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <CategoryFormContext.Provider
      value={{
        data,
        isLoading,
        error,
        isDone,
        image,
        setImage,
        handleData,
        handleCreate,
      }}
    > {children}
    </CategoryFormContext.Provider>
  );
}

export const useCategoryForm = () => useContext(CategoryFormContext);
