export type GameData = {
  opponent: string;
  kickoff: string;
}

export type TeamData = {
  team: string,
  teamLogoUrl: string,
  games: GameData[]
}

export type TeamList = {
  [teamCode: string]: TeamData;
}

const teamData: TeamList = {
  "KC": {
    "team": "Kansas City Chiefs",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/5N0l1KbG1BHPyP8_S7SOXg_96x96.png",
    "games": [
      {
        "opponent": "BAL",
        "kickoff": "09/05/2024 20:20:00"
      }
    ]
  },
  "PHI": {
    "team": "Philadelphia Eagles",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/s4ab0JjXpDOespDSf9Z14Q_96x96.png",
    "games": [
      {
        "opponent": "GB",
        "kickoff": "09/06/2024 20:15:00"
      }
    ]
  },
  "ATL": {
    "team": "Atlanta Falcons",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/QNdwQPxtIRYUhnMBYq-bSA_96x96.png",
    "games": [
      {
        "opponent": "PIT",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "BUF": {
    "team": "Buffalo Bills",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/_RMCkIDTISqCPcSoEvRDhg_96x96.png",
    "games": [
      {
        "opponent": "ARI",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "CHI": {
    "team": "Chicago Bears",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/7uaGv3B13mXyBhHcTysHcA_96x96.png",
    "games": [
      {
        "opponent": "TEN",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "CIN": {
    "team": "Cincinnati Bengals",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/wDDRqMa40nidAOA5883Vmw_96x96.png",
    "games": [
      {
        "opponent": "NE",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "IND": {
    "team": "Indianapolis Colts",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/zOE7BhKadEjaSrrFjcnR4w_96x96.png",
    "games": [
      {
        "opponent": "HOU",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "MIA": {
    "team": "Miami Dolphins",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/1ysKnl7VwOQO8g94gbjKdQ_96x96.png",
    "games": [
      {
        "opponent": "JAX",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "NO": {
    "team": "New Orleans Saints",
    "teamLogoUrl": "data:image/svg+xml;base64,ICAgICAgICAgICAgPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1M3B4IiB2aWV3Qm94PSIwIDAgNTIgNTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgICAgICAgICAgIDx0aXRsZT4KICAgICAgICAgICAgICAgICAgICBwaWxlLW9mLXBvbwogICAgICAgICAgICAgICAgPC90aXRsZT4KICAgICAgICAgICAgICAgIDxnIGlkPSJwaWxlLW9mLXBvbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEuMDAwMDAwKSIgZmlsbFJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC44MjIzMzEsMC44MDI4MzY3MiBDMzMuOTg4NTY3LDMuMzgwNTY2ODcgMzQuNDM5MTAyNSwxMC43ODI3MDU0IDM0LjQzOTEwMjUsMTQuNTk5ODU4NCBDNDAuMzAxMTQzNiwxNy4xNzY5OTI3IDM5Ljg5NDM0MDIsMjAuODA3MDM0NCAzOS44OTQzNDAyLDIzLjA5MjEzMzYgQzQ3Ljk5MDE3MDMsMjYuNDg4MjkxOCA0My4zOTkzNDM5LDMxLjgyNzg3MDUgNDUuNDAyMDE1MSwzMi41NTIwNDQ4IEM0Ny40MDQ2ODYzLDMzLjI3NjIxOTIgNTEuNzg3NzU5NCwzOC43ODIzNTExIDQ5Ljk5OTQyNDksNDQuMTUwNDY0OCBDNDguNzM3NjA2LDQ3LjkzODExNiA0NS42MDIwOTc2LDQ5Ljk0MDE5OCA0NC40NTUzNzc0LDQ5Ljk0MDE5OCBDMzkuODk0MzQwMiw1MC44OTg3MDY1IDI1LjU5Njg5MzMsNTAuMjYxNDA2MyAxNi44MDQ4NTE0LDQ5LjQ2MzA0NjUgQzEzLjEzNTEzMDYsNTAuOTAwMDQ2MSA2LjY0NjcyMTk4LDUwLjQwNTUyNDggNS4zNzkyNzM1Miw0OS4yMDY4MDY4IEMtMS4yMzU4NDY2Niw0NS42ODAzMDcgLTEuMjM1ODQ2NjYsMzYuOTMyNTEwOCA2LjA0MjkyODc1LDMzLjEyNzU3ODggQzQuODU5NzMwNTEsMjcuNjYyMjE1NSA2LjU0NTEwNDM5LDI0LjgyNTk3NjIgMTEuMjE3Mjk2MywyMi4yNjI5OTU5IEMxMC41NDg4ODkxLDE4LjY2NzQzMDEgMTAuNTQ4ODg5MSwxNC4yNjczMzQ1IDE2LjUyNzU0MzEsMTIuMTYyOTQ5MyBDMTYuNTI3NTQzMSw2LjY3MTA2ODA5IDE4Ljc5MjYxNDMsNy42ODAwNDI1MSAxNy45ODE2ODksNS44ODc5ODI1IEMxNi4xMTg0NzQ4LDEuNzcwNDc0MTkgMTcuNTM4MTQ4OSwwLjM0NzI4MzEwMyAxOC4yOTYxMjIzLDAuMzQxMzI4NzcgQzE4LjM3NzE5MTUsMC4zNDA2OTE5MjMgMTguNzYwNzY5OCwwLjc5MjM3MzQ3IDE4LjgyMjMzMSwwLjgwMjgzNjcyIFoiIGlkPSJTaGFwZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMS4yIiBmaWxsPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjUxODUsNi45OTk0NSBDMjEuMjgzLDUuODAxOTEgMTguNjc4MSwyLjgyOTk0OSAxOS41NjI4LDMuMDA3NjMgQzMxLjk4NjQsNS41MDI1MiAzMi43ODI4LDEzLjE1MzUgMzEuOTg2NCwxNi40OCBDMzcuNzIwMywxNy4yNzg0IDM3Ljg3OTYsMjIuMTM1MSAzNy4yNDI1LDI0LjQ2MzcgQzQ1Ljg0MzQsMjYuNDU5NiA0MS4wNjUxLDMzLjk0NDMgNDIuNDk4NiwzMy45NDQzIEM0My45MzIxLDMzLjk0NDMgNDkuMTg4MiwzOC40MzUgNDcuNzU0Nyw0Mi45MjU4IEM0Ni42MDc5LDQ2LjUxODUgNDQuNDA5OSw0Ny40MTY2IDQzLjQ1NDMsNDcuNDE2NiBDMzkuNjMxNiw0OC42MTQyIDI0LjAyMjYsNDcuNTgzIDE2LjY5NTksNDYuOTE3NyBDMTMuNjM3OCw0OC4xMTUyIDEwLjY0MzM5LDQ4LjA4MiA5LjUyODQ2LDQ3LjkxNTYgQy0wLjk4Mzc2LDQ1LjkxOTcgMi44Mzg4NTYsMzQuOTQyMiA5LjUyODQ2LDM0Ljk0MjIgQzUuMzIzNTcsMjguMTU2MSAxMC42NDMzOSwyNC43OTYzIDEzLjgyODksMjMuOTY0NyBDMTAuOTYxOTQsMTEuOTg5MjMgMjAuMDQwNywxNS40ODIxIDE5LjA4NSwxMy40ODYyIEMxNy44MzksMTAuODgzODIgMTkuNTYyOCw4LjQ5NjM5IDIwLjUxODUsNi45OTk0NSBaIiBpZD0iU2hhcGUiIHN0cm9rZT0iI0ZGRkZGRiIgZmlsbD0iI0EwOEE1NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMywzNS41IEwxOC41LDM1LjUgQzE4LjMzMzMsMzcuMzMzMyAxOS41LDQxIDI1LjUsNDEgQzMxLjUsNDEgMzMsMzcuMzMzMyAzMywzNS41IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgZmlsbD0iI0ZDRkNGQyIgY3g9IjE5IiBjeT0iMjYiIHJ4PSI0IiByeT0iNiIgLz4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgZmlsbD0iI0ZDRkNGQyIgY3g9IjMyIiBjeT0iMjYiIHJ4PSI0IiByeT0iNiIgLz4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgZmlsbD0iIzAwMDAwMCIgY3g9IjMyIiBjeT0iMjYiIHJ4PSIyIiByeT0iNCIgLz4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgZmlsbD0iIzAwMDAwMCIgY3g9IjE5IiBjeT0iMjYiIHJ4PSIyIiByeT0iNCIgLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9zdmc+",
    "games": [
      {
        "opponent": "CAR",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "NYG": {
    "team": "New York Giants",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/q8qdTYh-OWR5uO_QZxFENw_96x96.png",
    "games": [
      {
        "opponent": "MIN",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "LAC": {
    "team": "Los Angeles Chargers",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/tmQHdnwuMcA9n69f5rBr0w_96x96.png",
    "games": [
      {
        "opponent": "LV",
        "kickoff": "09/08/2024 16:05:00"
      }
    ]
  },
  "SEA": {
    "team": "Seattle Seahawks",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_96x96.png",
    "games": [
      {
        "opponent": "DEN",
        "kickoff": "09/08/2024 16:05:00"
      }
    ]
  },
  "TB": {
    "team": "Tampa Bay Buccaneers",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/ClUk-p3KMCjGo9G68zPr2A_96x96.png",
    "games": [
      {
        "opponent": "WAS",
        "kickoff": "09/08/2024 16:25:00"
      }
    ]
  },
  "CLE": {
    "team": "Cleveland Browns",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/bTzlW33n9s53DxRzmlZXyg_96x96.png",
    "games": [
      {
        "opponent": "DAL",
        "kickoff": "09/08/2024 16:25:00"
      }
    ]
  },
  "DET": {
    "team": "Detroit Lions",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/WE1l856fyyHh6eAbbb8hQQ_96x96.png",
    "games": [
      {
        "opponent": "LAR",
        "kickoff": "09/08/2024 20:20:00"
      }
    ]
  },
  "SF": {
    "team": "San Francisco 49ers",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/ku3s7M4k5KMagYcFTCie_g_96x96.png",
    "games": [
      {
        "opponent": "NYJ",
        "kickoff": "09/09/2024 20:15:00"
      }
    ]
  },
  "PIT": {
    "team": "Pittsburgh Steelers",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/mdUFLAswQ4jZ6V7jXqaxig_96x96.png",
    "games": [
      {
        "opponent": "ATL",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "BAL": {
    "team": "Baltimore Ravens",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/1vlEqqoyb9uTqBYiBeNH-w_96x96.png",
    "games": [
      {
        "opponent": "KC",
        "kickoff": "09/05/2024 20:20:00"
      }
    ]
  },
  "HOU": {
    "team": "Houston Texans",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/sSUn9HRpYLQtEFF2aG9T8Q_96x96.png",
    "games": [
      {
        "opponent": "IND",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "TEN": {
    "team": "Tennessee Titans",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/9J9dhhLeSa3syZ1bWXRjaw_96x96.png",
    "games": [
      {
        "opponent": "CHI",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "JAX": {
    "team": "Jacksonville Jaguars",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/HLfqVCxzVx5CUDQ07GLeWg_96x96.png",
    "games": [
      {
        "opponent": "MIA",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "CAR": {
    "team": "Carolina Panthers",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/4BdHvKq4Iyxsp8WaAbpDuQ_96x96.png",
    "games": [
      {
        "opponent": "NO",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "GB": {
    "team": "Green Bay Packers",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/IlA4VGrUHzSVLCOcHsRKgg_96x96.png",
    "games": [
      {
        "opponent": "PHI",
        "kickoff": "09/06/2024 20:15:00"
      }
    ]
  },
  "ARI": {
    "team": "Arizona Cardinals",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_96x96.png",
    "games": [
      {
        "opponent": "BUF",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "NE": {
    "team": "New England Patriots",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/z89hPEH9DZbpIYmF72gSaw_96x96.png",
    "games": [
      {
        "opponent": "CIN",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "MIN": {
    "team": "Minnesota Vikings",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/Vmg4u0BSYZ-1Mc-5uyvxHg_96x96.png",
    "games": [
      {
        "opponent": "NYG",
        "kickoff": "09/08/2024 13:00:00"
      }
    ]
  },
  "LV": {
    "team": "Las Vegas Raiders",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/QysqoqJQsTbiJl8sPL12Yg_96x96.png",
    "games": [
      {
        "opponent": "LAC",
        "kickoff": "09/08/2024 16:05:00"
      }
    ]
  },
  "DEN": {
    "team": "Denver Broncos",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/ZktET_o_WU6Mm1sJzJLZhQ_96x96.png",
    "games": [
      {
        "opponent": "SEA",
        "kickoff": "09/08/2024 16:05:00"
      }
    ]
  },
  "WAS": {
    "team": "Washington Commanders",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/o0CCwss-QfFnJaVdGIHFmQ_96x96.png",
    "games": [
      {
        "opponent": "TB",
        "kickoff": "09/08/2024 16:25:00"
      }
    ]
  },
  "DAL": {
    "team": "Dallas Cowboys",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/-zeHm0cuBjZXc2HRxRAI0g_96x96.png",
    "games": [
      {
        "opponent": "CLE",
        "kickoff": "09/08/2024 16:25:00"
      }
    ]
  },
  "LAR": {
    "team": "Los Angeles Rams",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/CXW68CjwPIaUurbvSUSyJw_96x96.png",
    "games": [
      {
        "opponent": "DET",
        "kickoff": "09/08/2024 20:20:00"
      }
    ]
  },
  "NYJ": {
    "team": "New York Jets",
    "teamLogoUrl": "https://ssl.gstatic.com/onebox/media/sports/logos/Rb4y9m3hkTcYVmdl10geqw_96x96.png",
    "games": [
      {
        "opponent": "SF",
        "kickoff": "09/09/2024 20:15:00"
      }
    ]
  }

};

export default teamData;
