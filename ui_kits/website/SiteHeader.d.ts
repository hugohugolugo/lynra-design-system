export interface SiteHeaderProps {
  active: string;
  onNav: (section: string) => void;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
