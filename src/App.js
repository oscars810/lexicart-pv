import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/button.js'
import ImagesGrid from './components/imagesGrid';


function App() {
  const [images, setImages] = useState([])

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8'
  }

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("https://lexica.art/api/v1/search?q=cats");
      const data = await response.json();
      console.log(data);
      setImages(data.images);
    };
    fetchImages();
  }, []);
  return (
    <div class="flex flex-col items-center py-4 mt-32">
    <a href="/">
      <img class="h-16 m-4" src="/lexica.svg"  alt="Lexica"/>
    </a>
    <p class="mt-1 text-sm text-zinc-400 px-2 text-center">
      Lexica is hiring!
      <a class="ml-2 cursor-pointer underline font-medium" href="/">
        Learn more
      </a>
    </p>
    <div class="flex items-center w-full max-w-[600px] mt-8 px-4 pl-5">
      <div class="w-full">
        <div class="flex w-full items-center relative">
          <img class="left-4 absolute" src="/search-icon.svg" alt="Search"/>
          <input id="search-bar" autocomplete="off" placeholder="Search for an image" value=""/>
          <button class="text-base absolute right-2 hover:bg-zinc-800 h-8 w-8 flex items-center justify-center rounded-full" data-state="closed">
            <img src="/image-icon.svg" alt="Images"/>
          </button>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="ml-2 h-10 w-10 rounded-full cursor-pointer flex items-center justify-center  bg-transparent hover:bg-zinc-900">
          <img src="/filters-icon.svg" alt="Filters"/>
        </button>
      </div>
    </div>
    <div class=" mb-8 flex flex-col items-center">
      <div class="flex space-x-2">
        <Button text={"Search"} classes={"bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800"} />
        <Button text={"Generate"} classes={"border border-gray-700 hover:bg-zinc-700"} />
      </div>
    </div>
    <ImagesGrid images={images} classes={gridCols[5]} />
  </div>
  );
}

export default App;
