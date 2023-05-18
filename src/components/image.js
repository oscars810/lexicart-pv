const Image = ({ src, alt }) => {
  return (
    <div >
      <a href="/" class="block relative group select-none overflow-hidden m-0.5 border-indigo-600  rounded-xl">
        <div class="absolute inset-0 z-10 block text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none line-clamp px-2 pb-2 text-sm px-2">
          <div class="flex-shrink h-full flex items-end shadow-md">
          </div>
        </div>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default Image;
