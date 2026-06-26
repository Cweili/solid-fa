import { onMount } from 'solid-js'
import Fa, { FaLayers, FaLayersText } from 'solid-fa'
import {
  faFlag,
  faHome,
  faInfo,
  faBook,
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
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  let renderedOn = 'SSR'

  onMount(() => {
    renderedOn = 'Client'
    const el = document.getElementById('rendered-on')
    if (el) el.textContent = renderedOn
  })

  return (
    <main>
      <h1>solid-fa + Solid Start</h1>
      <p>
        This page is rendered via SSR. All icons below are server-rendered and
        hydrated on the client. Rendered on: <strong id="rendered-on">{renderedOn}</strong>
      </p>

      <section class="demo-section">
        <h2>Basic Use</h2>
        <article><Fa icon={faFlag} /> Flag</article>
        <article>
          <div style={{ "font-size": "3em", color: "tomato" }}>
            <Fa icon={faFlag} />
          </div>
        </article>
      </section>

      <section class="demo-section">
        <h2>Additional Styling</h2>
        <h3>Icon Sizes</h3>
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

        <h3>Fixed Width Icons</h3>
        <article>
          <div><Fa icon={faHome} fw style={{ background: "mistyrose" }} /> Home</div>
          <div><Fa icon={faInfo} fw style={{ background: "mistyrose" }} /> Info</div>
          <div><Fa icon={faBook} fw style={{ background: "mistyrose" }} /> Library</div>
          <div><Fa icon={faPencilAlt} fw style={{ background: "mistyrose" }} /> Applications</div>
          <div><Fa icon={faCog} fw style={{ background: "mistyrose" }} /> Settings</div>
        </article>

        <h3>Pulled Icons</h3>
        <article>
          <Fa icon={faQuoteLeft} pull="left" size="2x" />
          <Fa icon={faQuoteRight} pull="right" size="2x" />
          Gatsby believed in the green light, the orgastic future that year by year
          recedes before us. It eluded us then, but that's no matter — tomorrow we
          will run faster, stretch our arms further... And one fine morning — So we
          beat on, boats against the current, borne back ceaselessly into the past.
        </article>
      </section>

      <section class="demo-section">
        <h2>Animating Icons</h2>
        <article>
          <Fa icon={faSpinner} size="3x" spin />&nbsp;
          <Fa icon={faCircleNotch} size="3x" spin />&nbsp;
          <Fa icon={faSync} size="3x" spin />&nbsp;
          <Fa icon={faCog} size="3x" spin />&nbsp;
          <Fa icon={faSpinner} size="3x" pulse />&nbsp;
          <Fa icon={faStroopwafel} size="3x" spin />
        </article>
      </section>

      <section class="demo-section">
        <h2>Power Transforms</h2>
        <h3>Scaling</h3>
        <article>
          <Fa icon={faSeedling} size="4x" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} scale={0.5} size="4x" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} scale={1.2} size="4x" style={{ background: "mistyrose" }} />
        </article>

        <h3>Positioning</h3>
        <article>
          <Fa icon={faSeedling} scale={0.5} size="4x" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} scale={0.5} translateX={0.2} size="4x" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} scale={0.5} translateX={-0.2} size="4x" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} scale={0.5} translateY={0.2} size="4x" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} scale={0.5} translateY={-0.2} size="4x" style={{ background: "mistyrose" }} />
        </article>

        <h3>Rotating & Flipping</h3>
        <article>
          <Fa icon={faSeedling} size="4x" rotate={90} style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" rotate={180} style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" rotate={270} style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" rotate={30} style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" rotate={-30} style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" flip="vertical" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" flip="horizontal" style={{ background: "mistyrose" }} />&nbsp;
          <Fa icon={faSeedling} size="4x" flip="both" style={{ background: "mistyrose" }} />
        </article>
      </section>

      <section class="demo-section">
        <h2>Layering & Text</h2>
        <article>
          <FaLayers size="4x" style={{ background: "mistyrose" }}>
            <Fa icon={faCircle} color="tomato" />
            <Fa icon={faTimes} scale={0.5} color="white" />
          </FaLayers>&nbsp;
          <FaLayers size="4x" style={{ background: "mistyrose" }}>
            <Fa icon={faBookmark} />
            <Fa icon={faHeart} scale={0.4} translateY={-0.1} color="tomato" />
          </FaLayers>&nbsp;
          <FaLayers size="4x" style={{ background: "mistyrose" }}>
            <Fa icon={faPlay} scale={1.2} rotate={-90} />
            <Fa icon={faSun} scale={0.35} translateY={-0.2} color="white" />
            <Fa icon={faMoon} scale={0.3} translateX={-0.25} translateY={0.25} color="white" />
            <Fa icon={faStar} scale={0.3} translateX={0.25} translateY={0.25} color="white" />
          </FaLayers>&nbsp;
          <FaLayers size="4x" style={{ background: "mistyrose" }}>
            <Fa icon={faCalendar} />
            <FaLayersText scale={0.45} translateY={0.15} color="white" style={{ "font-weight": "900" }}>
              27
            </FaLayersText>
          </FaLayers>&nbsp;
          <FaLayers size="4x" style={{ background: "mistyrose" }}>
            <Fa icon={faCertificate} />
            <FaLayersText scale={0.25} translateY={0.07} rotate={-30} color="white" style={{ "font-weight": "900" }}>
              NEW
            </FaLayersText>
          </FaLayers>&nbsp;
          <FaLayers size="4x" style={{ background: "mistyrose" }}>
            <Fa icon={faEnvelope} />
            <FaLayersText scale={0.2} translateX={0.4} translateY={-0.3} color="white">
              <span style={{ padding: "0 .2em", background: "tomato", "border-radius": "1em" }}>
                1,419
              </span>
            </FaLayersText>
          </FaLayers>
        </article>
      </section>
    </main>
  )
}
