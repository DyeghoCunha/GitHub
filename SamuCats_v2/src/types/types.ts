

export interface IProject {
  id: string;
  projectName: string;
  authorName: string;
  progress?: number;
  description: string;
  image?: string;
  developers?: IDeveloper[];


}

export interface IProjectCard {
  id: string;
  project: IProject;
}

export interface IDeveloperCard {
  id: string;
  developer: IDeveloper;
}


interface Person {
  id: string;
  name: string;
  availability: boolean;
  linkedIn?: string;
  github: string;
  whatsapp?: string;
  image:string;
  email:string;
}

export interface IDeveloper extends Person {
  primaryStack: DeveloperStack;
  secondaryStack?: DeveloperStack;
  primaryLanguage: Language;
  programmingLanguages?: Language[];
  stylingFrameWork?: StylingFramework[];
  frameWork: Framework[];
  slug:string;
  summary:string;
}

export default class Developer implements IDeveloper {
  id: string;
  name: string;
  availability: boolean;
  linkedIn: string;
  github: string;
  slug:string;
  whatsapp?: string;
  primaryStack: DeveloperStack;
  secondaryStack?: DeveloperStack;
  primaryLanguage: Language;
  programmingLanguages?: Language[];
  stylingFrameWork?: StylingFramework[];
  frameWork: Framework[];
  summary:string;
  image:string;
  email:string;

  constructor({
    id,
    name,
    availability,
    linkedIn,
    github,
    whatsapp,
    primaryStack,
    secondaryStack,
    primaryLanguage,
    programmingLanguages,
    stylingFrameWork,
    frameWork,
    slug,
    summary,
    image,
    email
  }: IDeveloper) {
    this.id = id;
    this.name = name;
    this.availability = availability;
    this.linkedIn = linkedIn;
    this.github = github;
    this.whatsapp = whatsapp;
    this.primaryStack = primaryStack;
    this.secondaryStack = secondaryStack;
    this.primaryLanguage = primaryLanguage;
    this.programmingLanguages = programmingLanguages;
    this.stylingFrameWork = stylingFrameWork;
    this.frameWork = frameWork;
    this.slug = slug
    this.summary = summary
    this.image = image
    this.email = email
  }
}

export interface IDesigner extends Person {
  designTools: DesignTool[];
  specialties: DesignerSpecialty[];
}

export enum DeveloperStack {
  Frontend = 'Frontend',
  Backend = 'Backend',
  FullStack = 'Full Stack',
  Mobile = 'Mobile',
  DevOps = 'DevOps',
  DataScience = 'Data Science',
  UxUi = "Ux/Ui"
}

export enum Language {
  ABAP = 'ABAP',
  Assembly = 'Assembly',
  C = 'C',
  CPlusPlus = 'C++',
  CSharp = 'C#',
  COBOL = 'COBOL',
  Clojure = 'Clojure',
  Dart = 'Dart',
  Elixir = 'Elixir',
  Go = 'Go',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Julia = 'Julia',
  Kotlin = 'Kotlin',
  Lua = 'Lua',
  MATLAB = 'MATLAB',
  ObjectiveC = 'Objective-C',
  Perl = 'Perl',
  PHP = 'PHP',
  Python = 'Python',
  R = 'R',
  Ruby = 'Ruby',
  Rust = 'Rust',
  Scala = 'Scala',
  Shell = 'Shell',
  SQL = 'SQL',
  Swift = 'Swift',
  TypeScript = 'TypeScript',
}


export enum Framework {
  Angular = 'Angular',
  ASPNET = 'ASP.NET',
  Blazor = 'Blazor',
  CodeIgniter = 'CodeIgniter',
  Dancer = 'Dancer',
  Deno = 'Deno',
  Django = 'Django',
  DotNET = '.NET',
  Drupal = 'Drupal',
  Elm = 'Elm',
  Express = 'Express',
  FastAPI = 'FastAPI',
  Fastify = 'Fastify',
  Flask = 'Flask',
  Gatsby = 'Gatsby',
  Grails = 'Grails',
  Hibernate = 'Hibernate',
  Ktor = 'Ktor',
  Laravel = 'Laravel',
  Lit = 'Lit',
  Nest = 'Nest',
  Next = 'Next',
  Node = 'Node',
  Nuxt = 'Nuxt',
  Phoenix = 'Phoenix',
  Play = 'Play',
  PlayFramework = 'Play Framework',
  Qwik = 'Qwik',
  Rails = 'Rails',
  React = 'React',
  Remix = 'Remix',
  Revel = 'Revel',
  Solid = 'Solid',
  Spring = 'Spring',
  Svelte = 'Svelte',
  Symfony = 'Symfony',
  TypeORM = 'TypeORM',
  Vapor = 'Vapor',
  Vue = 'Vue',
}


