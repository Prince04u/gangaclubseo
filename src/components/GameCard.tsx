import { LucideIcon } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const GameCard = ({ title, description, icon: Icon, color }: GameCardProps) => (
  <div className="group card-shine rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-gold">
    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${color}`}>
      <Icon className="h-7 w-7" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default GameCard;
