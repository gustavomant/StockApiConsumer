import StockNode from "../domain/StockNode";
import interpolateColor from "../utils/interpolateColor";
import { useNavigate } from "react-router-dom";

export interface NodeProps {
    index: number;
    node: StockNode,
}

const Node = ({index, node} : NodeProps) => {
    const navigate = useNavigate();

    return (
        <g
        onClick={() => navigate(`/stock/${node.stock.symbol}`)}
        key={index}
        transform={`translate(${node.x}, ${node.y})`}
        style={{cursor: "pointer"}}
        >
            <rect width={node.width} height={node.height} fill={interpolateColor(node.stock.percent_change)} />
            <text x={5} y={20} style={{ fontSize: "12px", fill: "black" }}>
                {node.stock.name}
            </text>
            <text x={5} y={40} style={{ fontSize: "10px", fill: "black" }}>
                Volume: {node.stock.volume}
            </text>
            <text x={5} y={60} style={{ fontSize: "10px", fill: "black" }}>
                Profit: {node.stock.percent_change}
            </text>
        </g>
    )
}

export default Node;