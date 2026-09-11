import { useContext, createContext, useState, type ReactNode, Children } from "react";
import Favorites from "../components/Favorites";

type FavoriteContextType = {
    favorites: string[];
    addFavorite: (title: string) => void;
    deleteFavorite: (title: string) => void;
}

const FavoritesContext = createContext<FavoriteContextType | undefined>(undefined);

interface FavoritesPropType {
    children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesPropType> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    function addFavorite(title: string) {
        setFavorites(prev => favorites.includes(title) ? prev : [...prev, title]);
    };

    function deleteFavorite(title: string) {
        setFavorites(prev => prev.filter(t => t !== title));
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, deleteFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("The provider is missing.")
    return context
}