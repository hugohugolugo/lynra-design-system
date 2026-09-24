export interface VillageCardProps {
  name: string;
  location: string;
  status: string;
  rooms: number;
  accent: string;
}
export function VillageCard(props: VillageCardProps): JSX.Element;
