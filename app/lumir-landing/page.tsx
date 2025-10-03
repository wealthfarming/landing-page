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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Activity,
    BarChart3,
    Brain,
    Check,
    Clock,
    Coins,
    Crown,
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
import FooterFull from "@/components/footer/footer-full";
import VideoBox from "@/components/footer/video_box";
import { useInterface } from "@/components/context/interface-context";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DATA_EN } from "./locale/data_en";
import { DATA_FR } from "./locale/data_fr";
import { DATA_VI } from "./locale/data_vi";
import HeadderDesktopFull from "@/components/header/header-desktop";

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

function PioneerTab() {
    const { i18n } = useTranslation();
    const lang = (i18n?.language || "vi").split("-")[0] as "vi" | "en" | "fr";
    const data = lang === "en" ? DATA_EN : lang === "fr" ? DATA_FR : DATA_VI;
    const { hero, cta, sections } = data;
    const [modalActive, setModalActive] = useState(false);
    const { isDesktop } = useInterface();

    return (
        <div>
            <VideoBox modalActive={modalActive} setModalActive={setModalActive} />


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

                <main className="mx-auto w-[100%] md:max-w-6xl px-0 sm:px-4 py-8 sm:py-14">
                    {/* HERO */}
                    <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
                        <div className="space-y-6 lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                {hero.badges.map((b: string) => (
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
                                    {sections.story.parts.slice(0, 2).map((t: string, i: number) => (
                                        <p key={i}>{t}</p>
                                    ))}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
                                    {sections.story.parts.slice(2).map((t: string, i: number) => (
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
                                    {sections.compare.rows.map((row: string[], i: number) => {
                                        const [l, r] = row as [string, string];
                                        return (
                                            <TableRow key={i}>
                                                <TableCell className="align-top">{l}</TableCell>
                                                <TableCell className="align-top">{r}</TableCell>
                                            </TableRow>
                                        );
                                    })}
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
                            {sections.problem.bullets.map((b: string, i: number) => (
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
                        <div>
                            <Card>
                                <CardContent className="pt-6 space-y-8">
                                    {[sections.benefits.pro].map((pkg: any) => (
                                        <div key={pkg.title} className="space-y-3">
                                            <div className="flex items-center gap-2 text-xl font-semibold">
                                                <Crown className="h-5 w-5" /> {pkg.title}
                                            </div>
                                            <p className="text-sm text-muted-foreground">{pkg.intro}</p>
                                            <ul className="list-disc space-y-2 pl-5 text-base sm:text-sm text-muted-foreground">
                                                {pkg.items.map((it: string) => (
                                                    <li key={it}>{it}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
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
                                        {sections.benefits.team.items.map((it: string) => (
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
                                        {sections.benefits.intangible.items.map((it: string) => (
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
                            {sections.loyalty.items.map((it: string) => (
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
                            {sections.valueSim.scenarios.map((sc: any) => (
                                <Card key={sc.title}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-base">
                                            <Coins className="h-5 w-5" /> {sc.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                                        {sc.lines.map((l: string) => (
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
                            {sections.growthSim.points.map((p: string) => (
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
                                        {sections.pricingCompare.header.map((h: string) => (
                                            <TableHead key={h}>{h}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sections.pricingCompare.rows.map((row: string[], i: number) => (
                                        <TableRow key={i}>
                                            {row.map((cell: string, j: number) => (
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
                            {sections.valueProtection.blocks.map((b: any) => (
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
                                    {sections.audience.items.map((it: string) => (
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
                                    {sections.urgency.items.map((it: string) => (
                                        <li key={it} className="flex items-center gap-2">
                                            <Rocket className="h-4 w-4" /> {it}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Button asChild>
                                        <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
                                            {(sections.urgency as any).cta}
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
                                    {sections.process.steps.map((s: string, i: number) => (
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
                                    {sections.trust.items.map((it: string) => (
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
                            {sections.faq.items.map((f: { q: string; a: string }, i: number) => (
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
        </div>
    );
}

function NFT13WTab() {
    const { i18n } = useTranslation();
    const lang = (i18n?.language || "vi").split("-")[0] as "vi" | "en" | "fr";

    const CONTENT_13W = {
        en: {
            hero: {
                title: "13W Challenge Council — Member NFT",
                subtitle:
                    "The entry NFT for the first 100 pioneer traders. Discipline • Transparency • Legacy.",
                badges: ["100 Supply", "500 USDC / NFT", "Voting & Revenue Share"],
                cta: { primary: "Get Whitelisted", secondary: "Read Council Handbook" },
            },
            mission: {
                title: "Mission",
                points: [
                    "Build a legacy of discipline and sustainable trading.",
                    "Ensure transparency: contributions & revenue recorded on-chain.",
                    "Create a millionaire-trader community led by 100 pioneers.",
                ],
            },
            core: {
                title: "Core Values",
                items: [
                    ["Discipline", "System over luck; consistency over emotions."],
                    ["Transparency", "On-chain rewards/penalties & revenue sharing."],
                    ["Legacy", "The first 100 create a model for the next generations."],
                ],
            },
            structure: {
                title: "Council Structure",
                tiers: [
                    {
                        name: "Council Core (10)",
                        bullets: [
                            "Strategic leadership & priority voting on key changes.",
                            "Elected from the 100 via Contribution Scorecard.",
                        ],
                    },
                    {
                        name: "Council Members (100)",
                        bullets: [
                            "Pioneer representatives with reporting & consistency.",
                            "Eligible for revenue share & voting.",
                        ],
                    },
                    {
                        name: "Community Representatives",
                        bullets: [
                            "Mentors for batches #101+; recognized via community score.",
                        ],
                    },
                ],
            },
            utilities: {
                title: "Rights & Utilities",
                items: [
                    [
                        "Gateway & Status",
                        "Only entry ticket to the Council (first 100); founding member status.",
                    ],
                    [
                        "On‑chain Revenue Share",
                        "10% of quarterly Subscription Fees (from #101+) shared by Contribution Score.",
                    ],
                    [
                        "Voting & Governance",
                        "Vote on reward/penalty rules, new batches, community funds.",
                    ],
                ],
            },
            performance: {
                title: "Performance Share Mechanism",
                rows: [
                    ["Performance Fee", "Trader keeps 80%; LUMIR receives 20% (operations & coaching)."],
                    [
                        "Revenue Sharing",
                        "10% of Challenge Subscription Fees (from #101+) → NFT holders, weighted by Contribution Score.",
                    ],
                ],
                score: {
                    title: "Contribution Scorecard (CS)",
                    header: ["Component", "Weight", "Measurement"],
                    rows: [
                        ["Performance", "40%", "%PnL avg / quarter"],
                        ["Discipline (TBI)", "30%", "Consistency Score from AI coaching"],
                        ["Community", "20%", "Verified mentoring hours & shared contributions"],
                        ["Longevity", "10%", "Weeks of consistent participation"],
                    ],
                    formula: "CS = 0.4×Performance + 0.3×Discipline + 0.2×Community + 0.1×Longevity",
                },
            },
            roadmap: {
                title: "3‑Tier NFT Roadmap",
                header: ["Tier", "Supply", "Price", "Role"],
                rows: [
                    ["13W Challenge — Council", "100", "500 USDC", "Founding traders; revenue share & voting"],
                    ["Pioneer NFT — IB Leaders", "30", "10,000 USDC", "Regional distribution & community growth"],
                    ["Titan NFT — Strategic Partners", "30", "50,000 USDC", "Country/region operations & global governance"],
                ],
            },
        },
        fr: {
            hero: {
                title: "NFT Membre — 13W Challenge Council",
                subtitle:
                    "NFT d’accès pour les 100 premiers traders pionniers. Discipline • Transparence • Héritage.",
                badges: ["Limité à 100", "500 USDC / NFT", "Vote & Partage de revenus"],
                cta: { primary: "S’inscrire à la whitelist", secondary: "Lire le Guide du Council" },
            },
            mission: {
                title: "Mission",
                points: [
                    "Construire un héritage de discipline et de trading durable.",
                    "Garantir la transparence : contributions et revenus enregistrés on‑chain.",
                    "Créer une communauté de traders millionnaires menée par 100 pionniers.",
                ],
            },
            core: {
                title: "Valeurs clés",
                items: [
                    ["Discipline", "Le système avant la chance ; la constance avant l’émotion."],
                    ["Transparence", "Récompenses/sanctions et partage des revenus on‑chain."],
                    ["Héritage", "Les 100 premiers posent le modèle pour les générations suivantes."],
                ],
            },
            structure: {
                title: "Structure du Council",
                tiers: [
                    {
                        name: "Council Core (10)",
                        bullets: [
                            "Leadership stratégique et priorité de vote sur les changements clés.",
                            "Élus parmi les 100 via le Contribution Scorecard.",
                        ],
                    },
                    {
                        name: "Membres du Council (100)",
                        bullets: [
                            "Représentants pionniers avec reporting et constance.",
                            "Éligibles au partage de revenus et au vote.",
                        ],
                    },
                    {
                        name: "Représentants de la Communauté",
                        bullets: [
                            "Mentors pour les vagues #101+ ; reconnus via le score communautaire.",
                        ],
                    },
                ],
            },
            utilities: {
                title: "Droits & Utilities",
                items: [
                    [
                        "Accès & Statut",
                        "Seul billet d’entrée au Council (premiers 100) ; statut de membre fondateur.",
                    ],
                    [
                        "Partage de revenus on‑chain",
                        "10% des frais d’abonnement trimestriels (à partir du #101+) partagés selon le Contribution Score.",
                    ],
                    [
                        "Vote & Gouvernance",
                        "Voter les règles de récompense/sanction, nouvelles vagues, fonds communautaires.",
                    ],
                ],
            },
            performance: {
                title: "Mécanisme de Performance Share",
                rows: [
                    ["Performance Fee", "Le trader conserve 80% ; LUMIR reçoit 20% (opérations & coaching)."],
                    [
                        "Revenue Sharing",
                        "10% des frais d’inscription au Challenge (à partir du #101+) → détenteurs de NFT, pondérés par le Contribution Score.",
                    ],
                ],
                score: {
                    title: "Contribution Scorecard (CS)",
                    header: ["Composant", "Poids", "Mesure"],
                    rows: [
                        ["Performance", "40%", "%PnL moyen / trimestre"],
                        ["Discipline (TBI)", "30%", "Consistency Score issu du coaching IA"],
                        ["Communauté", "20%", "Heures de mentorat vérifiées & partages"],
                        ["Longévité", "10%", "Semaines de participation régulière"],
                    ],
                    formula: "CS = 0.4×Performance + 0.3×Discipline + 0.2×Communauté + 0.1×Longévité",
                },
            },
            roadmap: {
                title: "Feuille de route NFT en 3 niveaux",
                header: ["Niveau", "Quantité", "Prix", "Rôle"],
                rows: [
                    ["13W Challenge — Council", "100", "500 USDC", "Traders fondateurs ; partage de revenus & vote"],
                    ["Pioneer NFT — IB Leaders", "30", "10 000 USDC", "Distribution régionale & croissance communautaire"],
                    ["Titan NFT — Strategic Partners", "30", "50 000 USDC", "Opérations pays/région & gouvernance globale"],
                ],
            },
        },
        vi: {
            hero: {
                title: "NFT Thành viên — 13W Challenge Council",
                subtitle:
                    "NFT vào cửa cho 100 trader tiên phong. Kỷ luật • Minh bạch • Di sản.",
                badges: ["Giới hạn 100", "500 USDC / NFT", "Voting & Revenue Share"],
                cta: { primary: "Đăng ký whitelist", secondary: "Xem Cẩm nang Council" },
            },
            mission: {
                title: "Sứ mệnh",
                points: [
                    "Xây dựng di sản kỷ luật & giao dịch bền vững.",
                    "Minh bạch on‑chain: ghi nhận đóng góp & doanh thu.",
                    "Tạo cộng đồng trader triệu phú do 100 người đầu tiên dẫn dắt.",
                ],
            },
            core: {
                title: "Giá trị cốt lõi",
                items: [
                    ["Kỷ luật", "Hệ thống cao hơn may mắn; nhất quán hơn cảm xúc."],
                    ["Minh bạch", "Thưởng/phạt & chia sẻ doanh thu on‑chain."],
                    ["Di sản", "100 người đầu tiên làm mẫu cho các thế hệ sau."],
                ],
            },
            structure: {
                title: "Cấu trúc Hội đồng",
                tiers: [
                    {
                        name: "Council Core (10)",
                        bullets: [
                            "Lãnh đạo chiến lược; quyền biểu quyết ưu tiên.",
                            "Bầu từ 100 thành viên dựa trên Contribution Scorecard.",
                        ],
                    },
                    {
                        name: "Council Members (100)",
                        bullets: [
                            "Đại diện tiên phong; báo cáo minh bạch & Consistency.",
                            "Hưởng revenue share & quyền biểu quyết.",
                        ],
                    },
                    {
                        name: "Community Representatives",
                        bullets: [
                            "Mentor cho batch #101+; được ghi nhận điểm cộng đồng.",
                        ],
                    },
                ],
            },
            utilities: {
                title: "Quyền lợi & Utility",
                items: [
                    [
                        "Vé vào cổng & vị thế",
                        "Tấm vé duy nhất vào Hội đồng (100 đầu tiên); vị thế thành viên sáng lập.",
                    ],
                    [
                        "Chia sẻ doanh thu on‑chain",
                        "10% Subscription Fee hằng quý (từ #101+) chia theo Contribution Score.",
                    ],
                    [
                        "Voting & Governance",
                        "Biểu quyết cơ chế thưởng/phạt, mở batch mới, quỹ cộng đồng.",
                    ],
                ],
            },
            performance: {
                title: "Cơ chế Performance Share",
                rows: [
                    ["Performance Fee", "Trader giữ 80%; LUMIR nhận 20% (vận hành & coaching)."],
                    [
                        "Revenue Sharing",
                        "10% phí tham gia Challenge (từ #101+) → NFT holders, phân bổ theo Contribution Score.",
                    ],
                ],
                score: {
                    title: "Contribution Scorecard (CS)",
                    header: ["Thành phần", "Trọng số", "Cách đo"],
                    rows: [
                        ["Performance", "40%", "%PnL trung bình theo quý"],
                        ["Discipline (TBI)", "30%", "Consistency Score từ AI coaching"],
                        ["Community", "20%", "Giờ mentoring & lượt chia sẻ được xác thực"],
                        ["Longevity", "10%", "Số tuần tham gia đều đặn"],
                    ],
                    formula: "CS = 0.4×Performance + 0.3×Discipline + 0.2×Community + 0.1×Longevity",
                },
            },
            roadmap: {
                title: "Lộ trình 3 tầng NFT",
                header: ["Tầng", "Số lượng", "Giá", "Vai trò"],
                rows: [
                    ["13W Challenge — Council", "100", "500 USDC", "Trader sáng lập; revenue share & voting"],
                    ["Pioneer NFT — IB Leaders", "30", "10.000 USDC", "Phân phối khu vực & phát triển cộng đồng"],
                    ["Titan NFT — Strategic Partners", "30", "50.000 USDC", "Vận hành quốc gia/khu vực & global governance"],
                ],
            },
        },
    } as const;

    const t = CONTENT_13W[lang as keyof typeof CONTENT_13W] ?? CONTENT_13W.en;

    return (
        <div className="w-full bg-white flex flex-col gap-0 overflow-visible max-md:pt-10 max-md:pb-10">
            <main className="mx-auto w-[100%] md:max-w-6xl px-0 sm:px-4 py-8 sm:py-14">
                {/* HERO */}
                <section className="grid gap-6 lg:grid-cols-12 lg:items-center">
                    <div className="space-y-5 lg:col-span-8">
                        <div className="flex flex-wrap gap-2">
                            {t.hero.badges.map((b) => (
                                <Badge key={b} variant="secondary" className="uppercase tracking-wide">{b}</Badge>
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{t.hero.title}</h2>
                        <p className="text-base sm:text-lg text-muted-foreground">{t.hero.subtitle}</p>
                        <div className="flex gap-3 pt-1">
                            <Button size="lg" className="inline-flex items-center gap-2">
                                <Rocket className="h-4 w-4" /> {t.hero.cta.primary}
                            </Button>
                            <Button variant="outline" size="lg" className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> {t.hero.cta.secondary}
                            </Button>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <Card className="border-dashed">
                            <CardHeader>
                                <CardTitle className="text-base flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5" /> Council Utility
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-2">
                                {t.utilities.items.map(([k, v]) => (
                                    <div key={k}>
                                        <div className="font-medium">{k}</div>
                                        <div className="text-xs">{v}</div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator className="my-10" />

                {/* MISSION & CORE VALUES */}
                <section className="grid gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader><CardTitle className="text-base flex items-center gap-2"><Target className="h-5 w-5" /> {t.mission.title}</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="pl-1 text-sm text-muted-foreground space-y-2">
                                {t.mission.points.map((p) => (
                                    <li key={p} className="flex items-start gap-2">
                                        <Check className="h-4 w-4 mt-0.5 text-foreground/80" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle className="text-base flex items-center gap-2"><Brain className="h-5 w-5" /> {t.core.title}</CardTitle></CardHeader>
                        <CardContent className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            {t.core.items.map(([title, desc]) => (
                                <div key={title}>
                                    <div className="font-semibold">{title}</div>
                                    <div className="text-xs">{desc}</div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <Separator className="my-10" />

                {/* STRUCTURE */}
                <section className="space-y-4">
                    <SectionHeader title={t.structure.title} />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {t.structure.tiers.map((tier) => (
                            <Card key={tier.name}>
                                <CardHeader><CardTitle className="text-base flex items-center gap-2"><Users className="h-5 w-5" /> {tier.name}</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="pl-1 text-sm text-muted-foreground space-y-2">
                                        {tier.bullets.map((b: string) => (
                                            <li key={b} className="flex items-start gap-2">
                                                <Check className="h-4 w-4 mt-0.5 text-foreground/80" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator className="my-10" />

                {/* UTILITIES */}
                <section className="space-y-4">
                    <SectionHeader title={t.utilities.title} />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {t.utilities.items.map(([title, desc]) => (
                            <Card key={title}>
                                <CardHeader><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> {title}</CardTitle></CardHeader>
                                <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator className="my-10" />

                {/* PERFORMANCE SHARE */}
                <section className="space-y-6">
                    <SectionHeader title={t.performance.title} />
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead>Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {t.performance.rows.map(([k, v]) => (
                                    <TableRow key={k}>
                                        <TableCell className="font-medium">{k}</TableCell>
                                        <TableCell className="text-sm text-muted-foreground">{v}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <Card>
                        <CardHeader><CardTitle className="text-base flex items-center gap-2"><Activity className="h-5 w-5" /> {t.performance.score.title}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            {t.performance.score.header.map((h) => (<TableHead key={h}>{h}</TableHead>))}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {t.performance.score.rows.map((r) => (
                                            <TableRow key={r[0]}>
                                                {r.map((c) => (<TableCell key={c}>{c}</TableCell>))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <Alert className="mt-4">
                                <Target className="h-4 w-4" />
                                <AlertTitle className="font-semibold">Formula</AlertTitle>
                                <AlertDescription className="text-xs">{t.performance.score.formula}</AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>
                </section>

                <Separator className="my-10" />

                {/* ROADMAP */}
                <section className="space-y-4">
                    <SectionHeader title={t.roadmap.title} />
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {t.roadmap.header.map((h) => (<TableHead key={h}>{h}</TableHead>))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {t.roadmap.rows.map((row) => (
                                    <TableRow key={row[0]}>
                                        {row.map((c) => (<TableCell key={c}>{c}</TableCell>))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default function PioneerLandingPageWithTabs() {
    const [modalActive, setModalActive] = useState(false);
    const { isDesktop } = useInterface();
    return (
        <div>
            {/* Full-width banner (always visible) */}
            <HeadderDesktopFull changeAt={190} />
            <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
            {isDesktop &&
                <div className="w-full h-[260px] relative z-[1]">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <Image src="https://res.cloudinary.com/dvtuy0whs/image/upload/v1751855448/nec_bg_kwkubx.jpg" alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
                </div>
            }

            {/* Tabs wrapper */}
            <div className="mx-auto w-[100%] md:max-w-6xl px-0 sm:px-4 pt-6 sm:pt-10">
                <Tabs defaultValue="pioneer" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="pioneer">Pioneer NFT</TabsTrigger>
                        <TabsTrigger value="nft13w">13W Challenge</TabsTrigger>
                    </TabsList>

                    <TabsContent value="pioneer" className="mt-0">
                        <PioneerTab />
                    </TabsContent>

                    <TabsContent value="nft13w" className="mt-0">
                        <NFT13WTab />
                    </TabsContent>
                </Tabs>
            </div>

            <FooterFull fixed={false} setModalActive={() => { }} modalActive={false} />
        </div>
    );
}
