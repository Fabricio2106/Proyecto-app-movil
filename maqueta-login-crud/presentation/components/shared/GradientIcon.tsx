import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { LucideIcon } from "lucide-react-native";

interface Props {
  icon: LucideIcon;
  size?: number;
  colors?: [string, string];
}

export const GradientIcon = ({
  icon: Icon,
  size = 40,
  colors = ["#818cf8", "#4f46e5"],
}: Props) => {
  return (
    <MaskedView
      maskElement={<Icon size={size} color="black" strokeWidth={2} />}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Icon size={size} color="transparent" strokeWidth={2} />
      </LinearGradient>
    </MaskedView>
  );
};
