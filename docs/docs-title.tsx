import { createMemo, mergeProps, Show } from 'solid-js';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Fa from 'solid-fa';
import './docs-title.css';

interface DocsTitleProps {
  title: string;
  level?: number;
}

export default function DocsTitle(props: DocsTitleProps) {
  props = mergeProps({ level: 2 }, props);
  const id = createMemo(() => props.title.toLowerCase().replace(/[^\w]/g, '-'));

  return (
    <Show
      when={props.level === 1}
      fallback={
        <Show
          when={props.level === 3}
          fallback={
            <h2 id={id()}>
              <a href={`#${id()}`}>{props.title}</a>{' '}
              <small><Fa icon={faLink} /></small>
            </h2>
          }
        >
          <h3 id={id()}>
            <a href={`#${id()}`}>{props.title}</a>{' '}
            <small><Fa icon={faLink} /></small>
          </h3>
        </Show>
      }
    >
      <h1 id={id()}>
        <a href={`#${id()}`}>{props.title}</a>{' '}
        <small><Fa icon={faLink} /></small>
      </h1>
    </Show>
  );
}
