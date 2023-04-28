type HygraphImageLoaderProps = {
    src: string
    width: number
    }

export function HygraphImageLoader({ src, width } : HygraphImageLoaderProps) {
    const relativeSrc = (src : string) => src.split('/').pop();
  
    return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
      src
    )}`;
  }