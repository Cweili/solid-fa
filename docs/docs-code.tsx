import { onMount, createEffect } from 'solid-js';

interface DocsCodeProps {
  code: string;
  lang?: string;
}

export default function DocsCode(props: DocsCodeProps) {
  let el: HTMLElement | undefined;

  const highlight = () => {
    if (el && window.Prism) {
      window.Prism.highlightElement(el);
    }
  };

  onMount(highlight);

  createEffect(() => {
    props.code; // 追踪 code 变化
    highlight();
  });

  return (
    <article>
      <pre>
        <code
          ref={el}
          class={`language-${props.lang || 'html'}`}
        >
          {props.code}
        </code>
      </pre>
    </article>
  );
}
