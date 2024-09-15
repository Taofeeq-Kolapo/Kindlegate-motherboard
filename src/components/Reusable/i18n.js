import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

const mandateText = typeof window !== 'undefined' ? localStorage.getItem("mandate") : null;
const mission = typeof window !== 'undefined' ? localStorage.getItem("mission") : null;
const indexContent = typeof window !== 'undefined' ? localStorage.getItem("IndCon") : null;
const prog1 = typeof window !== 'undefined' ? localStorage.getItem("prog1") : null;
const prog2 = typeof window !== 'undefined' ? localStorage.getItem("prog2") : null;
const prog3 = typeof window !== 'undefined' ? localStorage.getItem("prog3") : null;
const prog1T = typeof window !== 'undefined' ? localStorage.getItem("prog1t") : null;
const prog2Title = typeof window !== 'undefined' ? localStorage.getItem("programTitle2") : null;
const prog3Title = typeof window !== 'undefined' ? localStorage.getItem("progTitle3") : null;
const slide1 = typeof window !== 'undefined' ? localStorage.getItem("swiper1") : null;
const slide2 = typeof window !== 'undefined' ? localStorage.getItem("swiper2") : null;
const slide3 = typeof window !== 'undefined' ? localStorage.getItem("swiper3") : null;
const slide4 = typeof window !== 'undefined' ? localStorage.getItem("swiper4") : null;
const footer = typeof window !== 'undefined' ? localStorage.getItem("footer") : null;
const MandateTitle = typeof window !== 'undefined' ? localStorage.getItem("mandTitle") : null;
const MandateContent = typeof window !== 'undefined' ? localStorage.getItem("mandCont") : null;
const aboutContent = typeof window !== 'undefined' ? localStorage.getItem("aboutContent") : null;
const aboutTitle = typeof window !== 'undefined' ? localStorage.getItem("aboutTitle") : null;
const historyContent = typeof window !== 'undefined' ? localStorage.getItem("historyContent") : null;
const historyTitle = typeof window !== 'undefined' ? localStorage.getItem("historyTitle") : null;
const teamContent = typeof window !== 'undefined' ? localStorage.getItem("teamContent") : null;
const teamTitle = typeof window !== 'undefined' ? localStorage.getItem("teamTitle") : null;
const journey = typeof window !== 'undefined' ? localStorage.getItem("ctaTitle") : null;
const journeyContent = typeof window !== 'undefined' ? localStorage.getItem("ctaContent") : null;
const programTitle = typeof window !== 'undefined' ? localStorage.getItem("progPageTitle") : null;
const tribeC = typeof window !== 'undefined' ? localStorage.getItem("tribeC") : null;
const tribeTitle = typeof window !== 'undefined' ? localStorage.getItem("tribeTitle") : null;
const newsC = typeof window !== 'undefined' ? localStorage.getItem("newsC") : null;
const newsTitle = typeof window !== 'undefined' ? localStorage.getItem("newsTitle") : null;
const blogC = typeof window !== 'undefined' ? localStorage.getItem("blogC") : null;
const blogTitle = typeof window !== 'undefined' ? localStorage.getItem("blogTitle") : null;
const sponsorC = typeof window !== 'undefined' ? localStorage.getItem("sponsorC") : null;
const sponsorTitle = typeof window !== 'undefined' ? localStorage.getItem("sponsorTitle") : null;
const sponsoreventC = typeof window !== 'undefined' ? localStorage.getItem("sponsoreventC") : null;
const sponsoreventTitle = typeof window !== 'undefined' ? localStorage.getItem("sponsoreventTitle") : null;
const sponsoreventpackage = typeof window !== 'undefined' ? localStorage.getItem("sponsoreventpackage") : null;
const involvC = typeof window !== 'undefined' ? localStorage.getItem("involvC") : null;
const involveTitle = typeof window !== 'undefined' ? localStorage.getItem("involveTitle") : null;
const heroinvolvC = typeof window !== 'undefined' ? localStorage.getItem("heroinvolvC") : null;
const heroinvolveTitle = typeof window !== 'undefined' ? localStorage.getItem("heroinvolveTitle") : null;
const newsBody = typeof window !== 'undefined' ? localStorage.getItem("newsBody") : null;
const newsHeader = typeof window !== 'undefined' ? localStorage.getItem("newsHeader") : null;

