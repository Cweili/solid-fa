import Fa, {
  FaLayers,
  FaLayersText,
} from 'solid-fa';
import {
  faFlag,
  faHome,
  faInfo,
  faBook,
  faBookmark,
  faPencilAlt,
  faCog,
  faCircle,
  faCircleNotch,
  faQuoteLeft,
  faQuoteRight,
  faSpinner,
  faStroopwafel,
  faSync,
  faSeedling,
  faTimes,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faStar,
  faCalendar,
  faCertificate,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import DocsCode from './docs-code';
import DocsImg from './docs-img';
import DocsTitle from './docs-title';
import duotone0 from './assets/duotone-0.png';
import duotone1 from './assets/duotone-1.png';
import duotone2 from './assets/duotone-2.png';
import duotone3 from './assets/duotone-3.png';
import duotone4 from './assets/duotone-4.png';
import duotone5 from './assets/duotone-5.png';
import duotone6 from './assets/duotone-6.png';
import duotone7 from './assets/duotone-7.png';

const codes = {
  installation: [
    'npm install solid-fa',
    `import Fa from 'solid-fa'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

function App() {
  return <Fa icon={faFlag} />
}`,
  ],
  basicUse: [
    '<Fa icon={faFlag} /> Flag',
    `<div style="font-size: 3em; color: tomato">
  <Fa icon={faFlag} />
</div>`,
  ],
  additionalStyling: [
    `<Fa icon={faFlag} size="xs" />
<Fa icon={faFlag} size="sm" />
<Fa icon={faFlag} size="lg" />
<Fa icon={faFlag} size="2x" />
<Fa icon={faFlag} size="2.5x" />
<Fa icon={faFlag} size="5x" />
<Fa icon={faFlag} size="7x" />
<Fa icon={faFlag} size="10x" />`,
    `<div>
  <Fa icon={faHome} fw style="background: mistyrose" /> Home
</div>
<div>
  <Fa icon={faInfo} fw style="background: mistyrose" /> Info
</div>
<div>
  <Fa icon={faBook} fw style="background: mistyrose" /> Library
</div>
<div>
  <Fa icon={faPencilAlt} fw style="background: mistyrose" /> Applications
</div>
<div>
  <Fa icon={faCog} fw style="background: mistyrose" /> Settings
</div>`,
    `<Fa icon={faQuoteLeft} pull="left" size="2x" />
<Fa icon={faQuoteRight} pull="right" size="2x" />
Gatsby believed in the green light, the orgastic future that year by year recedes before us.`,
  ],
  animatingIcons: [
    `<Fa icon={faSpinner} size="3x" spin />
<Fa icon={faCircleNotch} size="3x" spin />
<Fa icon={faSync} size="3x" spin />
<Fa icon={faCog} size="3x" spin />
<Fa icon={faSpinner} size="3x" pulse />
<Fa icon={faStroopwafel} size="3x" spin />`,
  ],
  powerTransforms: [
    `<Fa icon={faSeedling} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={1.2} size="4x" style="background: mistyrose" />`,
    `<Fa icon={faSeedling} scale={0.5} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateX={0.2} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateX={-0.2} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateY={0.2} size="4x" style="background: mistyrose" />
<Fa icon={faSeedling} scale={0.5} translateY={-0.2} size="4x" style="background: mistyrose" />`,
    `<Fa icon={faSeedling} size="4x" rotate={90} style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" rotate={180} style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" rotate={270} style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" rotate={30} style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" rotate={-30} style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" flip="vertical" style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" flip="horizontal" style="background: mistyrose"/>
<Fa icon={faSeedling} size="4x" flip="both" style="background: mistyrose"/>`,
  ],
  layering: [
    `import Fa, {
  FaLayers,
  FaLayersText,
} from 'solid-fa';`,
    `<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faCircle} color="tomato" />
  <Fa icon={faTimes} scale={0.5} color="white" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faBookmark} />
  <Fa icon={faHeart} scale={0.4} translateY={-0.1} color="tomato" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faPlay} scale={1.2} rotate={-90} />
  <Fa icon={faSun} scale={0.35} translateY={-0.2} color="white" />
  <Fa icon={faMoon} scale={0.3} translateX={-0.25} translateY={0.25} color="white" />
  <Fa icon={faStar} scale={0.3} translateX={0.25} translateY={0.25} color="white" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faCalendar} />
  <FaLayersText scale={0.45} translateY={0.15} color="white" style="font-weight: 900">
    27
  </FaLayersText>
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faCertificate} />
  <FaLayersText scale={0.25} translateY={0.07} rotate={-30} color="white" style="font-weight: 900">
    NEW
  </FaLayersText>
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa icon={faEnvelope} />
  <FaLayersText scale={0.2} translateX={0.4} translateY={-0.3} color="white">
    <span style="padding: 0 .2em; background: tomato; border-radius: 1em">
      1,419
    </span>
  </FaLayersText>
</FaLayers>`,
  ],
  duotoneIcons: [
    `import {
  faCamera,
  faFireAlt,
  faBusAlt,
  faFillDrip,
} from '@fortawesome/pro-duotone-svg-icons'`,
    `<Fa icon={faCamera} size="3x" />
<Fa icon={faFireAlt} size="3x" />
<Fa icon={faBusAlt} size="3x" />
<Fa icon={faFillDrip} size="3x" />`,
    `<Fa icon={faCamera} size="3x" />
<Fa icon={faCamera} size="3x" swapOpacity />
<Fa icon={faFireAlt} size="3x" />
<Fa icon={faFireAlt} size="3x" swapOpacity />
<Fa icon={faBusAlt} size="3x" />
<Fa icon={faBusAlt} size="3x" swapOpacity />
<Fa icon={faFillDrip} size="3x" />
<Fa icon={faFillDrip} size="3x" swapOpacity />`,
    `<Fa icon={faBusAlt} size="3x" secondaryOpacity={0.2} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={0.4} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={0.6} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={0.8} />
<Fa icon={faBusAlt} size="3x" secondaryOpacity={1} />`,
    `<Fa icon={faBusAlt} size="3x" primaryOpacity={0.2} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={0.4} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={0.6} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={0.8} />
<Fa icon={faBusAlt} size="3x" primaryOpacity={1} />`,
    `<Fa icon={faBusAlt} size="3x" primaryColor="gold" />
<Fa icon={faBusAlt} size="3x" primaryColor="orangered" />
<Fa icon={faFillDrip} size="3x" secondaryColor="limegreen" />
<Fa icon={faFillDrip} size="3x" secondaryColor="rebeccapurple" />
<Fa icon={faBatteryFull} size="3x" primaryColor="limegreen" secondaryColor="dimgray" />
<Fa icon={faBatteryQuarter} size="3x" primaryColor="orange" secondaryColor="dimgray" />`,
    `<Fa icon={faBook} size="3x" secondaryOpacity={1} primaryColor="lightseagreen" secondaryColor="linen" />
<Fa icon={faBookSpells} size="3x" secondaryOpacity={1} primaryColor="mediumpurple" secondaryColor="linen" />
<Fa icon={faBookMedical} size="3x" secondaryOpacity={1} primaryColor="crimson" secondaryColor="linen" />
<Fa icon={faBookUser} size="3x" secondaryOpacity={1} primaryColor="peru" secondaryColor="linen" />
<Fa icon={faToggleOff} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="gray" />
<Fa icon={faToggleOn} size="3x" secondaryOpacity={1} primaryColor="dodgerblue" secondaryColor="white" />
<Fa icon={faFilePlus} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="limegreen" />
<Fa icon={faFileExclamation} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="gold" />
<Fa icon={faFileTimes} size="3x" secondaryOpacity={1} primaryColor="white" secondaryColor="tomato" />`,
    `<Fa icon={faCrow} size="3x" secondaryOpacity={1} primaryColor="dodgerblue" secondaryColor="gold" />
<Fa icon={faCampfire} size="3x" secondaryOpacity={1} primaryColor="sienna" secondaryColor="red" />
<Fa icon={faBirthdayCake} size="3x" secondaryOpacity={1} primaryColor="pink" secondaryColor="palevioletred" />
<Fa icon={faEar} size="3x" secondaryOpacity={1} primaryColor="sandybrown" secondaryColor="bisque" />
<Fa icon={faCorn} size="3x" secondaryOpacity={1} primaryColor="mediumseagreen" secondaryColor="gold" />
<Fa icon={faCookieBite} size="3x" secondaryOpacity={1} primaryColor="saddlebrown" secondaryColor="burlywood" />`,
    `const themeRavenclaw = {
  secondaryOpacity: 1,
  primaryColor: '#0438a1',
  secondaryColor: '#6c6c6c',
}`,
    `<Fa icon={faHatWizard} size="3x" {...themeRavenclaw} />
<Fa icon={faFlaskPotion} size="3x" {...themeRavenclaw} />
<Fa icon={faWandMagic} size="3x" {...themeRavenclaw} />
<Fa icon={faScarf} size="3x" {...themeRavenclaw} />
<Fa icon={faBookSpells} size="3x" {...themeRavenclaw} />`,
  ],
};

export default function Docs() {
  return (
    <div>
      <DocsTitle title="Installation" />
      <DocsCode code={codes.installation[0]} />
      <DocsCode code={codes.installation[1]} lang="js" />

      <DocsTitle title="Basic Use" />
      <article><Fa icon={faFlag} /> Flag</article>
      <DocsCode code={codes.basicUse[0]} />

      <article>
        <div style="font-size: 3em; color: tomato">
          <Fa icon={faFlag} />
        </div>
      </article>
      <DocsCode code={codes.basicUse[1]} />

      <DocsTitle title="Additional Styling" />
      <DocsTitle title="Icon Sizes" level={3} />
      <article>
        <Fa icon={faFlag} size="xs" />&nbsp;
        <Fa icon={faFlag} size="sm" />&nbsp;
        <Fa icon={faFlag} size="lg" />&nbsp;
        <Fa icon={faFlag} size="2x" />&nbsp;
        <Fa icon={faFlag} size="2.5x" />&nbsp;
        <Fa icon={faFlag} size="5x" />&nbsp;
        <Fa icon={faFlag} size="7x" />&nbsp;
        <Fa icon={faFlag} size="10x" />
      </article>
      <DocsCode code={codes.additionalStyling[0]} />

      <DocsTitle title="Fixed Width Icons" level={3} />
      <article>
        <div><Fa icon={faHome} fw style="background: mistyrose" /> Home</div>
        <div><Fa icon={faInfo} fw style="background: mistyrose" /> Info</div>
        <div><Fa icon={faBook} fw style="background: mistyrose" /> Library</div>
        <div><Fa icon={faPencilAlt} fw style="background: mistyrose" /> Applications</div>
        <div><Fa icon={faCog} fw style="background: mistyrose" /> Settings</div>
      </article>
      <DocsCode code={codes.additionalStyling[1]} />

      <DocsTitle title="Pulled Icons" level={3} />
      <article>
        <Fa icon={faQuoteLeft} pull="left" size="2x" />
        <Fa icon={faQuoteRight} pull="right" size="2x" />
        Gatsby believed in the green light, the orgastic future that year by year
        recedes before us. It eluded us then, but that's no matter — tomorrow we
        will run faster, stretch our arms further... And one fine morning — So we
        beat on, boats against the current, borne back ceaselessly into the past.
      </article>
      <DocsCode code={codes.additionalStyling[2]} />

      <DocsTitle title="Animating Icons" />
      <article>
        <Fa icon={faSpinner} size="3x" spin />&nbsp;
        <Fa icon={faCircleNotch} size="3x" spin />&nbsp;
        <Fa icon={faSync} size="3x" spin />&nbsp;
        <Fa icon={faCog} size="3x" spin />&nbsp;
        <Fa icon={faSpinner} size="3x" pulse />&nbsp;
        <Fa icon={faStroopwafel} size="3x" spin />
      </article>
      <DocsCode code={codes.animatingIcons[0]} />

      <DocsTitle title="Power Transforms" />
      <DocsTitle title="Scaling" level={3} />
      <article>
        <Fa icon={faSeedling} size="4x" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} scale={0.5} size="4x" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} scale={1.2} size="4x" style="background: mistyrose" />
      </article>
      <DocsCode code={codes.powerTransforms[0]} />

      <DocsTitle title="Positioning" level={3} />
      <article>
        <Fa icon={faSeedling} scale={0.5} size="4x" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} scale={0.5} translateX={0.2} size="4x" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} scale={0.5} translateX={-0.2} size="4x" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} scale={0.5} translateY={0.2} size="4x" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} scale={0.5} translateY={-0.2} size="4x" style="background: mistyrose" />
      </article>
      <DocsCode code={codes.powerTransforms[1]} />

      <DocsTitle title="Rotating & Flipping" level={3} />
      <article>
        <Fa icon={faSeedling} size="4x" rotate={90} style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" rotate={180} style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" rotate={270} style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" rotate={30} style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" rotate={-30} style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" flip="vertical" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" flip="horizontal" style="background: mistyrose" />&nbsp;
        <Fa icon={faSeedling} size="4x" flip="both" style="background: mistyrose" />
      </article>
      <DocsCode code={codes.powerTransforms[2]} />

      <DocsTitle title="Layering & Text" />
      <article>
        <FaLayers size="4x" style="background: mistyrose">
          <Fa icon={faCircle} color="tomato" />
          <Fa icon={faTimes} scale={0.5} color="white" />
        </FaLayers>&nbsp;
        <FaLayers size="4x" style="background: mistyrose">
          <Fa icon={faBookmark} />
          <Fa icon={faHeart} scale={0.4} translateY={-0.1} color="tomato" />
        </FaLayers>&nbsp;
        <FaLayers size="4x" style="background: mistyrose">
          <Fa icon={faPlay} scale={1.2} rotate={-90} />
          <Fa icon={faSun} scale={0.35} translateY={-0.2} color="white" />
          <Fa icon={faMoon} scale={0.3} translateX={-0.25} translateY={0.25} color="white" />
          <Fa icon={faStar} scale={0.3} translateX={0.25} translateY={0.25} color="white" />
        </FaLayers>&nbsp;
        <FaLayers size="4x" style="background: mistyrose">
          <Fa icon={faCalendar} />
          <FaLayersText scale={0.45} translateY={0.15} color="white" style="font-weight: 900">
            27
          </FaLayersText>
        </FaLayers>&nbsp;
        <FaLayers size="4x" style="background: mistyrose">
          <Fa icon={faCertificate} />
          <FaLayersText scale={0.25} translateY={0.07} rotate={-30} color="white" style="font-weight: 900">
            NEW
          </FaLayersText>
        </FaLayers>&nbsp;
        <FaLayers size="4x" style="background: mistyrose">
          <Fa icon={faEnvelope} />
          <FaLayersText scale={0.2} translateX={0.4} translateY={-0.3} color="white">
            <span style="padding: 0 .2em; background: tomato; border-radius: 1em">
              1,419
            </span>
          </FaLayersText>
        </FaLayers>
      </article>
      <DocsCode code={codes.layering[0]} lang="js" />
      <DocsCode code={codes.layering[1]} />

      <DocsTitle title="Duotone Icons" />
      <DocsTitle title="Basic Use" level={3} />
      <DocsImg src={duotone0} alt="duotone icons basic use" />
      <DocsCode code={codes.duotoneIcons[0]} lang="js" />
      <DocsCode code={codes.duotoneIcons[1]} />
      <DocsTitle title="Swapping Layer Opacity" level={3} />
      <DocsImg src={duotone1} alt="swapping duotone icons layer opacity" />
      <DocsCode code={codes.duotoneIcons[2]} />
      <DocsTitle title="Changing Opacity" level={3} />
      <DocsImg src={duotone2} alt="changing duotone icons opacity" />
      <DocsCode code={codes.duotoneIcons[3]} />
      <DocsImg src={duotone3} alt="changing duotone icons opacity" />
      <DocsCode code={codes.duotoneIcons[4]} />
      <DocsTitle title="Coloring Duotone Icons" level={3} />
      <DocsImg src={duotone4} alt="coloring duotone icons" />
      <DocsCode code={codes.duotoneIcons[5]} />
      <DocsTitle title="Advanced Use" level={3} />
      <DocsImg src={duotone5} alt="duotone icons advanced use" />
      <DocsCode code={codes.duotoneIcons[6]} />
      <DocsImg src={duotone6} alt="duotone icons advanced use" />
      <DocsCode code={codes.duotoneIcons[7]} />
      <DocsImg src={duotone7} alt="duotone icons advanced use" />
      <DocsCode code={codes.duotoneIcons[8]} lang="js" />
      <DocsCode code={codes.duotoneIcons[9]} />

      <DocsTitle title="SSR (Server-Side Rendering)" />
      <article>
        solid-fa supports SSR with{' '}
        <a href="https://start.solidjs.com/" target="_blank">Solid Start</a> and{' '}
        <a href="https://tanstack.com/start" target="_blank">TanStack Start</a>.
        Add <code>solid-fa</code> to <code>ssr.noExternal</code> so the framework recompiles its JSX source.
      </article>

      <DocsTitle title="TanStack Start" level={3} />
      <DocsCode code={`// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/solid-start/plugin/vite'
import viteSolid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [tanstackStart(), viteSolid({ ssr: true })],
  ssr: { noExternal: ['solid-fa'] },
})`} lang="js" />
      <article>
        Full example:{' '}
        <a href="https://github.com/Cweili/solid-fa/tree/master/examples/tanstack-start-ssr" target="_blank">
          examples/tanstack-start-ssr
        </a>
      </article>

      <DocsTitle title="Solid Start" level={3} />
      <DocsCode code={`// app.config.ts
import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  vite: { ssr: { noExternal: ['solid-fa'] } },
})`} lang="js" />
      <article>
        Full example:{' '}
        <a href="https://github.com/Cweili/solid-fa/tree/master/examples/solid-start-ssr" target="_blank">
          examples/solid-start-ssr
        </a>
      </article>
    </div>
  );
}
