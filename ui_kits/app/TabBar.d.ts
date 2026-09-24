export interface TabBarProps {
  active: string;
  onChange: (id: string) => void;
}
export function TabBar(props: TabBarProps): JSX.Element;
