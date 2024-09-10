import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

// Setup i18next
const mandateText = typeof window !== 'undefined' ? localStorage.getItem("mandate") : null;
const mission = typeof window !== 'undefined' ? localStorage.getItem("mission") : null;
const indexContent = typeof window !== 'undefined' ? localStorage.getItem("IndCon") : null;
const prog1 = typeof window !== 'undefined' ? localStorage.getItem("prog1") : null;
const prog2 = typeof window !== 'undefined' ? localStorage.getItem("prog2") : null;
const prog3 = typeof window !== 'undefined' ? localStorage.getItem("prog3") : null;
const slide1 = typeof window !== 'undefined' ? localStorage.getItem("swiper1") : null;
const slide2 = typeof window !== 'undefined' ? localStorage.getItem("swiper2") : null;
const slide3 = typeof window !== 'undefined' ? localStorage.getItem("swiper3") : null;
const slide4 = typeof window !== 'undefined' ? localStorage.getItem("swiper4") : null;

// console.log(indexContent)


i18n
  .use(Languagedetector).use(initReactI18next)
  .init({
    debug: true, 
    resources: {
      en: {
        translation: {
          "HeroHeader":indexContent ,
          // "HeroHeader": "It's important to have a good customer service, a customer service provider. Maecenas airline planning mass. To place a fusce, a large but ultricie pillow, a pure bed, and a free bed, let it be a great comfort for any urn. Now for cartoons. It is clinical.",
          "herobtn":"GET INVOLVED",
          "mandate":"OUR MANDATE",
          "mandateConten":mandateText,
          "objective":"OBJECTIVES",
          "objectiveConten": mission,
          "learnbtn":"LEARN MORE",
          "journey":"THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU",
          "journeyContent":"It's important to have a good customer service, a customer service provider. Maecenas airline planning mass. To place a fusce, a large but ultricie pillow, a pure bed, and a free bed, let it be a great comfort for any urn. Now for cartoons. It is clinical.",
          "prog1Content":prog1,
          "prog2Content":prog2,
          "prog3Content":prog3,
          "slide1Content":slide1,
          "slide2Content":slide2,
          "slide3Content":slide3,
          "slide4Content":slide4,
        }
      },
      fr: {
        translation: {
          "HeroHeader": "Accueillir! Faites partie d'un mouvement qui défend le leadership éthique, l'innovation et la créativité d'inspiration africaine. Ensemble, nous pouvons responsabiliser les communautés, transformer des vies et inspirer un changement mondial grâce à la mission de la Fondation Kindlegate.",
          "herobtn":"IMPLIQUEZ-VOUS",
          "mandate":"NOTRE MANDAT",
          "mandateConten":"Promouvoir la création d’une future société éthique de leadership éclairé et d’entrepreneuriat ; tirer parti de la technologie et des écosystèmes de marque pour accélérer la mise en œuvre des objectifs de développement durable intégrés tout en promouvant les arts d’inspiration africaine à travers le monde.",
          "objective":"OBJECTIFS",
          "objectiveConten":"À la Fondation Kindlegate, nos objectifs fondamentaux génèrent des changements significatifs dans les communautés. De l’autonomisation éducative à l’accès aux soins de santé, en passant par le développement durable et l’inclusion sociale, nous nous engageons à créer un avenir meilleur pour tous. Rejoignez-nous dans ce voyage transformateur et aidez-nous à transformer ces objectifs ambitieux en réalités percutantes.",
          "learnbtn":"Apprendre encore plus",
          "journey":"LE VOYAGE POUR CONSTRUIRE UN MONDE MEILLEUR COMMENCE ICI AVEC VOUS",
          "journeyContent":"Il est important d'avoir un bon service client, un prestataire de service client. Masse de planification de la compagnie aérienne Mécène. Placer une fusce, un oreiller grand mais ultime, un lit pur et un lit libre, que ce soit un grand confort pour n'importe quelle urne. Passons maintenant aux dessins animés. C'est clinique.",
          "prog1Content":"À la Fondation Kindlegate, notre programme de leadership façonne des leaders visionnaires engagés dans un changement positif. Nous proposons une formation, un mentorat et des ressources approfondis, mettant l'accent sur la pensée critique, la prise de décision stratégique et le leadership éthique. Nos ateliers, séminaires et expériences pratiques permettent aux individus de diriger efficacement et d'inspirer leurs communautés. En collaborant avec des experts et des organisations, nous dotons les participants des outils nécessaires pour conduire un changement impactant. Notre objectif est de construire un réseau de leaders innovants dédiés à l’impact social et au développement durable. Rejoignez-nous pour favoriser un avenir où un leadership informé et éthique alimente le progrès et la croissance transformateurs.",
          "prog2Content":"À la Fondation Kindlegate, notre programme d'entrepreneuriat donne aux individus les compétences et les ressources nécessaires pour transformer des idées innovantes en entreprises réussies. Nous proposons une formation ciblée, un mentorat et un soutien aux entrepreneurs en herbe, en nous concentrant sur la planification d'entreprise, la gestion financière, la discipline financière et les stratégies de marché. Grâce à des ateliers, des événements de présentation et des conseils pratiques, les participants acquièrent des connaissances pratiques et une expérience essentielles au démarrage et au développement de leur entreprise. En favorisant un écosystème entrepreneurial dynamique, nous visons à stimuler la croissance économique et la création d’emplois. Rejoignez-nous pour former une nouvelle génération d'entrepreneurs qui stimulent l'innovation, bâtissent des entreprises durables et contribuent au développement communautaire.",
          "prog3Content":"À la Fondation Kindlegate, notre programme d'expositions d'art célèbre et promeut diverses expressions artistiques tout en soutenant les artistes émergents et établis. Nous organisons des expositions dynamiques présentant des arts, de l'artisanat et des objets culturels d'inspiration africaine. Notre programme offre aux artistes des plateformes pour présenter leur travail, interagir avec le public et gagner en reconnaissance. En organisant des événements en galerie, des ateliers et des projets collaboratifs, nous favorisons une appréciation plus profonde des arts et créons des opportunités d'échange culturel. Grâce à ces expositions, nous visons à enrichir les communautés, à préserver le patrimoine culturel et à inspirer la créativité. Rejoignez-nous pour soutenir les arts et célébrer la riche tapisserie des traditions artistiques mondiales.",
          "slide1Content":"Nous pensons que lorsque nos communautés sont saines et respectueuses de l'environnement, les gens prospèrent. Par conséquent, de nombreux services qui maintiennent les gens en bonne santé sont souvent difficiles d’accès pour ceux qui en ont le plus besoin. Nous faciliterons les environnements propices à la promotion de la créativité, de l’innovation et de la collaboration pour les causes et les objectifs des soins de santé. Nous veillerons à ce que, grâce à nos réseaux communautaires, chaque citoyen affamé à notre portée reçoive une aide alimentaire et que les sans-abri bénéficient d'un environnement de vie propre avec accès aux médicaments de prévention des maladies.",
          "slide2Content":slide2,
          "slide3Content":slide3,
          "slide4Content":slide4,
        }

      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;