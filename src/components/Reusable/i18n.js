import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

// Setup i18next
const mandateText = typeof window !== 'undefined' ? localStorage.getItem("mandate") : null;
const mission = typeof window !== 'undefined' ? localStorage.getItem("mission") : null;
const indexContent = typeof window !== 'undefined' ? localStorage.getItem("IndCon") : null;

console.log(indexContent)


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