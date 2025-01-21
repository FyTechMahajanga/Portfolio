import { Book, Monitor, Code, Brain, Laptop, Camera, FileSpreadsheet, Gamepad, Smartphone, Megaphone, Network, Box, Palette, FileImage, FileText, Table2, Blocks } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PriceFormat {
  fr: string;
  en: string;
  mg: string;
}

interface DurationFormat {
  fr: string;
  en: string;
  mg: string;
}
interface ButtonName {
  fr: string;
  en: string;
  mg: string;
}
interface Detailsabout {
  fr: string;
  en: string;
  mg: string;
}
interface Notebene {
  fr: string;
  en: string;
  mg: string;
}
interface Plus {
  fr: string;
  en: string;
  mg: string;
}

export interface Formation {
  icon: LucideIcon;
  title: {
    fr: string;
    en: string;
    mg: string;
  };
  description: {
    fr: string;
    en: string;
    mg: string;
  };
  duration: DurationFormat;
  price: PriceFormat;
  buttonname : ButtonName;
  detailsabout: Detailsabout;
  notebene: Notebene;
  image: string;
  plus: Plus;
}

export const formations: Formation[] = [
  {
    icon: Monitor,
    title: {
      fr: 'UI/UX Design',
      en: 'UI/UX Design',
      mg: 'UI/UX Design'
    },
    description: {
      fr: 'Maîtrisez les principes du design d\'interface et de l\'expérience utilisateur.',
      en: 'Master interface design and user experience principles.',
      mg: 'Mahay ny fitsipiky ny design interface sy ny traikefa mpampiasa.'
    },
    duration: {
      fr: '60 heures',
      en: '60 hours',
      mg: '60 ora'
    },
    price: {
      fr: '59,26€',
      en: '$61,63',
      mg: '290 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 2 mois et 15 jours',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 2 months and 15 days',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 2 volana sy 15 andro"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 5 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 5 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 5 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Palette,
    title: {
      fr: 'Design Graphique',
      en: 'Graphic Design',
      mg: 'Design Sary'
    },
    description: {
      fr: 'Apprenez à créer des designs professionnels pour le print et le digital.',
      en: 'Learn to create professional designs for print and digital.',
      mg: 'Mianara mamorona design professionnel ho an\'ny printy sy ny nomerika.'
    },
    duration: {
      fr: '48 heures',
      en: '48 hours',
      mg: '48 ora'
    },
    price: {
      fr: '47,42€',
      en: '$49,33',
      mg: '232 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 2 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 2 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 2 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 4 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 4 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 4 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Box,
    title: {
      fr: 'Modélisation 3D',
      en: '3D Modeling',
      mg: '3D Modeling'
    },
    description: {
      fr: 'Créez des modèles 3D professionnels pour divers domaines.',
      en: 'Create professional 3D models for various fields.',
      mg: 'Mamorona 3D professionnel ho an\'ny fampidirana.'
    },
    duration: {
      fr: '48 heures',
      en: '48 hours',
      mg: '48 ora'
    },
    price: {
      fr: '65,78€',
      en: '$68,42',
      mg: '322 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 2 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 2 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 2 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 4 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 4 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 4 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1615648178124-01f7162ceac4?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: FileImage,
    title: {
      fr: 'PowerPoint Animé 3D',
      en: 'Animated PowerPoint',
      mg: 'PowerPoint Animé'
    },
    description: {
      fr: 'Créez des présentations dynamiques et professionnelles.',
      en: 'Create dynamic and professional presentations.',
      mg: 'Mamorona présentation dynamique sy professionnel.'
    },
    duration: {
      fr: '30 heures',
      en: '30 hours',
      mg: '30 ora'
    },
    price: {
      fr: '25,60€',
      en: '$26,63',
      mg: '125 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 1 mois et 15 jours',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 1 month and 15 days',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 1 volana sy 15 andro"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 3 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 3 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 3 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Camera,
    title: {
      fr: 'Photographie',
      en: 'Photography',
      mg: 'Photography'
    },
    description: {
      fr: 'Maîtrisez l\'art de la photographie numérique.',
      en: 'Master digital photography.',
      mg: 'Mahay ny fitsipiky ny fotografi ny nomerika.'
    },
    duration: {
      fr: '48 heures',
      en: '48 hours',
      mg: '48 ora'
    },
    price: {
      fr: '54,87€',
      en: '$57,07',
      mg: '269 000 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 2 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 2 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 2 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 4 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 4 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 4 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: FileText,
    title: {
      fr: 'Word Moderne',
      en: 'Modern Word',
      mg: 'Word Moderne'
    },
    description: {
      fr: 'Optimisez votre utilisation de Microsoft Word.',
      en: 'Optimize your use of Microsoft Word.',
      mg: 'Optimize ny fampiharana Microsoft Word.'
    },
    duration: {
      fr: '24 heures',
      en: '24 hours',
      mg: '24 ora'
    },
    price: {
      fr: '19,99€',
      en: '$20,79',
      mg: '98 000 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 1 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 1 month',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 1 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 2 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 2 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 2 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Table2,
    title: {
      fr: 'Excel Avancé',
      en: 'Advanced Excel',
      mg: 'Excel Avancé'
    },
    description: {
      fr: 'Maîtrisez les fonctionnalités avancées d\'Excel.',
      en: 'Master advanced Excel features.',
      mg: 'Mahay ny fonctionnalités avancées Excel.'
    },
    duration: {
      fr: '35 heures',
      en: '35 hours',
      mg: '35 ora'
    },
    price: {
      fr: '35,70€',
      en: '$37,13',
      mg: '175 000 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 1 mois et 15 jours',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 1 month and 15 days',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 1 volana sy 15 andro"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 3 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 3 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 3 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Blocks,
    title: {
      fr: 'Scratch',
      en: 'Scratch',
      mg: 'Scratch'
    },
    description: {
      fr: 'Initiez-vous à la programmation avec Scratch.',
      en: 'Start programming with Scratch.',
      mg: 'Mianara ny programmation ho an\'ny Scratch.'
    },
    duration: {
      fr: '24 heures',
      en: '24 hours',
      mg: '24 ora'
    },
    price: {
      fr: '19,99€',
      en: '$20,79',
      mg: '98 000 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 1 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 1 month',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 1 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 2 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 2 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 2 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Monitor,
    title: {
      fr: 'Développement Web No-Code',
      en: 'No-Code Web Development',
      mg: 'Web Development No-Code'
    },
    description: {
      fr: 'Créez des sites web sans coder.',
      en: 'Create websites without coding.',
      mg: 'Mamorona site web ho an\'ny kodifikasi.'
    },
    duration: {
      fr: '48 heures',
      en: '48 hours',
      mg: '48 ora'
    },
    price: {
      fr: '47,42€',
      en: '$49,33',
      mg: '232 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 2 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 2 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 2 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 4 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 4 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 4 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Code,
    title: {
      fr: 'Développement Front-end',
      en: 'Front-end Development',
      mg: 'Development Front-end'
    },
    description: {
      fr: 'Maîtrisez HTML, CSS et JavaScript.',
      en: 'Master HTML, CSS, and JavaScript.',
      mg: 'Mahay ny HTML, CSS sy JavaScript.'
    },
    duration: {
      fr: '96 heures',
      en: '96 hours',
      mg: '96 ora'
    },
    price: {
      fr: '132,30€',
      en: '$137,61',
      mg: '648 600 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 4 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 4 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 4 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 8 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 8 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 8 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Brain,
    title: {
      fr: 'Développement Back-end',
      en: 'Back-end Development',
      mg: 'Development Back-end'
    },
    description: {
      fr: 'Apprenez à créer des API et gérer des bases de données.',
      en: 'Learn to create APIs and manage databases.',
      mg: 'Mianara ny API sy ny fampiharana bases de données.'
    },
    duration: {
      fr: '120 heures',
      en: '120 hours',
      mg: '120 ora'
    },
    price: {
      fr: '184,15€',
      en: '$191,54',
      mg: '902 800 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 5 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 5 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 5 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 10 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 10 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 10 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Laptop,
    title: {
      fr: 'Développement Logiciel',
      en: 'Software Development',
      mg: 'Development Logiciel'
    },
    description: {
      fr: 'Créez des applications desktop professionnelles.',
      en: 'Create professional desktop applications.',
      mg: 'Mamorona aplikasi desktop professionnel.'
    },
    duration: {
      fr: '120 heures',
      en: '120 hours',
      mg: '120 ora'
    },
    price: {
      fr: '165,22€',
      en: '$171,85',
      mg: '810 000 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 5 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 5 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 5 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 10 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 10 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 10 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Gamepad,
    title: {
      fr: 'Développement Jeux',
      en: 'Game Development',
      mg: 'Development Jeux'
    },
    description: {
      fr: 'Créez vos propres jeux vidéo.',
      en: 'Create your own video games.',
      mg: 'Mamorona jeux vidéo ny an\'ny anao.'
    },
    duration: {
      fr: '96 heures',
      en: '96 hours',
      mg: '96 ora'
    },
    price: {
      fr: '147,27€',
      en: '$153,18',
      mg: '722 000 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 4 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 4 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 4 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 8 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 8 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 8 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Smartphone,
    title: {
      fr: 'Développement Mobile',
      en: 'Mobile Development',
      mg: 'Development Mobile'
    },
    description: {
      fr: 'Créez des applications mobiles iOS et Android.',
      en: 'Create mobile applications for iOS and Android.',
      mg: 'Mamorona aplikasi mobile ho an\'ny iOS sy Android.'
    },
    duration: {
      fr: '96 heures',
      en: '96 hours',
      mg: '96 ora'
    },
    price: {
      fr: '132,30€',
      en: '$137,61',
      mg: '648 600 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 4 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 4 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 4 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 8 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 8 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 8 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Megaphone,
    title: {
      fr: 'Marketing Digital',
      en: 'Digital Marketing',
      mg: 'Marketing Digital'
    },
    description: {
      fr: 'Maîtrisez les stratégies marketing en ligne.',
      en: 'Master digital marketing strategies.',
      mg: 'Mahay ny stratégies marketing en ligne.'
    },
    duration: {
      fr: '72 heures',
      en: '72 hours',
      mg: '72 ora'
    },
    price: {
      fr: '99,24€',
      en: '$103,22',
      mg: '486 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 3 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 3 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 3 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 6 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 6 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 6 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  },
  {
    icon: Network,
    title: {
      fr: 'Réseau',
      en: 'Networking',
      mg: 'Réseau'
    },
    description: {
      fr: 'Apprenez à gérer des infrastructures réseau.',
      en: 'Learn to manage network infrastructures.',
      mg: 'Mianara ny infrastructures réseau.'
    },
    duration: {
      fr: '72 heures',
      en: '72 hours',
      mg: '72 ora'
    },
    price: {
      fr: '99,24€',
      en: '$103,22',
      mg: '486 500 Ar'
    },
    buttonname :{
      fr: 'formation',
      en: 'training',
      mg: 'fiofanana'
    },
    detailsabout : {
      fr: 'WI-FI gratuit et illimité 5j/7j, matin et après-midi, pour vous permettre de réviser et de vous entrainer en dehors des heures de cours. Certification à la clé à la fin du formation. La durée de formation sera 3 mois',
      en: 'Free and unlimited WI-FI 5 days a week, morning and afternoon, to allow you to revise and practice outside class hours. Certification at the end of the training. The training duration will be 3 months',
      mg: "WI-FI maimaim-poana sy tsy misy fetra 5 andro isan-kerinandro, maraina sy tolakandro, mba ahafahanao manitsy sy manao fanazaran-tena ivelan'ny ora fianarana. Fanamarinana amin'ny faran'ny fiofanana. Ny faharetan'ny fiofanana dia 3 volana"
    },
    notebene : {
      fr: "Attention : Vous avez la possibilité de choisir une option à temps partiel (matin ou après-midi) pour vos révisions. La formation s'étale sur 6 mois, au même tarif",
      en: 'Please note: You have the option of choosing a part-time option (morning or afternoon) for your revisions. The training is spread over 6 months, at the same price',
      mg: "Azafady: Afaka misafidy safidy tapa-potoana ianao (maraina na tolakandro) ho an'ny fanavaozanao. Miparitaka mandritra ny 6 volana ny fiofanana, mitovy vidiny"
    },
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000',
    plus: {
      fr: 'Apprendre encore plus.',
      en: 'Learn more.',
      mg: 'Hamantatra bebe kokoa.'
    }
  }
];