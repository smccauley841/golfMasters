interface Outcome {
    name: string;
    price: number;
  }
  
  interface Market {
    key: string;
    last_update: string;
    outcomes: Outcome[];
  }
  
  interface Bookmaker {
    key: string;
    title: string;
    last_update: string;
    markets: Market[];
  }
  
  interface ResponseItem {
    id: string;
    has_outrights: boolean;
    sport_key: string;
    sport_title: string;
    commence_time: string;
    home_team: null;
    away_team: null;
    bookmakers: Bookmaker[];
  }