import {
  ArrowRight,
  BarChart3,
  Bot,
  Calculator,
  CheckCircle2,
  Circle,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  Filter,
  GitBranch,
  Globe2,
  Layers,
  Network,
  QrCode,
  Search,
  Send,
  Server,
  Sparkles,
  Table2,
  Target,
  Upload,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
const icones: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "bar-chart-3": BarChart3,
  bot: Bot,
  calculator: Calculator,
  "check-circle": CheckCircle2,
  circle: Circle,
  cloud: Cloud,
  code: Code2,
  database: Database,
  "file-check": FileCheck2,
  filter: Filter,
  "git-branch": GitBranch,
  globe: Globe2,
  layers: Layers,
  network: Network,
  "qr-code": QrCode,
  search: Search,
  send: Send,
  server: Server,
  sparkles: Sparkles,
  table: Table2,
  target: Target,
  upload: Upload,
  users: Users,
  workflow: Workflow,
};
export function Icon({
  nome,
  size = 20,
  className,
}: {
  nome: string;
  size?: number;
  className?: string;
}) {
  const Component = icones[nome] ?? Code2;
  return (
    <Component
      size={size}
      className={className}
      aria-hidden="true"
      strokeWidth={1.5}
    />
  );
}
