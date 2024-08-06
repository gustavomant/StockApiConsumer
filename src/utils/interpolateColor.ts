const interpolateColor = (value: number): string => {
    if (value < -5) return "#d73027";
    if (value < 0) return "#fdae61";
    if (value < 1) return "#F8FCEA";
    if (value < 2) return "#e8f5b9";
    if (value < 3) return "#a7ef8b";
    return "#8BEFA1";
};

export default interpolateColor;