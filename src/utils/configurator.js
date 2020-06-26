import { squareColors } from './flopStatsData';

export const COLOR_TYPES = {
  active: "ACTIVE",
  inactive: "INACTIVE",
}
export const COLOR_1 = {
  id: squareColors.BLUE,
  type: COLOR_TYPES.active,
  value: '#1b62d3', 
  name: "Color1 active",
}; 
export const COLOR_1_INACTIVE = {
  id: squareColors.BLUE,
  type: COLOR_TYPES.inactive,
  value: '#bce6fb', 
  name: "Color1 inactive",
}; 

export const COLOR_2 = {
  id: squareColors.RED,
  type: COLOR_TYPES.active,
  value: "#e4221c",
  name: "Color2 active",
}; 
export const COLOR_2_INACTIVE = {
  id: squareColors.RED,
  type: COLOR_TYPES.inactive,
  value: "#f69d54",
  name: "Color2 inactive",
}; 

export const COLOR_3 = {
  id: squareColors.YELLOW,
  type: COLOR_TYPES.active,
  value: "#eebe2e",
  name: "Color3 active",
}; 
export const COLOR_3_INACTIVE = {
  id: squareColors.YELLOW,
  type: COLOR_TYPES.inactive,
  value: "#fef0a2",
  name: "Color3 inactive",
}; 

export const COLOR_4 = {
  id: squareColors.GREEN,
  type: COLOR_TYPES.active,
  value: "#1a7e15",
  name: "Color4 active",
}; 
export const COLOR_4_INACTIVE = {
  id: squareColors.GREEN,
  type: COLOR_TYPES.inactive,
  value: "#b9ef86",
  name: "Color4 inactive",
}; 

export const COLOR_5 = {
  id: squareColors.GRAY,
  type: COLOR_TYPES.active,
  value: "#434241",
  name: "Color5 active",
};
export const COLOR_5_INACTIVE = {
  id: squareColors.GRAY,
  type: COLOR_TYPES.inactive,
  value: "#dbdbd7",
  name: "Color5 inactive",
};

export const ALL_COLORS = [
  COLOR_1, COLOR_1_INACTIVE, 
  COLOR_2, COLOR_2_INACTIVE, 
  COLOR_3, COLOR_3_INACTIVE, 
  COLOR_4, COLOR_4_INACTIVE, 
  COLOR_5, COLOR_5_INACTIVE, 
];
