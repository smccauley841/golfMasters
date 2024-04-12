export interface PlayerPick {
  player: string;
  Pick1: PickDetails;
  Pick2: PickDetails;
  Pick3: PickDetails;
  Pick4: PickDetails;
  Pick5: PickDetails;
}

export interface PickDetails {
  name: string;
  Day1Score: number;
  Day2Score: number;
  Day3Score: number;
  Day4Score: number;
  MissedCut: boolean;
}
