import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export interface SkillData {
  id: string;
  name: string;
}
