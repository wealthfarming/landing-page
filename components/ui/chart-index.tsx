import { XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useState } from 'react';
import { Apiget } from "@/lib/api/get"
import { API_URL } from "@/lib/config";
import { useEffect, useMemo } from 'react';
interface ChartIndexProps {
    chartConfig?: any
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
}: ChartIndexProps) {

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
                        <li className={`me ml-4`}>
                            <p className="inline text-[var(--primary-green)]">{t('BEQ Preview Indexes ')}</p>
                            {new Intl.NumberFormat("en-US", {
                                notation: "compact",
                                compactDisplay: "short",
                                maximumFractionDigits: 2,
                            }).format(payload[0].payload['review-index'])}
                        </li>
                        <li className="me ml-4">
                            <p className="inline text-[var(--primary-error)] !text-[--text-medium]">
                                {t('Total NAV ')}
                            </p>
                            {new Intl.NumberFormat("en-US", {
                                notation: "compact",
                                compactDisplay: "short",
                                maximumFractionDigits: 2,
                            }).format(payload[0].payload.sp500)}</li>
                    </ul>
                </div>
            );
        }
        return null;
    };

    const { isDesktop, isTablet } = useInterface();
    const { t, i18n } = useTranslation();

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const getData = async () => {
            const get_data = await Apiget(
                API_URL + '/api/data-index',
                {
                    sort: 'date',
                    limit: 0,
                }
            );
            const data_tmp = get_data.map((item: any) => ({
                date: item.date ?? null,
                "review-index": item["review-index"] ?? null,
                sp500: item.sp500 ?? null,
            }));

            console.log(data_tmp)

            setData(data_tmp);
        };
        getData();
    }, []);

    function getFixedTicks(data: any[], min_tick = 5, max_tick = 10) {
        if (!data || data.length === 0) return [];

        let step = 1;
        let step_tmp = 1;
        let count = data.length;

        let step_array = [];


        for (let i = max_tick; i > 1; i--) {
            step_tmp = (data.length - i) / (i - 1) + 1;
            if (Number.isInteger(step_tmp) && i >= min_tick && step_tmp > 0) {
                step_array[i] = step_tmp;
            }
        }


        if (step_array.length == 0) {
            let min_tick_last = max_tick;
            let min_tick_last_tmp = max_tick;
            let max_step_tmp = 1;
            for (let i = max_tick; i > 1; i--) {
                step_tmp = Math.floor((data.length - i) / (i - 1)) + 1;
                if (i >= min_tick && step_tmp > 0) {
                    let total_ticks = Math.floor((data.length - 1) / step_tmp) + 1
                    min_tick_last_tmp = Math.abs(data.length - (total_ticks - 2) * step_tmp - 1 - step_tmp);
                    if (min_tick_last_tmp < min_tick_last || (min_tick_last_tmp == min_tick_last && step_tmp > max_step_tmp)) {
                        min_tick_last = min_tick_last_tmp;
                        max_step_tmp = step_tmp;


                        step_array = [];
                        step_array[total_ticks] = step_tmp;
                    }
                }
            }
        }

        const keys = Object.keys(step_array)
            .map(Number)
            .sort((a, b) => b - a);

        for (let i of keys) {
            if (i <= max_tick) {
                step = step_array[i];
                count = i;
                break;
            }
        }

        const ticks: string[] = [];
        for (let i = 0; i < count; i++) {
            let index = i * step;
            if (index >= data.length) break;
            ticks.push(data[index].date);
        }
        if (ticks[ticks.length - 1] !== data[data.length - 1].date) {
            ticks[ticks.length] = data[data.length - 1].date;
        }

        return ticks;
    }

    const ticks: string[] = useMemo(() => {
        const initial = isDesktop || isTablet
            ? getFixedTicks(data, 5, 10)
            : getFixedTicks(data, 3, 4);

        const raw = [...initial];
        if (raw.length >= 2) {
            raw.splice(raw.length - 2, 1);
        }

        const seen = new Set<string>();
        const unique: string[] = [];
        raw.forEach(val => {
            const d = new Date(val);
            const key = `${d.getMonth()}-${d.getFullYear()}`;
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(val);
            }
        });

        const last = raw[raw.length - 1];
        if (last && unique[unique.length - 1] !== last) {
            unique.push(last);
        }

        return unique;
    }, [data, isDesktop, isTablet]);


    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) return null;

    return (
        <div className="relative h-full w-full max-h-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: -5,
                            right: 31,
                            bottom: 10,
                        }}
                    >
                        <Area
                            dataKey="review-index"
                            type="natural"
                            fill="transparent"
                            fillOpacity={1.0}
                            strokeWidth={2}
                            stroke={"var(--primary-green)"}
                        />

                        <Area
                            dataKey="sp500"
                            type="natural"
                            fill="transparent"
                            fillOpacity={1.0}
                            strokeWidth={2}
                            stroke={"var(--primary-error)"}
                        />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={16}
                            minTickGap={5}
                            interval="preserveStartEnd"
                            ticks={ticks}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return `${date.toLocaleString("en-EN", { month: "short" })}-${date.getFullYear()}`;
                            }}
                        />
                        <YAxis
                            tickFormatter={(value) => `${Math.round(value)}`}
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