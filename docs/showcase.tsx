import { createSignal, For } from 'solid-js';
import {
  faFlag,
  faHome,
  faCog,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import Fa from 'solid-fa';
import './showcase.css';

export default function Showcase() {
  const [size, setSize] = createSignal(5);
  const [pull, setPull] = createSignal<string | undefined>(undefined);
  const [flip, setFlip] = createSignal<string | undefined>(undefined);
  const [rotate, setRotate] = createSignal(0);

  const pullOptions = ['None', 'Left', 'Right'];
  const flipOptions = ['None', 'Horizontal', 'Vertical', 'Both'];
  const icons = [faFlag, faHome, faCog, faSeedling];

  const setValue = (setter, value: string) => {
    setter(value === 'None' ? undefined : value.toLowerCase());
  };

  const isChecked = (getter, value: string) => {
    return getter() === (value === 'None' ? undefined : value.toLowerCase());
  };

  return (
    <section class="hero">
      <div class="grid">
        <div>
          <h1 class="hue hero-title">
            <a href="https://github.com/Cweili/solid-fa" target="_blank">solid-fa</a>
          </h1>
          <p>
            <a href="https://www.npmjs.com/package/solid-fa" target="_blank">
              <img src="https://img.shields.io/npm/v/solid-fa.svg" alt="npm version" />
            </a>{' '}
            <a href="https://bundlephobia.com/result?p=solid-fa" target="_blank">
              <img src="https://img.shields.io/bundlephobia/minzip/solid-fa.svg" alt="bundle size" />
            </a>{' '}
            <a href="https://github.com/Cweili/solid-fa/blob/master/LICENSE" target="_blank">
              <img src="https://img.shields.io/npm/l/solid-fa.svg" alt="MIT licence" />
            </a>{' '}
            <a href="https://www.npmjs.com/package/solid-fa" target="_blank">
              <img src="https://img.shields.io/npm/dt/solid-fa.svg" alt="npm downloads" />
            </a>{' '}
            <a href="https://github.com/Cweili/solid-fa" target="_blank">
              <img src="https://img.shields.io/github/issues/Cweili/solid-fa.svg" alt="github issues" />
            </a>
          </p>
          <p>
            Tiny <a class="hue" href="https://fontawesome.com/" target="_blank">FontAwesome 5+</a> component for{' '}
            <a class="hue" href="https://www.solidjs.com/" target="_blank">SolidJS</a>.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset class="grid">
              <label>
                Icon Sizes
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.1"
                  value={size()}
                  onInput={(e) => setSize(parseFloat(e.currentTarget.value))}
                />
              </label>
              <output>{size()}x</output>
            </fieldset>
            <fieldset class="grid">
              <label>Pulled Icons</label>
              <div role="group">
                <For each={pullOptions}>
                  {(p) => (
                    <button
                      type="button"
                      class={isChecked(pull, p) ? '' : 'secondary'}
                      aria-current={isChecked(pull, p) ? 'true' : undefined}
                      onClick={() => setValue(setPull, p)}
                    >
                      {p}
                    </button>
                  )}
                </For>
              </div>
            </fieldset>
            <fieldset class="grid">
              <label>Flip</label>
              <div role="group">
                <For each={flipOptions}>
                  {(f) => (
                    <button
                      type="button"
                      class={isChecked(flip, f) ? '' : 'secondary'}
                      aria-current={isChecked(flip, f) ? 'true' : undefined}
                      onClick={() => setValue(setFlip, f)}
                    >
                      {f}
                    </button>
                  )}
                </For>
              </div>
            </fieldset>
            <fieldset class="grid">
              <label>
                Rotate
                <input
                  type="range"
                  min="-360"
                  max="360"
                  step="1"
                  value={rotate()}
                  onInput={(e) => setRotate(parseInt(e.currentTarget.value))}
                />
              </label>
              <output>{rotate()}deg</output>
            </fieldset>
          </form>
        </div>
        <div class="grid">
          <For each={icons}>
            {(icon) => (
              <div class="hue">
                <Fa
                  icon={icon}
                  flip={flip()}
                  pull={pull()}
                  rotate={rotate()}
                  size={`${size()}x`}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
