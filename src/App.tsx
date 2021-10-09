import {useState} from 'react'

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

import './styles/global.scss';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>   
      <SideBar 
        setSelectedGenre={setSelectedGenre}
        
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId}/>
    </div>
  )
}