import { useRef } from 'react';
import Image from 'next/image';

export type Props = {
  video: string;
  width: number,
  height: number,
  thumbnailQuality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault'
};

export default function YouTubeFrame({ video, width, height, thumbnailQuality }: Props) {
  const divRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`);
    if (divRef.current) {
      divRef.current.innerHTML = '';
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div ref={divRef} className="youtube-frame position-relative">
      <Image
        onClick={onClick}
        src={`https://i9.ytimg.com/vi/${video}/${thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        width={width}
        height={height}
      />
    </div>
  );
}
