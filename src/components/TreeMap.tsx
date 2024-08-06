import React from "react";
import StockData from "../domain/StockData";
import TreeMapNode from "./Node";
import StockNode from "../domain/StockNode";

interface TreeMapProps {
    data: StockData[];
    width: number;
    height: number;
}

const TreeMap: React.FC<TreeMapProps> = ({ data, width, height }) => {

    const layoutTreeMap = (data: StockData[], x: number, y: number, width: number, height: number): StockNode[] => {
        const nodes: StockNode[] = [];
        const numRows = Math.ceil(Math.sqrt(data.length));
        const rowHeight = height / numRows;

        let currentY = y;
        let remainingWidth = width;

        for (let i = 0; i < numRows; i++) {
            const rowStocks = data.slice(i * Math.ceil(data.length / numRows), (i + 1) * Math.ceil(data.length / numRows));
            const rowVolume = rowStocks.reduce((sum, stock) => sum + stock.volume, 0);

            let currentX = x;
            rowStocks.forEach(stock => {
                const ratio = stock.volume / rowVolume;
                const nodeWidth = remainingWidth * ratio;
                const nodeHeight = rowHeight;

                nodes.push({ stock, x: currentX, y: currentY, width: nodeWidth, height: nodeHeight });
                currentX += nodeWidth;
            });

            currentY += rowHeight;
        }

        return nodes;
    };

    const nodes = layoutTreeMap(data, 0, 0, width, height);

    return (
        <svg width={width} height={height} style={{ border: "1px solid black" }}>
            {nodes.map((node, index) => (
                <TreeMapNode index={index} node={node} />
            ))}
        </svg>
    );
};

export default TreeMap;
