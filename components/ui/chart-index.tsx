import { XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useTranslation } from "react-i18next";

interface ChartIndexProps {
    chartConfig?: any
    chartData?: any[]
}

export default function ChartIndex({
    chartConfig = {
        nav: {
            label: "Nav",
            icon: undefined,
            theme: {
                light: "#008000",
                dark: "#008000",
            },
        },
    },
    chartData = [
        { timestamp: "T1", NFTPrice: 120, totalAsset: 10000, benchmarkPrice: 45 },
        { timestamp: "T2", NFTPrice: 130, totalAsset: 10500, benchmarkPrice: 130 },
        { timestamp: "T3", NFTPrice: 115, totalAsset: 10200, benchmarkPrice: 195 },
        { timestamp: "T4", NFTPrice: 140, totalAsset: 10800, benchmarkPrice: 140 },
        { timestamp: "T5", NFTPrice: 160, totalAsset: 11000, benchmarkPrice: 115 },
        { timestamp: "T6", NFTPrice: 150, totalAsset: 10900, benchmarkPrice: 150 },
        { timestamp: "T7", NFTPrice: 170, totalAsset: 11500, benchmarkPrice: 180 },
        { timestamp: "T8", NFTPrice: 180, totalAsset: 11800, benchmarkPrice: 160 },
        { timestamp: "T9", NFTPrice: 175, totalAsset: 11650, benchmarkPrice: 165 },
        { timestamp: "T10", NFTPrice: 185, totalAsset: 12000, benchmarkPrice: 170 },
        { timestamp: "T11", NFTPrice: 190, totalAsset: 12200, benchmarkPrice: 175 },
        { timestamp: "T12", NFTPrice: 200, totalAsset: 12500, benchmarkPrice: 180 },
    ],
}: ChartIndexProps) {
    const { t } = useTranslation();

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[var(--base-bg)] shadow-md rounded-lg p-4" style={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                }}>
                    <ul className="list-disc">
                        <li className={`me text-[var(--primary-green)] ml-4`}>{t('BEQ Preview Indexes')}</li>
                        <li className="me ml-4"><p className="inline  !text-[--text-medium]">{t('Total NAV')}</p> {new Intl.NumberFormat("en-US", {
                            notation: "compact",
                            compactDisplay: "short",
                            maximumFractionDigits: 2,
                        }).format(payload[0].payload.totalAsset)} USDC</li>
                    </ul>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="relative h-full w-full max-h-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -5,
                            right: 31,
                            bottom: 10,
                        }}
                    >
                        <Area
                            dataKey="NFTPrice"
                            type="natural"
                            fill="transparent"
                            fillOpacity={1.0}
                            strokeWidth={2}
                            stroke={"var(--primary-green)"}
                        />

                        <Area
                            dataKey="benchmarkPrice"
                            type="natural"
                            fill="transparent"
                            fillOpacity={1.0}
                            strokeWidth={2}
                            stroke={"var(--primary-error)"}
                        />
                        <XAxis
                            dataKey="timestamp"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={16}
                            minTickGap={5}
                            interval="preserveStartEnd"
                        />
                        <YAxis
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={16}
                            allowDataOverflow={true}
                        />
                        <CartesianGrid vertical={false} stroke="#808080" opacity={0.2} />
                        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3", strokeWidth: 1 }} />
                    </AreaChart>
                </ChartContainer>
            </ResponsiveContainer>
        </div>
    )
}