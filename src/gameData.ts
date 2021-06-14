import saintsLogo from './img/pile-of-poo.svg';

interface GameData {
  opponent: string;
  kickoff: string;
}

interface TeamData {
  [key: string]: {
    team: string,
    teamLogoUrl: string,
    games: GameData[]
  }
}

const teamData: TeamData = {
  'ATL': {
    team: 'Atlanta Falcons',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/QNdwQPxtIRYUhnMBYq-bSA_96x96.png',
    games: [
      {
        opponent: 'PHI',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'MIN': {
    team: 'Minnesota Vikings',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/Vmg4u0BSYZ-1Mc-5uyvxHg_96x96.png',
    games: [
      {
        opponent: 'CIN',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'WAS': {
    team: 'Washington Football Team',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/z_Or7w7bQ_ALmWUNsdd7AQ_96x96.png',
    games: [
      {
        opponent: 'LAC',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'PHI': {
    team: 'Philadelphia Eagles',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/s4ab0JjXpDOespDSf9Z14Q_96x96.png',
    games: [
      {
        opponent: 'ATL',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'DAL': {
    team: 'Dallas Cowboys',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/-zeHm0cuBjZXc2HRxRAI0g_96x96.png',
    games: [
      {
        opponent: 'TB',
        kickoff: '09/09/2021 20:20:00'
      }
    ]
  },
  'NYG': {
    team: 'New York Giants',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/q8qdTYh-OWR5uO_QZxFENw_96x96.png',
    games: [
      {
        opponent: 'DEN',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'NE': {
    team: 'New England Patriots',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/z89hPEH9DZbpIYmF72gSaw_96x96.png',
    games: [
      {
        opponent: 'MIA',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'PIT': {
    team: 'Pittsburg Steelers',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/mdUFLAswQ4jZ6V7jXqaxig_96x96.png',
    games: [
      {
        opponent: 'BUF',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'LV': {
    team: 'Las Vegas Raiders',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/QysqoqJQsTbiJl8sPL12Yg_96x96.png',
    games: [
      {
        opponent: 'BLT',
        kickoff: '09/13/2021 20:15:00'
      }
    ]
  },
  'DEN': {
    team: 'Denver Broncos',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/ZktET_o_WU6Mm1sJzJLZhQ_96x96.png',
    games: [
      {
        opponent: 'NYG',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'GB': {
    team: 'Green Bay Packers',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/IlA4VGrUHzSVLCOcHsRKgg_96x96.png',
    games: [
      {
        opponent: 'NO',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'CHI': {
    team: 'Chicago Bears',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/7uaGv3B13mXyBhHcTysHcA_96x96.png',
    games: [
      {
        opponent: 'LAR',
        kickoff: '09/12/2021 20:20:00'
      }
    ]
  },
  'SEA': {
    team: 'Seattle Seahawks',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_96x96.png',
    games: [
      {
        opponent: 'IND',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'CIN': {
    team: 'Cincinnati Bengals',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/wDDRqMa40nidAOA5883Vmw_96x96.png',
    games: [
      {
        opponent: 'MIN',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'SF': {
    team: 'San Francisco 49ers',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/ku3s7M4k5KMagYcFTCie_g_96x96.png',
    games: [
      {
        opponent: 'DET',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'TB': {
    team: 'Tampa Bay Buccaneers',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/cv5_3oTDQB0gT7l0g2gSGg_96x96.png',
    games: [
      {
        opponent: 'DAL',
        kickoff: '09/09/2021 20:20:00'
      }
    ]
  },
  'CLV': {
    team: 'Cleveland Browns',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/bTzlW33n9s53DxRzmlZXyg_96x96.png',
    games: [
      {
        opponent: 'KC',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'TEN': {
    team: 'Tennessee Titans',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/9J9dhhLeSa3syZ1bWXRjaw_96x96.png',
    games: [
      {
        opponent: 'ARZ',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'KC': {
    team: 'Kansas City Chiefs',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/5N0l1KbG1BHPyP8_S7SOXg_96x96.png',
    games: [
      {
        opponent: 'CLV',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'JAX': {
    team: 'Jacksonville Jaguars',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/HLfqVCxzVx5CUDQ07GLeWg_96x96.png',
    games: [
      {
        opponent: 'HST',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'IND': {
    team: 'Indianapolis Colts',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/zOE7BhKadEjaSrrFjcnR4w_96x96.png',
    games: [
      {
        opponent: 'SEA',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'LAC': {
    team: 'Los Angeles Chargers',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/tmQHdnwuMcA9n69f5rBr0w_96x96.png',
    games: [
      {
        opponent: 'WAS',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'HST': {
    team: 'Houston Texans',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/sSUn9HRpYLQtEFF2aG9T8Q_96x96.png',
    games: [
      {
        opponent: 'JAX',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'NO': {
    team: 'New Orleans Saints',
    teamLogoUrl:
      saintsLogo,
    games: [
      {
        opponent: 'GB',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'BUF': {
    team: 'Buffalo Bills',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/_RMCkIDTISqCPcSoEvRDhg_96x96.png',
    games: [
      {
        opponent: 'PIT',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'NYJ': {
    team: 'New York Jets',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/Rb4y9m3hkTcYVmdl10geqw_96x96.png',
    games: [
      {
        opponent: 'CAR',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'MIA': {
    team: 'Miami Dolphins',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/1ysKnl7VwOQO8g94gbjKdQ_96x96.png',
    games: [
      {
        opponent: 'NE',
        kickoff: '09/12/2021 16:25:00'
      }
    ]
  },
  'BLT': {
    team: 'Baltimore Ravens',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/1vlEqqoyb9uTqBYiBeNH-w_96x96.png',
    games: [
      {
        opponent: 'LV',
        kickoff: '09/13/2021 20:15:00'
      }
    ]
  },
  'ARZ': {
    team: 'Arizona Cardinals',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_96x96.png',
    games: [
      {
        opponent: 'TEN',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'DET': {
    team: 'Detroit Lions',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/WE1l856fyyHh6eAbbb8hQQ_96x96.png',
    games: [
      {
        opponent: 'SF',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  },
  'LAR': {
    team: 'Los Angeles Rams',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/UyYc_V_6Vabrvr7ous98_A_96x96.png',
    games: [
      {
        opponent: 'CHI',
        kickoff: '09/12/2021 20:20:00'
      }
    ]
  },
  'CAR': {
    team: 'Carolina Panthers',
    teamLogoUrl:
      'https://ssl.gstatic.com/onebox/media/sports/logos/4BdHvKq4Iyxsp8WaAbpDuQ_96x96.png',
    games: [
      {
        opponent: 'NYJ',
        kickoff: '09/12/2021 13:00:00'
      }
    ]
  }
};

export default teamData;
