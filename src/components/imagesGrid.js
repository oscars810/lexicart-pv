import Image from "./image";

const ImagesGrid = ({ images, classes }) => {
  return (
    <div class={`mt-4 mx-4 relative grid grid-flow-row-dense ${classes}`}>
      {images.map((img) => (<Image src={img.src} alt={"a"} />))}
    </div>
  )
};

export default ImagesGrid;