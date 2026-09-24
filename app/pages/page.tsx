"use client"
import { useContext } from "react";
import { Context } from "../Context/ContextProvider";
import { iBook } from "../Types/Book.type";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
} from 'recharts';
import { notFound } from "next/navigation";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
};

const page = () => {
    const { read } = useContext(Context) as { read: iBook[] };

    // const data =  [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     }
    // ];

    const data = read.map((r , idx)=>{
        return{
            name: r.bookName,
            uv: r.totalPages,
            pv: idx+1,
            amt: idx+1,
        }
    })
    if(read.length===0){
        return <h3 className="min-h-screen flex justify-center items-center font-bold text-7xl">ReadList Is Empty</h3>
    }

    return (
        <div className="flex flex-col justify-center items-center m-20">
            <BarChart
                style={{ width: '100%', maxWidth: '900px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey="uv" shape={TriangleBar} activeBar>
                    <LabelList content={CustomColorLabel} position="top" />
                </Bar>
            </BarChart>
        </div>
    );
};

export default page;