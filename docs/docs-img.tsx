import './docs-img.css';

interface DocsImgProps {
  src: string;
  alt: string;
}

export default function DocsImg(props: DocsImgProps) {
  return (
    <article class="img-card">
      <img src={props.src} alt={props.alt} />
      <small class="credit">images &copy; fontawesome.com</small>
    </article>
  );
}
