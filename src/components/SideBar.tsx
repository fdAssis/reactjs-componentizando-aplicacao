import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import '../styles/sidebar.scss';

import {Button} from './Button';

import { api } from '../services/api';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}
interface NavProps {
  setSelectedGenre: Dispatch<SetStateAction<GenreResponseProps>>;
  
  selectedGenreId: number
  setSelectedGenreId: Dispatch<SetStateAction<number>>;
}

export function SideBar({selectedGenreId, setSelectedGenre, setSelectedGenreId}:NavProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
      <span>Fake<p>Flix</p></span>
      <div className="buttons-container">
        {genres.map(genre => {
          return (
            <Button
              key={genre.id}
              title={genre.title} 
              iconName={genre.name} 
              selected={selectedGenreId === genre.id} 
              onClick={() => handleClickButton(genre.id)}/>    
          )
        })}
      </div>
    </nav>
  )
}