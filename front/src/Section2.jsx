import React, { useState } from "react";

const Section2 = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [ButtonParagraph, setButtonParagraph] = useState("Voir plus ...");

  function onClick() {
    setShowParagraph(!showParagraph);
    if (!showParagraph) {
      setButtonParagraph("Fermer");
    } else {
      setButtonParagraph("Voir plus ...");
    }
  }
  return (
    <>
      <div className="container"></div>
      <div className="textBox">
        <p>
          Le climat est l’ensemble de conditions météorologiques sur une durée
          conséquente - souvent trente ans ou plus. Il existe de nombreux
          climats - équatorial, aride, océanique…, mais ils sont tous
          actuellement en danger. Nous faisons face à un changement climatique
          sans précédent dans l’histoire humaine : réchauffement, acidification
          des eaux douces, fontes des calottes glacières, hausse du niveau de la
          mer… Si cela peut sembler apocalyptique, ce n’est pas la première fois
          que cela arrive à l’échelle de la Terre.
          <br />
          <br />
          Le climat se modifie en permanence, mais à une échelle bien supérieure
          à celle de la vie humaine. Des recherches géologiques poussées ont
          permis de comprendre que la période du Cénozoïque, il y a de cela 56
          millions d’années, a été marquée par une très forte hausse du niveau
          de CO2 et ainsi d’une hausse de la température.
        </p>
        {showParagraph && (
          <p>
            Le principal mécanisme du réchauffement climatique est l’effet de
            serre. La principale source de chaleur sur Terre est apportée par le
            rayonnement solaire. Entrant dans l’atmosphère, ce rayonnement
            réchauffe la surface terrestre, ou est réfléchi par celle-ci et
            retourne dans l’atmosphère. La présence de “gaz à effet de serre”,
            tels que la vapeur d’eau, le dioxyde de carbone ou le méthane,
            permet de garder ce rayonnement en le réfléchissant de nouveau vers
            le sol. Si le mécanisme est positif, ayant créé des températures
            permettant la vie sur Terre, il s’emballe aujourd’hui à cause des
            émissions humaines de ces mêmes gaz à effet de serre.
            <br />
            <br />
            Ces émissions ne sont toutefois pas la seule raison de ce
            réchauffement : la notion d'albédo est également à prendre en
            compte. L'albédo est la capacité d’une surface à réfléchir la
            lumière qui arrive dessus. Plus l'albédo est proche de 0 (couleur
            noire) et plus la surface est absorbante ; plus il est proche de 1
            (blanc) et plus la surface est réfléchissante. Plus une surface est
            absorbante (noire), et plus le rayonnement solaire sera stocké,
            augmentant la chaleur au sol.
            <br />
            <br />
            La fonte des glaciers et la goudroisation des sols entraînent une
            baisse de l’albédo, et donc une hausse des températures locales. À
            cela s’ajoute une hausse du niveau de la mer en raison de la fonte
            des calottes glacières. Ce qui, dans le cas des glaciers, crée un
            cercle vicieux : plus les glaciers fondent, plus ils fondent vite.
            <br />
            <br />
            Ce cercle vicieux est au cœur du réchauffement climatique : plus il
            fait chaud, plus les températures augmenteront vite.
            <br />
            <br />
            Les enjeux actuels ne sont donc pas de faire baisser la température,
            mais d’empêcher que sa hausse ne s’emballe. Plusieurs idées ont été
            présentées : captage des gaz à effet de serre, forçage de l’albédo
            en repeignant des surfaces terrestres en blanc…
          </p>
        )}
        <button onClick={() => onClick()}>{ButtonParagraph}</button>
      </div>
    </>
  );
};

export default Section2;
