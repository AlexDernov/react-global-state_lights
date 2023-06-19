import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const homeLights = [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];
  const [lights, setLights] = useState(homeLights);

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  /* const countLightsOn = lights.reduce((acc, light) => acc + (light.isOn === true? 1: 0), 0); */
  /*oder*/
  function counter() {
    let x = 0;
    lights.forEach((light) => (light.isOn ? (x += 1) : x));
    return x;
  }
  function handleAllLightsOff() {
    setLights(
      lights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
    );
  }

  function handleAllLightsOn() {
    setLights(
      lights.map((light) =>
        light.isOn === false ? { ...light, isOn: true } : light
      )
    );
  }

  return (
    <Layout isDimmed={counter() === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        counter={counter}
        onAllLightsOff={handleAllLightsOff}
        onAllLightsOn={handleAllLightsOn}
      />
    </Layout>
  );
}