// console.log(prog1T, prog2Title, prog3Title)


i18n
  .use(Languagedetector).use(initReactI18next)
  .init({
    debug: true, 
    resources: {
      en: {
        translation: {
          "HeroHeader":indexContent ,
          "herobtn":"GET INVOLVED",
          "mandate":"OUR MANDATE",
          "mandateConten":mandateText,
          "objective":"OBJECTIVES",
          "objectiveConten": mission,
          "learnbtn":"LEARN MORE",
          "journey":journey,
          "journeyContent":journeyContent,
          "prog1t":prog1T,
          "prog2t":prog2Title,
          "prog3t":prog3Title,
          "prog1Content":prog1,
          "prog2Content":prog2,
          "prog3Content":prog3,
          "slide1Content":slide1,
          "slide2Content":slide2,
          "slide3Content":slide3,
          "slide4Content":slide4,
          "footer":footer,
          "mandateTitle":MandateTitle,
          "mandateContent":MandateContent,
          "aboutTitle":aboutTitle,
          "aboutContent":aboutContent,
          "historyTitle":historyTitle,
          "historyContent":historyContent,
          "teamTitle":teamTitle,
          "teamContent":teamContent,
          "progPageTitle":programTitle,
          "tribeC":tribeC,
          "tribeTitle":tribeTitle,
          "newsTitle":newsTitle,
          "newsC":newsC,
          "newsHeader":newsHeader,
          "newsBody":newsBody,
          "blogC":blogC,
          "blogTitle":blogTitle,
          "involvC":involvC,
          "involveTitle":involveTitle,
          "heroinvolvC":heroinvolvC,
          "heroinvolveTitle":heroinvolveTitle,
          "sponsorC":sponsorC,
          "sponsorTitle":sponsorTitle,
          "sponsoreventC":sponsoreventC,
          "sponsoreventTitle":sponsoreventTitle,
          "sponsoreventpackage":sponsoreventpackage,
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
          "journeyContent":"Soyez le catalyseur d’un réel changement. En tant que bénévole, partenaire, mentor ou sponsor, vous détenez le pouvoir de façonner un avenir meilleur. Ensemble, nous pouvons améliorer la qualité de vie et bâtir des communautés plus fortes et prospères. Commencez votre voyage avec nous dès aujourd'hui !",
          "prog1t":"Direction",
          "prog2t":"Entrepreneuriat",
          "prog3t":"Art",
          "prog1Content":"À la Fondation Kindlegate, notre programme de leadership façonne des leaders visionnaires engagés dans un changement positif. Nous proposons une formation, un mentorat et des ressources approfondis, mettant l'accent sur la pensée critique, la prise de décision stratégique et le leadership éthique. Nos ateliers, séminaires et expériences pratiques permettent aux individus de diriger efficacement et d'inspirer leurs communautés. En collaborant avec des experts et des organisations, nous dotons les participants des outils nécessaires pour conduire un changement impactant. Notre objectif est de construire un réseau de leaders innovants dédiés à l’impact social et au développement durable. Rejoignez-nous pour favoriser un avenir où un leadership informé et éthique alimente le progrès et la croissance transformateurs.",
          "prog2Content":"À la Fondation Kindlegate, notre programme d'entrepreneuriat donne aux individus les compétences et les ressources nécessaires pour transformer des idées innovantes en entreprises réussies. Nous proposons une formation ciblée, un mentorat et un soutien aux entrepreneurs en herbe, en nous concentrant sur la planification d'entreprise, la gestion financière, la discipline financière et les stratégies de marché. Grâce à des ateliers, des événements de présentation et des conseils pratiques, les participants acquièrent des connaissances pratiques et une expérience essentielles au démarrage et au développement de leur entreprise. En favorisant un écosystème entrepreneurial dynamique, nous visons à stimuler la croissance économique et la création d’emplois. Rejoignez-nous pour former une nouvelle génération d'entrepreneurs qui stimulent l'innovation, bâtissent des entreprises durables et contribuent au développement communautaire.",
          "prog3Content":"À la Fondation Kindlegate, notre programme d'expositions d'art célèbre et promeut diverses expressions artistiques tout en soutenant les artistes émergents et établis. Nous organisons des expositions dynamiques présentant des arts, de l'artisanat et des objets culturels d'inspiration africaine. Notre programme offre aux artistes des plateformes pour présenter leur travail, interagir avec le public et gagner en reconnaissance. En organisant des événements en galerie, des ateliers et des projets collaboratifs, nous favorisons une appréciation plus profonde des arts et créons des opportunités d'échange culturel. Grâce à ces expositions, nous visons à enrichir les communautés, à préserver le patrimoine culturel et à inspirer la créativité. Rejoignez-nous pour soutenir les arts et célébrer la riche tapisserie des traditions artistiques mondiales.",
          "slide1Content":"Nous pensons que lorsque nos communautés sont saines et respectueuses de l'environnement, les gens prospèrent. Par conséquent, de nombreux services qui maintiennent les gens en bonne santé sont souvent difficiles d’accès pour ceux qui en ont le plus besoin. Nous faciliterons les environnements propices à la promotion de la créativité, de l’innovation et de la collaboration pour les causes et les objectifs des soins de santé. Nous veillerons à ce que, grâce à nos réseaux communautaires, chaque citoyen affamé à notre portée reçoive une aide alimentaire et que les sans-abri bénéficient d'un environnement de vie propre avec accès aux médicaments de prévention des maladies.",
          "slide2Content":"Nous pensons que les villes et les régions sont plus fortes lorsque leurs habitants ont la possibilité de s’épanouir en tant qu’entrepreneurs, employeurs et employés. La Fondation Kindle Gate s'associera avec des organisations privées et publiques, en utilisant la technologie pour fournir aux citoyens indigents et aux demandeurs d'emploi l'acquisition des compétences nécessaires et mettre en relation les employeurs avec des employés potentiels formés. Cela contribuera à éliminer les obstacles à l’emploi en modernisant le système de main-d’œuvre. Grâce au plaidoyer et à la recherche fondée sur des preuves, nous servirons de guide aux décideurs politiques des gouvernements africains afin de promouvoir un leadership et un entrepreneuriat fondés sur la pensée.",
          "slide3Content":"Nous croyons en un avenir éthique dans lequel les communautés sûres et justes disposent de systèmes judiciaires réactifs, équitables et qui fonctionnent pour les populations les plus vulnérables de notre pays, en particulier celles les plus touchées par la criminalité, la violence et les inégalités entre les sexes. Nous fournirons des systèmes de soutien et d'aide juridique qui réduiront les incarcérations inutiles.",
          "slide4Content":"Nous pensons qu'en articulant une position commune en faveur du déploiement de nos ressources culturelles diverses et riches, nous contribuerions à lutter contre des vices tels que l'agitation des jeunes, l'insécurité et le chômage. Ces efforts se manifesteront par la promotion d'activités, d'événements et par l'organisation d'expositions, d'ateliers, de formations et de festivals d'arts, de théâtre, de musique, d'artisanat et de culture d'inspiration africaine. En outre, les entrepreneurs seront responsabilisés grâce au développement des capacités, au capital d’amorçage, au mentorat et au réseautage.",
          "footer":"Rejoignez le mouvement qui transforme des vies grâce à un leadership éthique, à l'innovation et à une créativité d'inspiration africaine. Ensemble, nous bâtirons des communautés prospères.",
          "mandateTitle":"NOTRE MANDAT",
          "mandateContent":"Promouvoir la création d’une future société éthique de leadership éclairé et d’entrepreneuriat ; tirer parti de la technologie et des écosystèmes de marque pour accélérer la mise en œuvre des objectifs de développement durable intégrés tout en promouvant les arts d’inspiration africaine à travers le monde.",
          "aboutTitle":"À PROPOS DE NOUS",
          "aboutContent":"À la Fondation Kindlegate, nous pensons que la construction d'un monde meilleur commence par des communautés saines et prospères. Nous créons des environnements respectueux de l’environnement, garantissons l’accès aux services essentiels et aidons ceux qui en ont le plus besoin, de l’aide alimentaire à la prévention des maladies. L’autonomisation économique est le moteur de notre mission. Nous connectons les citoyens avec des compétences, des emplois et des opportunités, en favorisant l'entrepreneuriat et en orientant les politiques visant à éliminer les obstacles et à moderniser la main-d'œuvre. Nous défendons la sécurité, la justice et l'équité sociale, en fournissant un soutien juridique aux personnes vulnérables. Grâce à l’autonomisation culturelle, nous combattons les vices sociaux et promouvons les arts d’inspiration africaine, favorisant ainsi le développement durable et la transformation des communautés à travers le monde. Rejoignez-nous dans ce voyage vital.",
          "historyTitle":"NOTRE HISTOIRE",
          "historyContent":"La Fondation Kindlegate a été créée en 2018 avec pour vision de créer un changement durable et positif dans les communautés africaines. Ancrée dans la conviction que chaque individu mérite une chance de s'épanouir, la fondation a commencé par relever des défis critiques en matière de soins de santé, d'éducation et de réduction de la pauvreté dans l'État de Lagos, au Nigeria. Depuis sa création, la fondation a aligné ses efforts sur le programme de développement durable des Nations Unies. Objectifs, axés sur la création de communautés saines, la promotion du développement économique et la garantie de la justice et de la sécurité pour tous. Au fil des années, Kindlegate a fait des progrès significatifs, en particulier à Lagos, où ses initiatives en matière de sécurité alimentaire, d'accès aux soins de santé et d'autonomisation des jeunes ont eu un impact sur des centaines de milliers de vies. Grâce à des partenariats stratégiques et à un engagement en faveur de l'innovation, Kindlegate a élargi sa portée et approfondi son impact. Aujourd'hui, la fondation continue de promouvoir le développement durable, en mettant particulièrement l'accent sur l'exploitation de la technologie, la promotion des arts d'inspiration africaine et la défense d'un leadership éthique à travers le continent.",
          "teamTitle":"NOTRE ÉQUIPE",
          "teamContent":"Notre équipe de la Fondation Kindlegate est animée par une passion commune pour l’impact transformateur. Dirigée par le leadership visionnaire de notre président et directeur général, notre force réside dans la diversité et l’expertise de notre équipe. Guidée par un groupe d'administrateurs dédiés assurant une surveillance stratégique et un conseil consultatif qui offre des conseils sur les initiatives clés, notre orientation stratégique est façonnée par le Conseil d'administration et les sous-directions spécialisées pour garantir une mise en œuvre efficace du programme. Le conseil d'administration assure une gouvernance efficace, tandis que notre chef des programmes supervise et oriente nos activités axées sur notre mission grâce à la mise en œuvre d'initiatives percutantes. L'équipe de développement technologique, dirigée par notre directeur exécutif visionnaire, travaille sans relâche pour stimuler l'innovation et le changement durable. Ensemble, nous sommes unis dans notre engagement à favoriser la créativité, à autonomiser les communautés et à faire progresser les objectifs de développement durable à travers l’Afrique.",
          "progPageTitle":"La Fondation Kindlegate responsabilise les communautés grâce à divers programmes, notamment le développement du leadership, la formation à l'entrepreneuriat et la formation à l'entrepreneuriat. Ateliers, expositions artistiques, aide à la nourriture et au logement, formation informatique, ateliers professionnels, ateliers de sensibilisation aux ODD. Chaque initiative est conçue pour favoriser la croissance, la résilience et des moyens de subsistance durables à travers l’Afrique.",
          "tribeC":"Rencontrez le cœur de la Fondation Kindlegate, notre équipe dévouée qui conduit le changement. Des administrateurs visionnaires et un conseil consultatif dynamique à notre conseil d'administration proactif, notre conseil d'administration et notre équipe de développement technologique spécialisée, nous sommes unis sous la direction de notre président/directeur exécutif. Découvrez comment chaque membre contribue à notre mission et transforme les communautés.",
          "tribeTitle":"NOTRE TRIBU",
          "newsTitle":"NOUVELLES ET ÉVÉNEMENTS",
          "newsC":"Restez connecté avec les derniers événements de la Fondation Kindlegate grâce à notre page Actualités et événements. Vous trouverez ici des mises à jour sur nos projets marquants, les événements à venir, nos réussites et les opportunités de vous impliquer. Rejoignez-nous pour célébrer les jalons et explorer de nouvelles initiatives qui génèrent des changements positifs dans nos communautés. Restez informé, restez inspiré !",
          "newsHeader":newsHeader,
          "newsBody":newsBody,
          "blogC":"Bienvenue sur le blog de la Fondation Kindlegate ! Découvrez des histoires inspirantes, des avis d'experts et des mises à jour sur notre mission d'autonomisation des communautés. Explorez des articles, des vidéos et des images attrayants qui mettent en valeur notre mission, nos projets et leur impact. Restez informé de nos domaines d'intervention et des objectifs des ODD, et rejoignez la conversation alors que nous conduisons un changement positif et travaillons pour un avenir meilleur et durable.",
          "blogTitle":"bloguer",
          "involvC":"À la Fondation Kindlegate, nous croyons au pouvoir de la collaboration. En tant que partenaire, sponsor, mentor ou bénévole, vous jouez un rôle essentiel dans la création d'un impact transformateur. Ensemble, nous pouvons responsabiliser les communautés, favoriser l’innovation et défendre le développement durable dans toute l’Afrique. Votre contribution, que ce soit sous forme de ressources, de connaissances ou de votre temps, peut véritablement avoir un impact positif. Rejoignez notre réseau d’acteurs et de moteurs de changement dès aujourd’hui. Faites partie d’une mission qui inspire le progrès, la résilience et un changement positif durable.",
          "involveTitle":"BÉNÉVOLE, MENTOR, PARTENAIRE OU COMMANDITAIRE",
          "heroinvolvC":"Be a catalyst for lasting change. Get involved with Kindlegate Foundation and help us transform lives through ethical leadership, innovation, and community empowerment. Whether you’re a volunteer, partner, or donor, your contribution creates real impact. Join us today and shape a brighter future for Africa and beyond.",
          "heroinvolveTitle":"IMPLIQUEZ-VOUS",
          "sponsorC":"Nous avons découvert que nos sponsors sont des individus et des organisations dont le soutien vital fait avancer notre mission. Leur engagement responsabilise les communautés et alimente des programmes percutants à travers l’Afrique. Découvrez comment leur partenariat crée un changement transformateur et explorez les façons dont vous pouvez nous rejoindre pour faire la différence.",
          "sponsorTitle":"NOS COMMANDITAIRES",
          "sponsoreventC":"Nous avons découvert que nos sponsors sont des individus et des organisations dont le soutien vital fait avancer notre mission. Leur engagement responsabilise les communautés et alimente des programmes percutants à travers l’Afrique. Découvrez comment leur partenariat crée un changement transformateur et explorez les façons dont vous pouvez nous rejoindre pour faire la différence.",
          "sponsoreventTitle":"NOS COMMANDITAIRES",
          "sponsoreventpackage":sponsoreventpackage
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