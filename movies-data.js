// ===== බහුකාර්ය OMDb Keys =====
export const OMDB_KEYS = ['7a316873', '51e44f67'];

export const SUBDL_KEY = 'subdl_4M8I70ru8mbUim5eaHftWWlLvfSC5DUs64kioqp6igs';
export const OPENSUB_API_KEY = 'bqdHXy0PfXYKXVai3bIRDkANyZpeLtSG';
export const WYZIE_KEY = 'wyzie-py8u0ol1g1xb60pf3z1kiy3ylweuug1l'; 

// ===== HARDCODED EPISODES & MOVIES DATA (Download & Watch Links) =====
export const EPISODES_DATA = {
  'tt11198330': { // House of the Dragon IMDb ID
    '3': { // Season 3
      '1': { 
        videoUrl: 'https://rapidseedbox85742-secure.swift-031.seedbox.vip/media/aa287beec019e30627cb772020be67a1/House.of.the.Dragon.S03E01.720p.HMAX.WEB-DL.DDP5.1.Atmos.H.264-Draken02.mkv',
        subtitleUrl: 'houseofthedragon.srt',
        name: 'Episode 1: Season 3 Premiere',
        whatsappDownloadUrl: 'https://wa.me/94775062608?text=.download%20House%20of%20the%20Dragon%20S03E01%20-%20https%3A%2F%2Frapidseedbox85742-secure.swift-031.seedbox.vip/media/aa287beec019e30627cb772020be67a1/House.of.the.Dragon.S03E01.720p.HMAX.WEB-DL.DDP5.1.Atmos.H.264-Draken02.mkv'
      },
      '2': { 
        videoUrl: 'https://hub.airbender.buzz/1c962f145e53f144b539f7721c2139c4',
        subtitleUrl: 'houseofthedragon.srt', 
        name: 'Episode 2: The Red Dragon and the Gold',
        whatsappDownloadUrl: 'https://wa.me/94775062608?text=.download%20House%20of%20the%20Dragon%20S03E02%20-%20https%3A%2F%2Fhub.airbender.buzz%2F1c962f145e53f144b539f7721c2139c4'
      },
      '3': { 
        videoUrl: 'https://rapidseedbox85742-secure.swift-031.seedbox.vip/media/643f34718ec553520ea177a257ca3450/House.of.the.Dragon.S03E03.720p.AMZN.WEB-DL.DDP5.1.Atmos.H.264-MissionHexaPewPew.mkv',
        subtitleUrl: 'houseofthedragon.srt', 
        name: 'Episode 3: Season 3 Episode 3',
        whatsappDownloadUrl: 'https://wa.me/94775062608?text=.download%20House%20of%20the%20Dragon%20S03E03%20-%20https%3A%2F%2Frapidseedbox85742-secure.swift-031.seedbox.vip%2Fmedia%2F643f34718ec553520ea177a257ca3450/House.of.the.Dragon.S03E03.720p.AMZN.WEB-DL.DDP5.1.Atmos.H.264-MissionHexaPewPew.mkv'
      }
    }
  }
};

// Hardcoded Movies (චිත්‍රපට වීඩියෝ සහ බාගත කිරීම් ලින්ක්ස්)
export const CUSTOM_MOVIES_DATA = {
  'tt4633694': { // Spider-Man: Into the Spider-Verse IMDB ID
    videoUrl: 'https://iws.sinhalachr.workers.dev/?id=qo6UNotut4VUAye5RPnr5cHR&assetToken=qghBWpb9k6xuPzeFP1ZEGk1d&download=true',
    subtitleUrl: '', 
    name: 'Spider-Man: Into the Spider-Verse (2018)',
    whatsappDownloadUrl: 'https://wa.me/94775062608?text=.download%20Spider-Man%20Into%20the%20Spider-Verse%20-%20https%3A%2F%2Fiws.sinhalachr.workers.dev%2F%3Fid%3Dqo6UNotut4VUAye5RPnr5cHR%26assetToken%3DqghBWpb9k6xuPzeFP1ZEGk1d%26download%3Dtrue'
  },
  'tt28212876': { // Obsession IMDB ID
    videoUrl: 'https://hub.airbender.buzz/8eda6e05bd1c6668fcc135d48c06590d?token=1782922178139',
    subtitleUrl: 'obse.srt',
    name: 'Obsession (2026)',
    whatsappDownloadUrl: 'https://wa.me/94775062608?text=.download%20Obsession%20Film%20-%20https%3A%2F%2Fhub.airbender.buzz%2F8eda6e05bd1c6668fcc135d48c06590d%3Ftoken%3D1782922178139'
  },
  'tt0241527': { // Harry potter IMDB ID
    videoUrl: 'https://drive.google.com/file/d/1D0xcgiaJ10hUGAorH0cdRoKb3rxNTd8o/preview',
    SubtitleUrl: 'Sinhala.dubded',
    name: 'Harry potter (2001)',
    whatsappDownloadUrl: 'https://wa.me/94775062608?text=.download%20Harry%20Potter%201%20-%20https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1D0xcgiaJ10hUGAorH0cdRoKb3rxNTd8o%2Fpreview'
  }

};

