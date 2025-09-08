"use client";

import {
    Badge,
} from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
    Activity,
    BarChart3,
    Brain,
    Check,
    Clock,
    Coins,
    Crown,
    Globe,
    HandCoins,
    Lock,
    Minus,
    Rocket,
    ShieldCheck,
    Target,
    Trophy,
    Users,
    X,
} from "lucide-react";
import { useState } from "react";
import HeaderDesktopFull from "@/components/header/header-desktop";
import FooterFull from "@/components/footer/footer-full";
import VideoBox from "@/components/footer/video_box";
import { useInterface } from "@/components/context/interface-context";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import indexBanner from "../../public/images/nec_nft/nec_bg.jpg";
import { DATA_EN } from "./locale/data_en";
import { DATA_FR } from "./locale/data_fr";
import { DATA_VI } from "./locale/data_vi";

function SectionHeader({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            {kicker ? (
                <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                    {kicker}
                </div>
            ) : null}
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
            {desc ? <p className="mt-2 text-base sm:text-lg text-muted-foreground">{desc}</p> : null}
        </div>
    );
}

export default function PioneerLandingPage() {
    const { i18n } = useTranslation();
    const lang = (i18n?.language || "vi").split("-")[0] as "vi" | "en" | "fr";
    const data = lang === "en" ? DATA_EN : lang === "fr" ? DATA_FR : DATA_VI;
    const { hero, cta, sections } = data;
    const [modalActive, setModalActive] = useState(false);
    const { isDesktop } = useInterface();

    return (
        <div>
            <HeaderDesktopFull changeAt={190} />
            <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
            {isDesktop && (
                <div className="w-full h-[260px] relative z-[1]">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <Image src={indexBanner} alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
                </div>
            )}
            <div className="w-full bg-white flex flex-col gap-0 overflow-visible max-md:pt-20 max-md:pb-10 lumir-landing">
                <style jsx>{`
          :global(.lumir-landing .text-muted-foreground) {
            color: hsl(var(--foreground) / 0.82) !important;
          }
          :global(.lumir-landing p) {
            line-height: 1.7;
          }
          /* Force all text sizes to 17px within lumir-landing */
          :global(.lumir-landing) { font-size: 17px; }
          /* Keep headings/titles larger; only pin smaller text classes to 17px */
          :global(.lumir-landing .text-xs),
          :global(.lumir-landing .text-sm),
          :global(.lumir-landing .text-base) {
            font-size: 17px !important;
            line-height: 1.7 !important;
          }
        `}</style>
                <main className="mx-auto w-[90%] md:max-w-6xl px-0 sm:px-4 py-8 sm:py-14">
                    {/* HERO */}
                    <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
                        <div className="space-y-6 lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                {hero.badges.map((b) => (
                                    <Badge key={b} variant="secondary" className="uppercase tracking-wide">
                                        {b}
                                    </Badge>
                                ))}
                            </div>
                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                                {hero.title}
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground">{hero.subtitle}</p>
                            <p className="text-sm sm:text-base text-muted-foreground">{hero.blurb}</p>
                            <div className="flex flex-wrap gap-3 pt-1">
                                <Button asChild size="lg">
                                    <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
                                        {hero.primary}
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <a href={cta.secondaryHref} target="_blank" rel="noopener noreferrer">
                                        {hero.secondary}
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <Card className="border-dashed">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-base">
                                        <Rocket className="h-5 w-5" /> Pioneer NFT
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm text-muted-foreground">
                                    <p>{sections.heroCard.intro}</p>
                                    <div className="flex items-center gap-2 text-xs">
                                        <ShieldCheck className="h-4 w-4" />
                                        {sections.heroCard.items[0]}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <Users className="h-4 w-4" /> {sections.heroCard.items[1]}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <Brain className="h-4 w-4" /> {sections.heroCard.items[2]}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* STORY */}
                    <section className="space-y-4">
                        <SectionHeader title={sections.story.title} />
                        <div className="grid gap-6 lg:grid-cols-2">
                            <Card>
                                <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
                                    {sections.story.parts.slice(0, 2).map((t, i) => (
                                        <p key={i}>{t}</p>
                                    ))}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
                                    {sections.story.parts.slice(2).map((t, i) => (
                                        <p key={i}>{t}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* COMPARE TABLE */}
                    <section className="space-y-6">
                        <SectionHeader title={sections.compare.title} />
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-1/2">{sections.compare.left}</TableHead>
                                        <TableHead className="w-1/2">{sections.compare.right}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sections.compare.rows.map(([l, r], i) => (
                                        <TableRow key={i}>
                                            <TableCell className="align-top">{l}</TableCell>
                                            <TableCell className="align-top">{r}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <Alert>
                            <Target className="h-4 w-4" />
                            <AlertTitle className="font-semibold">Pioneer NFT</AlertTitle>
                            <AlertDescription>
                                {sections.compareAlert.desc}
                            </AlertDescription>
                        </Alert>
                    </section>

                    <Separator className="my-10" />

                    {/* PROBLEM & SOLUTION */}
                    <section className="space-y-6">
                        <SectionHeader title={sections.problem.title} />
                        <div className="grid gap-6 lg:grid-cols-3">
                            {sections.problem.bullets.map((b, i) => (
                                <Card key={i}>
                                    <CardContent className="pt-6 text-sm text-muted-foreground">{b}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* BENEFITS */}
                    <section className="space-y-8">
                        <SectionHeader title={sections.benefits.title} />
                        <div className="grid gap-6 lg:grid-cols-2">
                            {[sections.benefits.pro, sections.benefits.premium].map((pkg) => (
                                <Card key={pkg.title}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-xl">
                                            <Crown className="h-5 w-5" /> {pkg.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-sm text-muted-foreground">{pkg.intro}</p>
                                        <div className="rounded-lg bg-muted/40 p-3 text-sm sm:text-xs font-medium">
                                            {pkg.value}
                                        </div>
                                        <ul className="list-disc space-y-2 pl-5 text-base sm:text-sm text-muted-foreground">
                                            {pkg.items.map((it) => (
                                                <li key={it}>{it}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-base">
                                        <Users className="h-5 w-5" /> {sections.benefits.team.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc space-y-2 pl-5 text-base sm:text-sm text-muted-foreground">
                                        {sections.benefits.team.items.map((it) => (
                                            <li key={it}>{it}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-base">
                                        <Trophy className="h-5 w-5" /> {sections.benefits.intangible.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-base sm:text-sm">
                                        {sections.benefits.intangible.items.map((it) => (
                                            <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Check className="h-4 w-4" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* LOYALTY */}
                    <section className="space-y-6">
                        <SectionHeader title={sections.loyalty.title} />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {sections.loyalty.items.map((it) => (
                                <Card key={it}>
                                    <CardContent className="pt-6 text-sm text-muted-foreground">{it}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* VALUE SIMULATION */}
                    <section className="space-y-6">
                        <SectionHeader title={sections.valueSim.title} />
                        <div className="grid gap-6 lg:grid-cols-3">
                            {sections.valueSim.scenarios.map((sc) => (
                                <Card key={sc.title}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-base">
                                            <Coins className="h-5 w-5" /> {sc.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                                        {sc.lines.map((l) => (
                                            <p key={l}>{l}</p>
                                        ))}
                                        {"highlight" in sc && sc.highlight ? (
                                            <div className="rounded-lg bg-muted/40 p-2 text-xs font-semibold text-foreground">
                                                {sc.highlight}
                                            </div>
                                        ) : null}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* GROWTH SIM */}
                    <section className="space-y-4">
                        <SectionHeader title={sections.growthSim.title} />
                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            {sections.growthSim.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                        <Alert>
                            <Activity className="h-4 w-4" />
                            <AlertTitle className="font-semibold">{sections.growthSim.noticeTitle}</AlertTitle>
                            <AlertDescription>{sections.growthSim.note}</AlertDescription>
                        </Alert>
                    </section>

                    <Separator className="my-10" />

                    {/* PRICING COMPARE */}
                    <section className="space-y-6">
                        <SectionHeader title={sections.pricingCompare.title} />
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {sections.pricingCompare.header.map((h) => (
                                            <TableHead key={h}>{h}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sections.pricingCompare.rows.map((row, i) => (
                                        <TableRow key={i}>
                                            {row.map((cell, j) => (
                                                <TableCell key={j} className="align-top">
                                                    {cell === "✔️" ? (
                                                        <Check className="h-4 w-4" />
                                                    ) : cell === "❌" ? (
                                                        <X className="h-4 w-4" />
                                                    ) : cell === "-" ? (
                                                        <Minus className="h-4 w-4" />
                                                    ) : (
                                                        cell
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* VALUE PROTECTION */}
                    <section className="space-y-6">
                        <SectionHeader title={sections.valueProtection.title} />
                        <div className="grid gap-6 lg:grid-cols-3">
                            {sections.valueProtection.blocks.map((b) => (
                                <Card key={b.title}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-base">
                                            <b.icon className="h-5 w-5" /> {b.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground">{b.text}</CardContent>
                                </Card>
                            ))}
                        </div>
                        <Alert>
                            <ShieldCheck className="h-4 w-4" />
                            <AlertTitle className="font-semibold">{sections.valueProtection.alert.title}</AlertTitle>
                            <AlertDescription>
                                {sections.valueProtection.alert.desc}
                            </AlertDescription>
                        </Alert>
                    </section>

                    <Separator className="my-10" />

                    {/* HEADLINE CTA */}
                    <section className="rounded-2xl border bg-card p-8 text-center shadow-sm">
                        {/* <div className="text-xs font-semibold tracking-widest text-muted-foreground">
          {sections.headlineCTA.kicker}
        </div> */}
                        <h3 className="mt-2 text-2xl font-bold">
                            {sections.headlineCTA.title}
                        </h3>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            {sections.headlineCTA.subtitle}
                        </p>
                        <div className="mt-6">
                            <Button asChild size="lg">
                                <a href={cta.secondaryHref} target="_blank" rel="noopener noreferrer">
                                    {sections.headlineCTA.cta}
                                </a>
                            </Button>
                        </div>
                    </section>

                    <Separator className="my-10" />

                    {/* AUDIENCE & URGENCY */}
                    <section className="grid gap-6 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-base">
                                    <Users className="h-5 w-5" /> {sections.audience.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                    {sections.audience.items.map((it) => (
                                        <li key={it}>{it}</li>
                                    ))}
                                </ul>
                                <Alert variant="default" className="mt-4">
                                    <BarChart3 className="h-4 w-4" />
                                    <AlertDescription className="text-xs text-muted-foreground">
                                        {sections.audience.foot}
                                    </AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-base">
                                    <Clock className="h-5 w-5" /> {sections.urgency.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid gap-2 text-sm text-muted-foreground">
                                    {sections.urgency.items.map((it) => (
                                        <li key={it} className="flex items-center gap-2">
                                            <Rocket className="h-4 w-4" /> {it}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Button asChild>
                                        <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
                                            {sections.urgency.cta}
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <Separator className="my-10" />

                    {/* PROCESS & TRUST */}
                    <section className="grid gap-6 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-base">
                                    <Lock className="h-5 w-5" /> {sections.process.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ol className="space-y-2 text-sm text-muted-foreground">
                                    {sections.process.steps.map((s, i) => (
                                        <li key={s} className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold">
                                                {i + 1}
                                            </span>
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-base">
                                    <ShieldCheck className="h-5 w-5" /> {sections.trust.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid gap-2 text-sm text-muted-foreground">
                                    {sections.trust.items.map((it) => (
                                        <li key={it} className="flex items-center gap-2">
                                            <HandCoins className="h-4 w-4" /> {it}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <Separator className="my-10" />

                    {/* FAQ */}
                    <section className="space-y-4">
                        <SectionHeader title={sections.faq.title} />
                        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
                            {sections.faq.items.map((f, i) => (
                                <AccordionItem key={i} value={`faq-${i}`}>
                                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                                    <AccordionContent className="text-sm text-muted-foreground">
                                        {f.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* FOOTER CTA */}
                    <footer className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
                        <p dangerouslySetInnerHTML={{ __html: sections.footerCta.text ?? "" }} />
                        <div className="mt-4">
                            <Button asChild size="lg">
                                <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
                                    {sections.footerCta.button}
                                </a>
                            </Button>
                        </div>
                    </footer>
                </main>
            </div>
            <FooterFull fixed={false} setModalActive={setModalActive} modalActive={modalActive} />
        </div>
    );
}
