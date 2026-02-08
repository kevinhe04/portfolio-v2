function GalleryItem({ imageSrc, imageAlt, date, description }) {
  return (
    <article className="group relative break-inside-avoid mb-4 rounded-xl overflow-hidden bg-gray-100">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto block align-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
        <time className="text-xs font-medium text-white/95 uppercase tracking-wider mb-1">
          {date}
        </time>
        <p className="text-sm text-white leading-snug line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  );
}

export default GalleryItem;