export enum StylingFramework {
  AntDesign = 'Ant Design',
  Aphrodite = 'Aphrodite',
  Atlaskit = 'Atlaskit',
  Base = 'Base',
  Belle = 'Belle',
  Blueprint = 'Blueprint',
  Bootstrap = 'Bootstrap',
  Bulma = 'Bulma',
  ChakraUI = 'Chakra UI',
  Cirrus = 'Cirrus',
  ConciseCSS = 'Concise CSS',
  Cutestrap = 'Cutestrap',
  Emotion = 'Emotion',
  Evergreen = 'Evergreen',
  Fela = 'Fela',
  Foundation = 'Foundation',
  Grommet = 'Grommet',
  Griddle = 'Griddle',
  JSS = 'JSS',
  Kube = 'Kube',
  Less = 'Less',
  Mantine = 'Mantine',
  MaterialUI = 'Material-UI',
  Materialize = 'Materialize',
  Milligram = 'Milligram',
  OnsenUI = 'Onsen UI',
  PicnicCSS = 'Picnic CSS',
  PostCSS = 'PostCSS',
  PrimeReact = 'PrimeReact',
  PureCSS = 'Pure CSS',
  Rebass = 'Rebass',
  Reakit = 'Reakit',
  RSuite = 'RSuite',
  Sass = 'Sass',
  SemanticUI = 'Semantic UI',
  SmoothUI = 'Smooth UI',
  Spectre = 'Spectre',
  Stitches = 'Stitches',
  Styletron = 'Styletron',
  StyledComponents = 'Styled Components',
  StyledJSX = 'Styled JSX',
  Stylus = 'Stylus',
  Susy = 'Susy',
  TailwindCSS = 'Tailwind CSS',
  Twin = 'Twin',
  TurretCSS = 'Turret CSS',
  UIKit = 'UIKit',
  VanillaExtract = 'vanilla-extract',
  WindiCSS = 'Windi CSS',
  Wing = 'Wing',
}

export enum DesignTool {
  Photoshop = 'Photoshop',
  Illustrator = 'Illustrator',
  Sketch = 'Sketch',
  Figma = 'Figma',
  AdobeXD = 'Adobe XD',
  InVision = 'InVision',
  Balsamiq = 'Balsamiq',
  Marvel = 'Marvel',
  Zeplin = 'Zeplin',
  AffinityDesigner = 'Affinity Designer',
  CorelDraw = 'CorelDraw',
  GIMP = 'GIMP',
  Canva = 'Canva',
  GravitDesigner = 'Gravit Designer',
  Lunacy = 'Lunacy',
  Procreate = 'Procreate',
  Inkscape = 'Inkscape',
  Lightroom = 'Lightroom',
  AfterEffects = 'After Effects',
  PremierePro = 'Premiere Pro'
}

export enum DesignerSpecialty {
  UX = 'UX',
  UI = 'UI',
  GraphicDesign = 'Graphic Design',
  WebDesign = 'Web Design',
  MobileAppDesign = 'Mobile App Design',
  Animation = 'Animation',
  LogoDesign = 'Logo Design',
  PrintDesign = 'Print Design',
  Typography = 'Typography',
  Illustration = 'Illustration',
  Branding = 'Branding',
  MotionGraphics = 'Motion Graphics',
  Infographics = 'Infographics',
  DataVisualization = 'Data Visualization',
  GameDesign = 'Game Design',
  ArtDirection = 'Art Direction',
  PackagingDesign = 'Packaging Design',
  AdvertisingDesign = 'Advertising Design',
  EnvironmentalDesign = 'Environmental Design',
  IndustrialDesign = 'Industrial Design',
  Design3D = '3D Design'
}

