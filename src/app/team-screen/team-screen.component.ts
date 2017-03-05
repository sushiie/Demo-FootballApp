import { Component, OnInit } from '@angular/core';
import { appService } from '../services/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-screen',
  templateUrl: './team-screen.component.html',
  styleUrls: ['./team-screen.component.css']
})
export class TeamScreenComponent implements OnInit {

  public players: {
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/teams/5/players"
    },
    "team": {
      "href": "http://api.football-data.org/v1/teams/5"
    }
  },
  "count": 26,
  "players": [
    {
      "name": "Manuel Neuer",
      "position": "Keeper",
      "jerseyNumber": 1,
      "dateOfBirth": "1986-03-27",
      "nationality": "Germany",
      "contractUntil": "2021-06-30",
      "marketValue": "45,000,000 €"
    },
    {
      "name": "Sven Ulreich",
      "position": "Keeper",
      "jerseyNumber": 26,
      "dateOfBirth": "1988-08-03",
      "nationality": "Germany",
      "contractUntil": "2018-06-30",
      "marketValue": "2,500,000 €"
    },
    {
      "name": "Tom Starke",
      "position": "Keeper",
      "jerseyNumber": 22,
      "dateOfBirth": "1981-03-18",
      "nationality": "Germany",
      "contractUntil": "2017-06-30",
      "marketValue": "200,000 €"
    },
    {
      "name": "Jérôme Boateng",
      "position": "Centre Back",
      "jerseyNumber": 17,
      "dateOfBirth": "1988-09-03",
      "nationality": "Germany",
      "contractUntil": "2021-06-30",
      "marketValue": "45,000,000 €"
    },
    {
      "name": "Holger Badstuber",
      "position": "Centre Back",
      "jerseyNumber": 28,
      "dateOfBirth": "1989-03-13",
      "nationality": "Germany",
      "contractUntil": "2017-06-30",
      "marketValue": "3,000,000 €"
    },
    {
      "name": "David Alaba",
      "position": "Left-Back",
      "jerseyNumber": 27,
      "dateOfBirth": "1992-06-24",
      "nationality": "Austria",
      "contractUntil": "2021-06-30",
      "marketValue": "45,000,000 €"
    },
    {
      "name": "Juan Bernat",
      "position": "Left-Back",
      "jerseyNumber": 18,
      "dateOfBirth": "1993-03-01",
      "nationality": "Spain",
      "contractUntil": "2019-06-30",
      "marketValue": "18,000,000 €"
    },
    {
      "name": "Philipp Lahm",
      "position": "Right-Back",
      "jerseyNumber": 21,
      "dateOfBirth": "1983-11-11",
      "nationality": "Germany",
      "contractUntil": "2018-06-30",
      "marketValue": "13,000,000 €"
    },
    {
      "name": "Rafinha",
      "position": "Right-Back",
      "jerseyNumber": 13,
      "dateOfBirth": "1985-09-07",
      "nationality": "Brazil",
      "contractUntil": "2017-06-30",
      "marketValue": "5,500,000 €"
    },
    {
      "name": "Javi Martínez",
      "position": "Centre Back",
      "jerseyNumber": 8,
      "dateOfBirth": "1988-09-02",
      "nationality": "Spain",
      "contractUntil": "2021-06-30",
      "marketValue": "25,000,000 €"
    },
    {
      "name": "Xabi Alonso",
      "position": "Defensive Midfield",
      "jerseyNumber": 14,
      "dateOfBirth": "1981-11-25",
      "nationality": "Spain",
      "contractUntil": "2017-06-30",
      "marketValue": "4,000,000 €"
    },
    {
      "name": "Joshua Kimmich",
      "position": "Defensive Midfield",
      "jerseyNumber": 32,
      "dateOfBirth": "1995-02-08",
      "nationality": "Germany",
      "contractUntil": "2020-06-30",
      "marketValue": "20,000,000 €"
    },
    {
      "name": "Arturo Vidal",
      "position": "Central Midfield",
      "jerseyNumber": 23,
      "dateOfBirth": "1987-05-22",
      "nationality": "Chile",
      "contractUntil": "2019-06-30",
      "marketValue": "40,000,000 €"
    },
    {
      "name": "Thiago",
      "position": "Central Midfield",
      "jerseyNumber": 6,
      "dateOfBirth": "1991-04-11",
      "nationality": "Spain",
      "contractUntil": "2019-06-30",
      "marketValue": "22,000,000 €"
    },
    {
      "name": "Franck Ribéry",
      "position": "Left Wing",
      "jerseyNumber": 7,
      "dateOfBirth": "1983-04-07",
      "nationality": "France",
      "contractUntil": "2017-06-30",
      "marketValue": "9,000,000 €"
    },
    {
      "name": "Kingsley Coman",
      "position": "Right Wing",
      "jerseyNumber": 29,
      "dateOfBirth": "1996-06-13",
      "nationality": "France",
      "contractUntil": "2017-06-30",
      "marketValue": "20,000,000 €"
    },
    {
      "name": "Julian Green",
      "position": "Centre Forward",
      "jerseyNumber": 37,
      "dateOfBirth": "1995-06-06",
      "nationality": "United States",
      "contractUntil": "2017-06-30",
      "marketValue": "500,000 €"
    },
    {
      "name": "Arjen Robben",
      "position": "Right Wing",
      "jerseyNumber": 10,
      "dateOfBirth": "1984-01-23",
      "nationality": "Netherlands",
      "contractUntil": "2017-06-30",
      "marketValue": "11,000,000 €"
    },
    {
      "name": "Douglas Costa",
      "position": "Left Wing",
      "jerseyNumber": 11,
      "dateOfBirth": "1990-09-14",
      "nationality": "Brazil",
      "contractUntil": "2020-06-30",
      "marketValue": "35,000,000 €"
    },
    {
      "name": "Thomas Müller",
      "position": "Secondary Striker",
      "jerseyNumber": 25,
      "dateOfBirth": "1989-09-13",
      "nationality": "Germany",
      "contractUntil": "2021-06-30",
      "marketValue": "75,000,000 €"
    },
    {
      "name": "Robert Lewandowski",
      "position": "Centre Forward",
      "jerseyNumber": 9,
      "dateOfBirth": "1988-08-21",
      "nationality": "Poland",
      "contractUntil": "2019-06-30",
      "marketValue": "75,000,000 €"
    },
    {
      "name": "Mats Hummels",
      "position": "Centre Back",
      "jerseyNumber": 5,
      "dateOfBirth": "1988-12-16",
      "nationality": "Germany",
      "contractUntil": "2021-06-30",
      "marketValue": "38,000,000 €"
    },
    {
      "name": "Renato Sanches",
      "position": "Central Midfield",
      "jerseyNumber": 35,
      "dateOfBirth": "1997-08-18",
      "nationality": "Portugal",
      "contractUntil": "2021-06-30",
      "marketValue": "30,000,000 €"
    },
    {
      "name": "Niklas Dorsch",
      "position": "Defensive Midfield",
      "jerseyNumber": 30,
      "dateOfBirth": "1998-01-15",
      "nationality": "Germany",
      "contractUntil": "2018-06-30",
      "marketValue": "200,000 €"
    },
    {
      "name": "Fabian Benko",
      "position": "Attacking Midfield",
      "jerseyNumber": 40,
      "dateOfBirth": "1998-06-05",
      "nationality": "Germany",
      "contractUntil": "2018-06-30",
      "marketValue": "250,000 €"
    },
    {
      "name": "Erdal Öztürk",
      "position": "Central Midfield",
      "jerseyNumber": 38,
      "dateOfBirth": "1996-02-07",
      "nationality": "Germany",
      "contractUntil": "2018-06-30",
      "marketValue": "75,000 €"
    }
  ]
}
  public fixtures:{
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/teams/5/fixtures"
    },
    "team": {
      "href": "http://api.football-data.org/v1/teams/5"
    }
  },
  "count": 46,
  "fixtures": [
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/153633"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/432"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/49"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-08-19T18:45:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "homeTeamName": "FC Carl Zeiss Jena",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 5
      },
      "odds": {
        "homeWin": 56,
        "draw": 15,
        "awayWin": 1.03
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152258"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/12"
        }
      },
      "date": "2016-08-26T18:30:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Werder Bremen",
      "result": {
        "goalsHomeTeam": 6,
        "goalsAwayTeam": 0
      },
      "odds": {
        "homeWin": 1.12,
        "draw": 8,
        "awayWin": 26
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152247"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/6"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-09-09T18:30:00Z",
      "status": "FINISHED",
      "matchday": 2,
      "homeTeamName": "FC Schalke 04",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 2
      },
      "odds": {
        "homeWin": 12,
        "draw": 6,
        "awayWin": 1.3
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155327"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/1104"
        }
      },
      "date": "2016-09-13T18:45:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "FC Rostov",
      "result": {
        "goalsHomeTeam": 5,
        "goalsAwayTeam": 0
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152233"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/31"
        }
      },
      "date": "2016-09-17T13:30:00Z",
      "status": "FINISHED",
      "matchday": 3,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "FC Ingolstadt 04",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 1
      },
      "odds": {
        "homeWin": 1.12,
        "draw": 8,
        "awayWin": 15
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152224"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/9"
        }
      },
      "date": "2016-09-21T18:00:00Z",
      "status": "FINISHED",
      "matchday": 4,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Hertha BSC",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0
      },
      "odds": {
        "homeWin": 1.14,
        "draw": 7.5,
        "awayWin": 17
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152218"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/7"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-09-24T13:30:00Z",
      "status": "FINISHED",
      "matchday": 5,
      "homeTeamName": "Hamburger SV",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1
      },
      "odds": {
        "homeWin": 17,
        "draw": 5.8,
        "awayWin": 1.22
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155251"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/78"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-09-28T18:45:00Z",
      "status": "FINISHED",
      "matchday": 2,
      "homeTeamName": "Club Atlético de Madrid",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152206"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/1"
        }
      },
      "date": "2016-10-01T13:30:00Z",
      "status": "FINISHED",
      "matchday": 6,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "1. FC Köln",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 1
      },
      "odds": {
        "homeWin": 1.16,
        "draw": 7,
        "awayWin": 17
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152199"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/19"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-10-15T13:30:00Z",
      "status": "FINISHED",
      "matchday": 7,
      "homeTeamName": "Eintracht Frankfurt",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 2
      },
      "odds": {
        "homeWin": 11,
        "draw": 5.5,
        "awayWin": 1.25
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155250"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/674"
        }
      },
      "date": "2016-10-19T18:45:00Z",
      "status": "FINISHED",
      "matchday": 3,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "PSV Eindhoven",
      "result": {
        "goalsHomeTeam": 4,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 1.2,
        "draw": 8,
        "awayWin": 15
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152188"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/18"
        }
      },
      "date": "2016-10-22T16:30:00Z",
      "status": "FINISHED",
      "matchday": 8,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Bor. Mönchengladbach",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 1.2,
        "draw": 8,
        "awayWin": 15
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155203"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/432"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/16"
        }
      },
      "date": "2016-10-26T18:45:00Z",
      "status": "FINISHED",
      "matchday": 2,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "FC Augsburg",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 1.07,
        "draw": 9.5,
        "awayWin": 15
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152178"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/16"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-10-29T13:30:00Z",
      "status": "FINISHED",
      "matchday": 9,
      "homeTeamName": "FC Augsburg",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155249"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/674"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-11-01T19:45:00Z",
      "status": "FINISHED",
      "matchday": 4,
      "homeTeamName": "PSV Eindhoven",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 8,
        "draw": 5,
        "awayWin": 1.4
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152170"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/2"
        }
      },
      "date": "2016-11-05T14:30:00Z",
      "status": "FINISHED",
      "matchday": 10,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "TSG 1899 Hoffenheim",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 1.15,
        "draw": 7.5,
        "awayWin": 21
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152162"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/4"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-11-19T17:30:00Z",
      "status": "FINISHED",
      "matchday": 11,
      "homeTeamName": "Borussia Dortmund",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155323"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/1104"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-11-23T17:00:00Z",
      "status": "FINISHED",
      "matchday": 5,
      "homeTeamName": "FC Rostov",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152151"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/3"
        }
      },
      "date": "2016-11-26T17:30:00Z",
      "status": "FINISHED",
      "matchday": 12,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Bayer Leverkusen",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 1.3,
        "draw": 6,
        "awayWin": 12
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152147"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/15"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-12-02T19:30:00Z",
      "status": "FINISHED",
      "matchday": 13,
      "homeTeamName": "1. FSV Mainz 05",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155247"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/78"
        }
      },
      "date": "2016-12-06T19:45:00Z",
      "status": "FINISHED",
      "matchday": 6,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Club Atlético de Madrid",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152133"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/11"
        }
      },
      "date": "2016-12-10T14:30:00Z",
      "status": "FINISHED",
      "matchday": 14,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "VfL Wolfsburg",
      "result": {
        "goalsHomeTeam": 5,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 1.14,
        "draw": 9,
        "awayWin": 26
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152126"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/55"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2016-12-18T14:30:00Z",
      "status": "FINISHED",
      "matchday": 15,
      "homeTeamName": "SV Darmstadt 98",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 26,
        "draw": 9,
        "awayWin": 1.11
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152115"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/721"
        }
      },
      "date": "2016-12-21T19:00:00Z",
      "status": "FINISHED",
      "matchday": 16,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Red Bull Leipzig",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 1.3,
        "draw": 5,
        "awayWin": 11
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152109"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/17"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-01-20T19:30:00Z",
      "status": "FINISHED",
      "matchday": 17,
      "homeTeamName": "SC Freiburg",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 17,
        "draw": 5.8,
        "awayWin": 1.22
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152104"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/12"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-01-28T14:30:00Z",
      "status": "FINISHED",
      "matchday": 18,
      "homeTeamName": "Werder Bremen",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2
        }
      },
      "odds": {
        "homeWin": 21,
        "draw": 7,
        "awayWin": 1.16
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152089"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/6"
        }
      },
      "date": "2017-02-04T14:30:00Z",
      "status": "FINISHED",
      "matchday": 19,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "FC Schalke 04",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 1.2,
        "draw": 6.5,
        "awayWin": 17
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155350"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/432"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/11"
        }
      },
      "date": "2017-02-07T19:45:00Z",
      "status": "FINISHED",
      "matchday": 3,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "VfL Wolfsburg",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152082"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/31"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-02-11T14:30:00Z",
      "status": "FINISHED",
      "matchday": 20,
      "homeTeamName": "FC Ingolstadt 04",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 15,
        "draw": 5,
        "awayWin": 1.25
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155342"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/57"
        }
      },
      "date": "2017-02-15T19:45:00Z",
      "status": "FINISHED",
      "matchday": 7,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Arsenal FC",
      "result": {
        "goalsHomeTeam": 5,
        "goalsAwayTeam": 1
      },
      "odds": {
        "homeWin": 1.5,
        "draw": 4.4,
        "awayWin": 7
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152075"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/9"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-02-18T14:30:00Z",
      "status": "FINISHED",
      "matchday": 21,
      "homeTeamName": "Hertha BSC",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": {
        "homeWin": 9,
        "draw": 4,
        "awayWin": 1.44
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152062"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/7"
        }
      },
      "date": "2017-02-25T14:30:00Z",
      "status": "TIMED",
      "matchday": 22,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Hamburger SV",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": {
        "homeWin": 1.16,
        "draw": 6.5,
        "awayWin": 23
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155356"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/432"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/6"
        }
      },
      "date": "2017-03-01T19:45:00Z",
      "status": "TIMED",
      "matchday": 4,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "FC Schalke 04",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152058"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/1"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-03-04T14:30:00Z",
      "status": "TIMED",
      "matchday": 23,
      "homeTeamName": "1. FC Köln",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": {
        "homeWin": 5.5,
        "draw": 4,
        "awayWin": 1.57
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/155337"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/440"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/57"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-03-07T19:45:00Z",
      "status": "TIMED",
      "matchday": 7,
      "homeTeamName": "Arsenal FC",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152044"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/19"
        }
      },
      "date": "2017-03-11T14:30:00Z",
      "status": "TIMED",
      "matchday": 24,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Eintracht Frankfurt",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152036"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/18"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-03-19T16:30:00Z",
      "status": "SCHEDULED",
      "matchday": 25,
      "homeTeamName": "Bor. Mönchengladbach",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152026"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/16"
        }
      },
      "date": "2017-04-01T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 26,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "FC Augsburg",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152020"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/2"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-04-04T18:00:00Z",
      "status": "SCHEDULED",
      "matchday": 27,
      "homeTeamName": "TSG 1899 Hoffenheim",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/152007"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/4"
        }
      },
      "date": "2017-04-08T16:30:00Z",
      "status": "SCHEDULED",
      "matchday": 28,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "Borussia Dortmund",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/151999"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/3"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-04-15T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 29,
      "homeTeamName": "Bayer Leverkusen",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/151989"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/15"
        }
      },
      "date": "2017-04-22T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 30,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "1. FSV Mainz 05",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/151988"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/11"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-04-29T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 31,
      "homeTeamName": "VfL Wolfsburg",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/151971"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/55"
        }
      },
      "date": "2017-05-06T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 32,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "SV Darmstadt 98",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/151967"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/721"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        }
      },
      "date": "2017-05-13T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 33,
      "homeTeamName": "Red Bull Leipzig",
      "awayTeamName": "FC Bayern München",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/151953"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/430"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/5"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/17"
        }
      },
      "date": "2017-05-20T13:30:00Z",
      "status": "SCHEDULED",
      "matchday": 34,
      "homeTeamName": "FC Bayern München",
      "awayTeamName": "SC Freiburg",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      },
      "odds": null
    }
  ]
}

  private sub: any;   
  
  private url: any;   
  

  constructor(
  	private serv: appService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.url = params['url'];                      
    });

  	// this.getplayers(this.url);
  	// this.getFixtures(this.url);

  }

  // getplayers(url) {
  //   this.serv.getPlayers(url)
  //                    .subscribe(
  //                      response => {this.players = response.players; console.log(this.players)}
  //                      );
  // }

  // getFixtures(url) {
  //   this.serv.getFixtures(url)
  //                    .subscribe(
  //                      response => {this.fixtures = response.fixtures; console.log(this.fixtures)}
  //                      );
  // }

}