export const HERO_SERIES = [
  {id:'tt0241527',title:'Harry Potter and the Sorcerer\'s Stone',year:'2001',rating:'7.6',plot:'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.'},
  {id:'tt4633694',title:'Spider-Man: Into the Spider-Verse',year:'2018',rating:'8.4',plot:'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.'},
  {id:'tt28212876',title:'Obsession',year:'2026',rating:'8.0',plot:'A thrilling and emotional deep dive into love, mystery, and unpredictable human desire.'},
  {id:'tt11198330',title:'House of the Dragon',year:'2022',rating:'8.5',plot:'The story of the Targaryen civil war that took place about 200 years before the events of Game of Thrones.'},
  {id:'tt9813792',title:'From',year:'2022',rating:'7.8',plot:'Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters.'},
  {id:'tt13443470',title:'Wednesday',year:'2022',rating:'8.1',plot:'Follows Wednesday Addams years as a student at Nevermore Academy.'},
  {id:'tt10919420',title:'Squid Game',year:'2021',rating:'8.0',plot:'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games.'},
  {id:'tt4574334',title:'Stranger Things',year:'2016',rating:'8.7',plot:'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.'},
  {id:'tt0903747',title:'Breaking Bad',year:'2008',rating:'9.5',plot:'A chemistry teacher diagnosed with cancer turns to making meth to secure his family\'s future.'}
];

export const CATEGORIES = {
  trending: ['tt4633694','tt28212876','tt11198330','tt9813792','tt13443470','tt10919420','tt4574334','tt0903747','tt8111088','tt3032476','tt0386676','tt0944947','tt0108778','tt2560140'],
  hollywood: ['tt4633694','tt28212876','tt0111161','tt1375666','tt0816692','tt0468569','tt0137523','tt0109830','tt0120737','tt0167260','tt4154796','tt7286456','tt15398776','tt9362722'],
  kdrama: ['tt15266542','tt14689414','tt13370348','tt11280740','tt10262630','tt13443470','tt11198330','tt1190634','tt10850932','tt11212276'],
  bollywood: ['tt8178634','tt15327088','tt12735488','tt1187043','tt12844910','tt10648342','tt0451850','tt0816442','tt0066763','tt0347304'],
  sinhala: ['tt2386490','tt0111161','tt1375666','tt0816692','tt0468569','tt0137523']
};

export const LANG_MAP = {
  'en': {flag:'🇬🇧', name:'English'},
  'si': {flag:'🇱🇰', name:'Sinhala'},
  'ta': {flag:'🇱🇰', name:'Tamil'},
  'ko': {flag:'🇰🇷', name:'Korean'},
  'hi': {flag:'🇮🇳', name:'Hindi'},
  'fr': {flag:'🇫🇷', name:'French'},
  'de': {flag:'🇩🇪', name:'German'},
  'es': {flag:'🇪🇸', name:'Spanish'},
  'pt': {flag:'🇵🇹', name:'Portuguese'},
  'ar': {flag:'🇸🇦', name:'Arabic'},
  'zh': {flag:'🇨🇳', name:'Chinese'},
  'ja': {flag:'🇯🇵', name:'Japanese'},
  'tr': {flag:'🇹🇷', name:'Turkish'},
  'ru': {flag:'🇷🇺', name:'Russian'},
  'it': {flag:'🇮🇹', name:'Italian'},
  'nl': {flag:'🇳🇱', name:'Dutch'},
  'id': {flag:'🇮🇩', name:'Indonesian'},
  'th': {flag:'🇹🇭', name:'Thai'},
  'vi': {flag:'🇻🇳', name:'Vietnamese'},
  'pl': {flag:'🇵🇱', name:'Polish'},
};
