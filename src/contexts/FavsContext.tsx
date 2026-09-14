import { useContext, createContext, useState, type ReactNode } from "react";

interface FavsPropType {
    children: ReactNode;
}

type FavsContextType = {
    favList: string[];
    addFav: (title: string) => void;
    remFav: (title: string) => void;
    remAllFavs: () => void;
}

const FavsContext = createContext<FavsContextType | null>(null);
export const FavsProvider: React.FC<FavsPropType> = ({ children }) => {
    const [favList, setFavList] = useState<string[]>([]);

    function addFav(title: string) {
        setFavList(prev => prev.includes(title) ? prev : [...prev, title]);
    }

    function remFav(title: string) {
        setFavList(prev => prev.filter(t => t !== title));
    }

    function remAllFavs(){
        if (confirm('Would you like to delete all favorites?')) setFavList([]);
    }

    return (
        <FavsContext.Provider value={{ favList, addFav, remFav, remAllFavs }}>
            {children}
        </FavsContext.Provider>
    );
}

export const useFavs = () => {
    const context = useContext(FavsContext);
    if (!context) throw new Error('Missing provider!');
    return context;
};